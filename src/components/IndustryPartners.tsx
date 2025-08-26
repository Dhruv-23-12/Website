import React, { useEffect } from "react";
import WebFont from "webfontloader";

const logoData = [
  {
    src: "https://cdn.prod.website-files.com/6684839a47fd287b7d32dafd/6684839a47fd287b7d32de13_startup-logo-intellitech-x-webflow-template.svg",
    alt: "Startup Logo - IntelliTech X Webflow Template",
  },
  {
    src: "https://cdn.prod.website-files.com/6684839a47fd287b7d32dafd/6684839a47fd287b7d32de01_business-logo-intellitech-x-webflow-template.svg",
    alt: "Business Icon - IntelliTech X Webflow Template",
  },
  {
    src: "https://cdn.prod.website-files.com/6684839a47fd287b7d32dafd/6684839a47fd287b7d32de12_studio-logo-intellitech-x-webflow-template.svg",
    alt: "Studio Logo - IntelliTech X Webflow Template",
  },
  {
    src: "https://cdn.prod.website-files.com/6684839a47fd287b7d32dafd/6684839a47fd287b7d32de02_enterprise-logo-intellitech-x-webflow-template.svg",
    alt: "Enterprise Logo - IntelliTech X Webflow Template",
  },
  {
    src: "https://cdn.prod.website-files.com/6684839a47fd287b7d32dafd/6684839a47fd287b7d32ddff_organization-logo-intellitech-x-webflow-template.svg",
    alt: "Organization Logo - IntelliTech X Webflow Template",
  },
  {
    src: "https://cdn.prod.website-files.com/6684839a47fd287b7d32dafd/6684839a47fd287b7d32de00_company-logo-intellitech-x-webflow-template.svg",
    alt: "Company Logo - IntelliTech X Webflow Template",
  },
];

function LogoStrip() {
  // Each logo with a divider except the last
  return (
    <div className="logo-strip">
      {logoData.map((logo, idx) => (
        <div style={{ display: "flex", alignItems: "center" }} key={logo.alt + idx}>
          <div className="logo-strip-item">
            <img src={logo.src} loading="lazy" alt={logo.alt} style={{ height: "40px", width: "auto" }} />
          </div>
          {idx < logoData.length - 1 && <div className="logo-strip-divider"></div>}
        </div>
      ))}
    </div>
  );
}

export default function TrustedByPartners() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Inter:regular,600,800", "Source Code Pro:regular,600,800"],
      },
    });

    // Equivalent to the !function(o, c) head script: set up class on html element
    const n = document.documentElement;
    const t = " w-mod-";
    n.className += t + "js";
    if ("ontouchstart" in window) {
      n.className += t + "touch";
    }
  }, []);

  return (
    <div className="page-wrapper">
      {/* Internal CSS for Animation and Styling */}
      <style>{`
        .logo-strip-marquee-outer {
          position: relative;
          overflow: hidden;
          width: 100%;
          background: transparent;
          /* margin: 0 auto; */
        }

        .logo-strip-marquee-inner {
          display: flex;
          width: fit-content;
          min-width: 100%;
          animation: logo-marquee 18s linear infinite;
        }

        @keyframes logo-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .logo-strip {
          display: flex;
          align-items: center;
        }
        .logo-strip-item {
          padding: 0 24px;
        }
        .logo-strip-divider {
          width: 1px;
          height: 32px;
          background: #2d3641;
          margin: 0 8px;
        }
        /* Demo section styling, optional */
        .section.py-4 {
          padding-top: 2.5rem;
          padding-bottom: 2.5rem;
          background: #000;
        }
        .text-center {
          text-align: center;
        }
        .font-semibold { font-weight: 600; }
        .text-lg { font-size: 1.5rem; }
        .mb-2 { margin-bottom: 0.5rem; }
        .mg-top-section-small { margin-top: 1.5rem; }
        .mg-top-small { margin-top: 1rem; }
        .position-relative { position: relative; }
        .overflow-hidden { overflow: hidden; }

        /* Optional: fade overlays if you want fade effect at edges */
        .logo-strip-fade {
          position: absolute;
          top: 0;
          left: 0;
          width:  5px;
          height: 50%;
          pointer-events: none;
          background: linear-gradient(90deg, #000 80%, transparent);
          z-index: 2;
        }
        .logo-strip-fade.right {
          left: auto;
          right: 0;
          background: linear-gradient(-90deg, #000 80%, transparent);
        }
      `}</style>

      <section className="section py-4" style={{ backgroundColor: '#000' }}>
        <div className="w-layout-blockcontainer container-default w-container">
          <div className="mg-top-section-small">
            <div className="text-center mb-2">
              <h2 className="text-lg font-semibold" style={{ color: "rgba(255,255,255,0.8)" }}>
                Trusted by
              </h2>
            </div>
            <div className="mg-top-small">
              <div className="position-relative overflow-hidden logo-strip-v6" style={{ minHeight: 40 }}>
                <div className="logo-strip-fade right"></div>
                <div className="logo-strip-fade"></div>
                <div className="logo-strip-marquee-outer">
                  <div className="logo-strip-marquee-inner">
                    <LogoStrip />
                    <LogoStrip />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
