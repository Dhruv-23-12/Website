/**
 * Google Apps Script for Contact Form Integration
 * 
 * This script receives form data from your website and saves it to a Google Sheet
 * 
 * SETUP INSTRUCTIONS:
 * 1. Go to https://script.google.com/
 * 2. Create a new project
 * 3. Replace the default code with this script
 * 4. Update the SHEET_ID and SHEET_NAME variables below
 * 5. Deploy as a web app with execute permissions for "Anyone"
 * 6. Copy the web app URL and update GOOGLE_SCRIPT_URL in ContactForm.tsx
 */

// ===== CONFIGURATION - UPDATE THESE VALUES =====
const SHEET_ID = '1zSP0qvbMDzfiFt0DeduYedyJl-NayktNYviPaeyRm7w'; // Replace with your Google Sheet ID
const SHEET_NAME = 'CSU Contact form'; // Replace with your sheet name

// ===== MAIN FUNCTION =====
function doPost(e) {
  try {
    // Log the incoming event for debugging
    console.log('Received request:', typeof e);
    
    // Check if event is defined and has postData
    if (!e || !e.postData || !e.postData.contents) {
      console.error('Invalid request: e =', e, 'e.postData =', e ? e.postData : 'undefined');
      return ContentService
        .createTextOutput(JSON.stringify({ 
          success: false, 
          error: 'Invalid request format',
          details: 'Request data is missing',
          received: e
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Parse the incoming JSON data
    console.log('Raw data:', e.postData.contents);
    const data = JSON.parse(e.postData.contents);
    console.log('Parsed data:', data);
    
    // Get the Google Sheet
    const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);
    
    // If sheet doesn't exist, create it with headers
    if (!sheet) {
      sheet = spreadsheet.insertSheet(SHEET_NAME);
      
      // Add headers
      const headers = [
        'Timestamp', 
        'Full Name', 
        'Email', 
        'Company', 
        'Phone', 
        'Service Interest', 
        'Project Details'
      ];
      
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      
      // Format headers
      const headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#f0f0f0');
      headerRange.setBorder(true, true, true, true, true, true);
    }
    
    // Prepare the row data
    const rowData = [
      data.timestamp || new Date().toISOString(),
      data.fullName || '',
      data.email || '',
      data.company || '',
      data.phone || '',
      data.serviceInterest || '',
      data.projectDetails || ''
    ];
    
    // Add the data to the sheet
    sheet.appendRow(rowData);
    
    // Auto-resize columns for better readability
    sheet.autoResizeColumns(1, 7);
    
    // Add a border to the new row
    const lastRow = sheet.getLastRow();
    sheet.getRange(lastRow, 1, 1, 7).setBorder(true, true, true, true, true, true);
    
    // Log success for debugging
    console.log('Data saved successfully:', data);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: true, 
        message: 'Data saved successfully',
        timestamp: new Date().toISOString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Log error for debugging
    console.error('Error processing form data:', error);
    
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false, 
        error: 'Failed to process form data',
        details: error.toString(),
        timestamp: new Date().toISOString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ===== TEST FUNCTION =====
function testScript() {
  const testData = {
    timestamp: new Date().toISOString(),
    fullName: 'Test User',
    email: 'test@example.com',
    company: 'Test Company',
    phone: '+1-555-123-4567',
    serviceInterest: 'Assessment & Review',
    projectDetails: 'This is a test message to verify the script is working correctly.'
  };
  
  // Create a proper mock event object
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData),
      length: JSON.stringify(testData).length,
      name: 'application/json'
    },
    parameter: {},
    contextPath: '',
    contentLength: JSON.stringify(testData).length,
    queryString: '',
    parameters: {}
  };
  
  const result = doPost(mockEvent);
  console.log('Test result:', result.getContent());
  
  return result;
}

// ===== SETUP HELPER FUNCTION =====
function setupSheet() {
  try {
    const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);
    
    if (!sheet) {
      sheet = spreadsheet.insertSheet(SHEET_NAME);
      
      // Add headers
      const headers = [
        'Timestamp', 
        'Full Name', 
        'Email', 
        'Company', 
        'Phone', 
        'Service Interest', 
        'Project Details'
      ];
      
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      
      // Format headers
      const headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#f0f0f0');
      headerRange.setBorder(true, true, true, true, true, true);
      
      console.log('Sheet created successfully with headers');
    } else {
      console.log('Sheet already exists');
    }
    
    return sheet;
  } catch (error) {
    console.error('Error setting up sheet:', error);
    throw error;
  }
}

// ===== MAIN TEST FUNCTION =====
function runFirstTimeSetup() {
  try {
    console.log('Starting setup...');
    
    // First, setup the sheet
    const sheet = setupSheet();
    console.log('Sheet setup complete');
    
    // Now add a test row
    const testData = [
      new Date().toISOString(),
      'Test User',
      'test@example.com',
      'Test Company',
      '+1-555-123-4567',
      'Assessment & Review',
      'This is a test message to verify the script is working correctly.'
    ];
    
    sheet.appendRow(testData);
    
    // Auto-resize columns
    sheet.autoResizeColumns(1, 7);
    
    console.log('Test data added successfully');
    console.log('Setup complete! Your script is ready to receive form submissions.');
    
    return {
      success: true,
      message: 'Setup complete. Check your Google Sheet for the test data.'
    };
  } catch (error) {
    console.error('Setup error:', error);
    return {
      success: false,
      error: error.toString()
    };
  }
}

/**
 * COMPLETE SETUP GUIDE:
 * 
 * 1. CREATE GOOGLE SHEET:
 *    - Go to https://sheets.google.com/
 *    - Create a new blank sheet
 *    - Copy the Sheet ID from the URL (the long string between /d/ and /edit)
 *    - Example: https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
 *    - Sheet ID: 1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms
 * 
 * 2. SET UP GOOGLE APPS SCRIPT:
 *    - Go to https://script.google.com/
 *    - Click "New Project"
 *    - Delete all default code
 *    - Paste this entire script
 *    - Update SHEET_ID and SHEET_NAME variables at the top
 *    - Save the project (Ctrl+S)
 * 
 * 3. DEPLOY THE SCRIPT:
 *    - Click "Deploy" → "New deployment"
 *    - Click the gear icon ⚙️ → "Web app"
 *    - Set "Execute as": "Me"
 *    - Set "Who has access": "Anyone"
 *    - Click "Deploy"
 *    - Copy the Web App URL (it will look like: https://script.google.com/macros/s/AKfycbz.../exec)
 * 
 * 4. UPDATE CONTACT FORM:
 *    - Open src/components/ContactForm.tsx
 *    - Replace GOOGLE_SCRIPT_URL with your Web App URL
 * 
 * 5. TEST THE SETUP:
 *    - Run the testScript() function in Apps Script
 *    - Check your Google Sheet for the test data
 *    - Submit a form on your website
 *    - Verify data appears in the sheet
 * 
 * TROUBLESHOOTING:
 * - Make sure Sheet ID is correct
 * - Ensure script is deployed with "Anyone" access
 * - Check that Web App URL ends with /exec (not /dev)
 * - Verify sheet permissions allow editing
 * - Run testScript() to verify everything works
 */
