import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import csuLogo from '../assets/CSUlogo_white (1).png';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const scrollStateRef = useRef({ isScrolled: false, lastUpdate: 0 });


  const isHome = location.pathname === '/';

  const routeLockUntilRef = useRef<number>(0);

  useEffect(() => {
    // Ultra-stable scroll detection with aggressive debouncing
    const isHomeRoute = location.pathname === '/';
    const ENTER_THRESHOLD = isHomeRoute ? 0.30 : 0.20; // Even higher thresholds
    const EXIT_THRESHOLD = isHomeRoute ? 0.25 : 0.18;  // Larger hysteresis gap

    let lastScrollY = window.scrollY;
    let lastScrollDirection = 'down';
    let scrollTimeout: NodeJS.Timeout;
    let isUpdating = false;

    const update = () => {
      if (isUpdating) return;
      isUpdating = true;

      const heroHeight = window.innerHeight;
      const y = window.scrollY;
      const scrollDelta = y - lastScrollY;
      const scrollDirection = scrollDelta > 0 ? 'down' : 'up';
      
      // Only update if:
      // 1. Scroll change is significant (> 10px)
      // 2. Direction changed or significant movement
      // 3. Not during rapid scrolling
      if (Math.abs(scrollDelta) < 10 && scrollDirection === lastScrollDirection) {
        isUpdating = false;
        return;
      }
      
      lastScrollY = y;
      lastScrollDirection = scrollDirection;
      
      const shouldBeScrolled = y > heroHeight * ENTER_THRESHOLD;
      const shouldNotBeScrolled = y < heroHeight * EXIT_THRESHOLD;
      const currentTime = performance.now();
      
      // Only update if enough time has passed since last update (prevent rapid changes)
      if (currentTime - scrollStateRef.current.lastUpdate < 150) {
        isUpdating = false;
        return;
      }
      
      setIsScrolled((prev) => {
        // Only change state if there's a clear decision and state actually needs to change
        if (!prev && shouldBeScrolled) {
          scrollStateRef.current = { isScrolled: true, lastUpdate: currentTime };
          return true;
        }
        if (prev && shouldNotBeScrolled) {
          scrollStateRef.current = { isScrolled: false, lastUpdate: currentTime };
          return false;
        }
        return prev; // Keep current state if in the hysteresis zone
      });
      
      isUpdating = false;
    };

    const onScroll = () => {
      // Avoid toggling during immediate route transition
      if (performance.now() < routeLockUntilRef.current) return;
      
      // Clear existing timeout
      if (scrollTimeout) clearTimeout(scrollTimeout);
      
      // Aggressive debouncing - only update after scroll stops for 100ms
      scrollTimeout = setTimeout(() => {
        update();
      }, 100);
    };

    // Initial state per route
    update();
    // Lock state longer after route changes
    routeLockUntilRef.current = performance.now() + 800;

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [location.pathname]);

  // Navigation items excluding dropdowns and Home (rendered explicitly for ordering)
  const navItems = [
  { name: 'Case Studies', path: '/case-studies' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Blog', path: '/blog' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' }
  ];
  const productsMenu = [
    { name: 'CXO Map', path: '/cxo-map' },
    { name: 'CXO Map 1', path: '/cxo-map-1' },
    { name: 'CXO Map 2', path: '/cxo-map-2' }
  ];

  const servicesMenu = [
    { name: 'Assessment & Review', path: '/assessment-review' },
    { name: 'Organizational Training & Awareness', path: '/organizational-training' },
    { name: 'Research, Development & Automation', path: '/research-development-automation' },
    { name: 'Cyber-SOC', path: '/cyber-soc' }
  ];



  // Determine if header should use dark theme
  // - Always dark on non-home pages
  // - Dark when scrolled on home page
  // - Dark when mobile menu is open
  const useDarkTheme = !isHome || isScrolled || isMobileMenuOpen;
  
  // Always use dark floating variant (black background when floating)
  const floatingVariant = 'navbar-floating-container--dark';

  return (
    <header
      className={`${isHome ? 'absolute inset-x-0 top-0' : 'relative'} z-50 w-full ${
        isScrolled 
          ? 'fixed top-4 left-0 right-0 flex justify-center px-4' 
          : 'transition-colors duration-300'
      } ${
        useDarkTheme && !isScrolled ? 'bg-black/95 backdrop-blur-md shadow-lg border-b border-gray-800' : 'bg-transparent'
      }`}
      style={{ 
        willChange: isScrolled ? 'transform, opacity' : 'auto',
        transition: isScrolled ? 'none' : 'background-color 0.3s ease, backdrop-filter 0.3s ease'
      }}
    >
      <nav className={`${isScrolled ? 'p-0' : 'container mx-auto px-6 py-5'}`}>
        {/* Floating container wrapper - only when scrolled */}
        <div className={`flex items-center justify-between ${isScrolled ? `navbar-floating-container ${floatingVariant}` : ''}`}>
          <Link to="/" className={`text-2xl font-black tracking-tight transition-colors duration-300 ${
            useDarkTheme ? 'text-white' : 'text-white'
          }`} aria-label="Home">
            <div className="flex items-center gap-3">
              <img src={csuLogo} alt="Company logo" className="h-12 md:h-14 w-auto" />
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center space-x-6 whitespace-nowrap ${isScrolled ? 'nav-item' : ''}`}>
            {/* Home */}
            <Link
              key="Home"
              to="/"
              className={`transition-all duration-300 relative group font-medium tracking-wide ${
                useDarkTheme 
                  ? 'text-white hover:text-gray-300' 
                  : 'text-white hover:text-gray-300'
              }`}
            >
              Home
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                useDarkTheme ? 'bg-white' : 'bg-white'
              }`}></span>
            </Link>

            {/* Product Dropdown */}
            <div className="relative group">
              <Link
                to="/cxo-map"
                className={`transition-all duration-300 relative font-medium tracking-wide ${
                  useDarkTheme 
                    ? 'text-white hover:text-gray-300' 
                    : 'text-white hover:text-gray-300'
                }`}
              >
                Product
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  useDarkTheme ? 'bg-white' : 'bg-white'
                }`}></span>
              </Link>
              <div className={`dropdown-panel invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute top-full left-0 mt-3 w-80 rounded-xl border ${
                useDarkTheme ? 'bg-white border-gray-100' : 'bg-white border-gray-100'
              }`}>
                <div className="py-2">
                  {productsMenu.map((prod) => (
                    <Link
                      key={prod.name}
                      to={prod.path}
                      className="block px-4 py-3 text-sm text-gray-800 hover:bg-gray-50"
                    >
                      {prod.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Services Dropdown */}
            <div className="relative group">
              <Link
                to="/services"
                className={`transition-all duration-300 relative font-medium tracking-wide ${
                  useDarkTheme 
                    ? 'text-white hover:text-gray-300' 
                    : 'text-white hover:text-gray-300'
                }`}
              >
                Solutions
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  useDarkTheme ? 'bg-white' : 'bg-white'
                }`}></span>
              </Link>
              <div className={`dropdown-panel invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute top-full left-0 mt-3 w-80 rounded-xl border ${
                useDarkTheme ? 'bg-white border-gray-100' : 'bg-white border-gray-100'
              }`}>
                <div className="py-2">
                  {servicesMenu.map((svc) => (
                    <Link
                      key={svc.name}
                      to={svc.path}
                      className="block px-4 py-3 text-sm text-gray-800 hover:bg-gray-50"
                    >
                      {svc.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Remaining nav items in desired order */}
            {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`transition-all duration-300 relative group font-medium tracking-wide ${
                    useDarkTheme 
                      ? 'text-white hover:text-gray-300' 
                      : 'text-white hover:text-gray-300'
                  }`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    useDarkTheme ? 'bg-white' : 'bg-white'
                  }`}></span>
                </Link>
              ))}

            <button className={`px-6 py-2 rounded-lg transition-all duration-300 font-semibold tracking-wide ${
              isScrolled
                ? 'text-white'
                : (useDarkTheme ? 'bg-white text-black hover:bg-gray-200' : 'bg-white text-black hover:bg-gray-200')
            }`}>
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          {!isScrolled && (
            <button
              className={`md:hidden transition-colors duration-300 ${
                useDarkTheme ? 'text-white' : 'text-white'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        {/* Mobile Navigation - Overlay Panel */}
        {isMobileMenuOpen && (
          <>
          {/* backdrop */}
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden z-[80]" onClick={() => setIsMobileMenuOpen(false)} />
          {/* panel */}
          <div className="fixed md:hidden z-[90] right-4 left-4 sm:left-auto top-16 w-auto sm:w-80 bg-white text-black rounded-2xl shadow-2xl border border-gray-100 p-4 animate-slide-down">
            <button
              className="absolute top-3 right-3 p-2 rounded-md hover:bg-gray-100 focus:outline-none"
              aria-label="Close menu"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={18} />
            </button>
            {/* Home */}
            <Link
              key="Home-mobile"
              to="/"
              className="block px-6 py-3 text-black hover:bg-gray-50 transition-all duration-200 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>

            {/* Mobile Product expandable */}
            <details className="px-6" open={false}>
              <summary className="cursor-pointer list-none py-3 text-black font-medium hover:bg-gray-50 rounded-lg px-0">
                Product
              </summary>
              <div className="mt-2 rounded-lg border border-gray-100 overflow-hidden">
                {productsMenu.map((prod) => (
                  <Link
                    key={prod.name}
                    to={prod.path}
                    className="block px-4 py-3 text-sm text-gray-800 hover:bg-gray-50"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {prod.name}
                  </Link>
                ))}
              </div>
            </details>

            {/* Mobile Services expandable */}
            <details className="px-6" open={false}>
              <summary className="cursor-pointer list-none py-3 text-black font-medium hover:bg-gray-50 rounded-lg px-0">
                Solutions
              </summary>
              <div className="mt-2 rounded-lg border border-gray-100 overflow-hidden">
                {servicesMenu.map((svc) => (
                  <Link
                    key={svc.name}
                    to={svc.path}
                    className="block px-4 py-3 text-sm text-gray-800 hover:bg-gray-50"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {svc.name}
                  </Link>
                ))}
              </div>
            </details>

            {/* Remaining nav items */}
            {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block px-6 py-3 text-black hover:bg-gray-50 transition-all duration-200 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

            <button className="mt-4 bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 w-full font-semibold">
              Get Started
            </button>
          </div>
          </>
        )}
        </div>
      </nav>
    </header>
  );
};

export default Header;