import React from "react";
import { Linkedin, Instagram, Facebook, Twitter, Mail } from "lucide-react";

const Footer: React.FC = () => (
  <footer data-w-id="d0097dd0-38fa-c03a-8837-218de1a50d47" className="footer-wrapper v1" style={{ backgroundColor: '#000' }}>
    <div className="w-layout-blockcontainer container-default width-100 z-index-1 w-container">
      <div className="divider"></div>

      {/* UPPER FOOTER */}
      <div className="footer-upper-section">
        <div className="footer-top v1">
          <div className="w-layout-grid footer-grid-v1" style={{ alignItems: 'start', columnGap: '48px' }}>
            {/* Popular Services */}
            <div id="w-node-d0097dd0-38fa-c03a-8837-218de1a50d4c-e1a50d47">
              <div className="footer-title">POPULAR SERVICES</div>
              <div className="w-layout-grid main-pages-wrapper footer">
                <ul role="list" className="footer-column-links">
                  <li className="footer-column-item">
                    <a href="#advisory-assurance" className="footer-item-link w-inline-block"><div>Advisory &amp; Assurance</div></a>
                  </li>
                  <li className="footer-column-item">
                    <a href="#assessment-review" className="footer-item-link w-inline-block"><div>Assessment &amp; Review</div></a>
                  </li>
                  <li className="footer-column-item">
                    <a href="#innovation-development" className="footer-item-link w-inline-block"><div>Innovation &amp; Development</div></a>
                  </li>
                  <li className="footer-column-item">
                    <a href="#cyber-soc" className="footer-item-link w-inline-block"><div>Cyber-SOC</div></a>
                  </li>
                  <li className="footer-column-item">
                    <a href="#training-awareness" className="footer-item-link w-inline-block"><div>Training &amp; Awareness</div></a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Company */}
            <div id="w-node-d0097dd0-38fa-c03a-8837-218de1a50d9f-e1a50d47">
              <div className="footer-title">COMPANY</div>
              <ul role="list" className="footer-column-links">
                <li className="footer-column-item">
                  <a href="/" className="footer-item-link w-inline-block"><div>Home</div></a>
                </li>
                <li className="footer-column-item">
                  <a href="#services" className="footer-item-link w-inline-block"><div>Services</div></a>
                </li>
                <li className="footer-column-item">
                  <a href="#product" className="footer-item-link w-inline-block"><div>Product</div></a>
                </li>
                <li className="footer-column-item">
                  <a href="#about-us" className="footer-item-link w-inline-block"><div>About-Us</div></a>
                </li>
                <li className="footer-column-item">
                  <a href="#contact-us" className="footer-item-link w-inline-block"><div>Contact-Us</div></a>
                </li>
              </ul>
            </div>
            {/* Offices */}
            <div id="w-node-d0097dd0-38fa-c03a-8837-218de1a50dbb-e1a50d47">
              <div className="footer-title">OFFICES</div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '10px' }}>
                <img src='/src/assets/canada.png' alt="Canada" style={{ width: '24px', height: '20px', marginBottom: '8px' }} />
                <span style={{ color: '#ffffff', fontSize: '18px', fontWeight: 600 }}>Canada Region</span>
              </div>
              <div style={{ fontSize: '15px', lineHeight: 1.6 }}>
                1, Dundas Street West Suites 2500,<br/>
                Toronto, ON, M5G 1Z3
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginTop: '20px', marginBottom: '10px' }}>
                <img src='/src/assets/india.png' alt="India" style={{ width: '24px', height: '20px', marginBottom: '8px' }} />
                <span style={{ color: '#ffffff', fontSize: '18px', fontWeight: 600 }}>India Region</span>
              </div>
              <div style={{ fontSize: '15px', lineHeight: 1.6 }}>
                406, Manthan Apartment,<br/>
                Above Central Bank of India,<br/>
                Gujarat Gas Circle, Adajan, Surat-395009
              </div>
            </div>
            {/* Contact Us */}
            <div>
              <div className="footer-title">CONTACT US</div>
              <div style={{ display: 'grid', gap: '12px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <img src="/src/assets/canada.png" alt="Canada" style={{ width: '24px', height: '20px', marginBottom: '8px' }} />
                  <div>
                    <div style={{ fontWeight: 600 }}>+1-437-500-4194</div>
                    <div>+1-437-782-3696</div>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <img src="/src/assets/india.png" alt="India" style={{ width: '24px', height: '20px', marginBottom: '8px' }} />
                  <div>
                    <div style={{ fontWeight: 600 }}>+91-7096022911</div>
                    <div>1800-858-1251</div>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <div style={{ marginBottom: '8px' }}>
                    <Mail color="#ffffff" size={20} />
                  </div>
                  <div>
                    <div>support@cybersecurityumbrella.com</div>
                    <div>hr@cybersecurityumbrella.com</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Follow Us - Right Column */}
            <div className="footer-follow" style={{ marginLeft: '24px' }}>
              <div className="footer-title">FOLLOW US</div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginTop: '8px' }}>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.2)' }} aria-label="LinkedIn">
                  <Linkedin color="#ffffff" size={20} />
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.2)' }} aria-label="Instagram">
                  <Instagram color="#ffffff" size={20} />
                </a>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.2)' }} aria-label="Facebook">
                  <Facebook color="#ffffff" size={20} />
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.2)' }} aria-label="Twitter/X">
                  <Twitter color="#ffffff" size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM FOOTER */}
      <div className="footer-bottom-section">
        <div className="footer-bottom v1">
          <div className="inner-container _340px _100-tablet">
            <div className="center-content---tablet">
              <div className="logo-wrapper">
                <a href="#" className="logo-link w-inline-block">
                  <img src="/yourLogo.png" alt="Company Logo" style={{ height: '64px', width: 'auto' }} loading="eager"/>
                </a>
              </div>
              <div className="mg-top-default">
                <p>
                  Copyright © IntelliTech X | Designed by{" "}
                  <a href="https://www.brixtemplates.com/" target="_blank" rel="noopener noreferrer" className="text-link">BRIX Templates</a>
                  {" "} - Powered by {" "}
                  <a href="https://www.webflow.com/" target="_blank" rel="noopener noreferrer" className="text-link">Webflow</a>
                </p>
              </div>
              
            </div>
          </div>
          <div className="inner-container _814px _100-tablet">
            <div className="card-image-wrapper card-default">
              <div className="card footer-card-v1">
                <div className="inner-container _320px">
                  <h3 className="display-7">Subscribe to our weekly newsletter</h3>
                </div>
                <div className="form-wrapper _340px w-form">
                  <form id="wf-form-Footer-V1-Form" name="wf-form-Footer-V1-Form" method="get" className="form inside-input" data-wf-page-id="6684839a47fd287b7d32db1d" data-wf-element-id="d0097dd0-38fa-c03a-8837-218de1a50df8">
                    <div className="input-wrapper">
                      <input
                        className="input btn-inside w-input"
                        maxLength={256}
                        name="Footer-V1-Email"
                        data-name="Footer V1 Email"
                        placeholder="Enter your email"
                        type="email"
                        id="Footer-V1-Email"
                        required
                      />
                      <input
                        type="submit"
                        data-wait="Please wait..."
                        className="primary-button inside-input w-button"
                        value="Subscribe"
                      />
                    </div>
                  </form>
                  <div className="success-message-wrapp w-form-done">
                    <div className="card inside-input">
                      <div className="icon-font-rounded"></div>
                      <div className="text-titles">
                        <div className="display-1 mid">
                          Thanks for joining our newsletter.<br/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="error-message-wrapper w-form-fail">
                    <div>Oops! Something went wrong while submitting the form.</div>
                  </div>
                </div>
              </div>
              <div className="card-border-container">
                <div className="card-corner---top-left card-default"></div>
                <div className="card-corner---top-right card-default"></div>
                <div className="card-corner---bottom-left card-default"></div>
                <div className="card-corner---bottom-right card-default"></div>
                <div className="card-border---top"></div>
                <div className="card-border---left"></div>
                <div className="card-border---right"></div>
                <div className="card-border---bottom"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="image-wrapper footer-v1-bg-image">
      <img
        src="https://cdn.prod.website-files.com/6684839a47fd287b7d32dafd/6684839a47fd287b7d32ddd5_footer-v1-bg-image-intellitech-x-webflow-template.jpg"
        loading="eager"
        sizes="(max-width: 1439px) 100vw, 1742px"
        srcSet="
          https://cdn.prod.website-files.com/6684839a47fd287b7d32dafd/6684839a47fd287b7d32ddd5_footer-v1-bg-image-intellitech-x-webflow-template-p-500.jpg 500w,
          https://cdn.prod.website-files.com/6684839a47fd287b7d32dafd/6684839a47fd287b7d32ddd5_footer-v1-bg-image-intellitech-x-webflow-template-p-800.jpg 800w,
          https://cdn.prod.website-files.com/6684839a47fd287b7d32dafd/6684839a47fd287b7d32ddd5_footer-v1-bg-image-intellitech-x-webflow-template-p-1080.jpg 1080w,
          https://cdn.prod.website-files.com/6684839a47fd287b7d32dafd/6684839a47fd287b7d32ddd5_footer-v1-bg-image-intellitech-x-webflow-template-p-1600.jpg 1600w,
          https://cdn.prod.website-files.com/6684839a47fd287b7d32dafd/6684839a47fd287b7d32ddd5_footer-v1-bg-image-intellitech-x-webflow-template-p-2000.jpg 2000w,
          https://cdn.prod.website-files.com/6684839a47fd287b7d32dafd/6684839a47fd287b7d32ddd5_footer-v1-bg-image-intellitech-x-webflow-template.jpg 3484w
        "
        alt=""
        className="image"
      />
    </div>
  <style>{`
    @media (max-width: 1024px) {
      .footer-grid-v1 { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); row-gap: 24px; column-gap: 24px !important; }
    }
    @media (max-width: 640px) {
      .footer-grid-v1 { grid-template-columns: 1fr; }
      .footer-title { font-size: 1rem; }
      .footer-wrapper .w-layout-blockcontainer { padding-left: 16px; padding-right: 16px; }
    }
  `}</style>
  <style>{`
    .footer-grid-v1 { grid-template-columns: repeat(5, minmax(0, 1fr)); }
    .footer-follow { margin-left: 24px; }
    @media (max-width: 1280px) {
      .footer-grid-v1 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
    }
    @media (max-width: 1024px) {
      .footer-grid-v1 { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); row-gap: 24px; column-gap: 24px !important; }
    }
    @media (max-width: 640px) {
      .footer-grid-v1 { grid-template-columns: 1fr; }
      .footer-title { font-size: 0.95rem; white-space: nowrap; }
      .footer-wrapper .w-layout-blockcontainer { padding-left: 16px; padding-right: 16px; }
      .footer-top.v1 { padding-top: 16px; }
      /* Keep combined words/phrases on a single line */
      .footer-column-links .footer-item-link div { white-space: nowrap; font-size: 0.9rem; }
      .footer-column-links { row-gap: 6px; }
      /* Align Follow Us column with others on mobile */
      .footer-follow { margin-left: 0 !important; }
      .footer-follow .footer-title { margin-top: 0; }
    }
  `}</style>
  </footer>
);

export default Footer;
