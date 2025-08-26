import React, { useEffect, useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import csulogo from "@/assets/csulogo.png";

// Helper to join classes
function cn(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

const navItems = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Products", to: "/products" },
  { label: "Industries", to: "/industries" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
  { label: "Scroll Demo", to: "/scroll-demo" },
];

const productLinks = [
  { label: "Product CXO", to: "/product-cxo" },
  { label: "Product Management App", to: "/product-management-app" },
  { label: "Product Journey", to: "/products" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const productsRef = useRef<HTMLDivElement | null>(null);
  // No scroll-based background; header stays transparent

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [isMenuOpen]);

  // Close desktop products dropdown when clicking outside
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (productsRef.current && !productsRef.current.contains(e.target as Node)) {
        setIsProductsOpen(false);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full bg-transparent" role="banner">
      {/* Skip to content for a11y */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] rounded-md bg-white/90 px-3 py-2 text-sm font-medium text-black shadow"
      >
        Skip to content
      </a>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <nav className="flex h-16 items-center justify-between" aria-label="Primary">
          {/* Logo */}
          <div className="flex min-w-0 items-center">
            <Link to="/" className="group flex items-center gap-3 no-underline" aria-label="Cybersecurity Umbrella home">
              <img src={csulogo} alt="Cybersecurity Umbrella logo" className="h-10 w-10 object-contain" />
              <span className="truncate text-base sm:text-lg lg:text-xl font-semibold tracking-tight text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.65)]">
                <span className="hidden sm:inline">Cybersecurity Umbrella</span>
                <span className="sm:hidden">CSU</span>
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              item.label === "Products" ? (
                <div key="products" className="relative" ref={productsRef}>
                  <button
                    type="button"
                    onClick={() => setIsProductsOpen(v => !v)}
                    className={cn(
                      "rounded-lg px-3.5 py-2 text-sm font-medium tracking-wide",
                      "text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.65)] hover:text-white hover:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60",
                    )}
                    aria-expanded={isProductsOpen}
                    aria-haspopup="menu"
                  >
                    <span className="inline-flex items-center gap-1">Products <ChevronDown className="h-4 w-4" /></span>
                  </button>
                  {isProductsOpen && (
                    <div role="menu" className="absolute mt-2 w-64 rounded-lg border border-white/10 bg-black/80 backdrop-blur-sm p-2 shadow-lg">
                      {productLinks.map((pl) => (
                        <Link key={pl.to} to={pl.to} className="block rounded-md px-3 py-2 text-sm text-gray-200 hover:text-white hover:bg-white/10 no-underline" onClick={() => setIsProductsOpen(false)}>
                          {pl.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    cn(
                      "rounded-lg px-3.5 py-2 text-sm font-medium tracking-wide no-underline transition",
                      "text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.65)] hover:text-white hover:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60",
                      isActive && "text-white"
                    )
                  }
                >
                  {item.label}
                </NavLink>
              )
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/login">
              <Button
                variant="ghost"
                className="text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.65)] hover:bg-transparent"
              >
                Sign In
              </Button>
            </Link>
            <Link to="/get-demo">
              <Button className="group rounded-full border-2 border-white/80 bg-transparent text-white px-5 py-2.5 font-semibold drop-shadow-[0_2px_6px_rgba(0,0,0,0.65)] transition-colors duration-300 hover:bg-white hover:text-black">
                Get Demo
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.65)] hover:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen((v) => !v)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={cn(
          "lg:hidden origin-top overflow-hidden border-t border-transparent bg-black/80 backdrop-blur-sm transition-[max-height,opacity] duration-300 ease-out",
          isMenuOpen ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              item.label === "Products" ? (
                <div key="mobile-products">
                  <button
                    type="button"
                    onClick={() => setIsMobileProductsOpen(v => !v)}
                    className={cn(
                      "block rounded-lg px-4 py-3 text-base font-medium w-full text-left",
                      "text-gray-200 hover:text-white hover:bg-white/10"
                    )}
                    aria-expanded={isMobileProductsOpen}
                  >
                    <span className="inline-flex items-center gap-2">Products <ChevronDown className={`h-4 w-4 transition-transform ${isMobileProductsOpen ? "rotate-180" : ""}`} /></span>
                  </button>
                  {isMobileProductsOpen && (
                    <div className="ml-2 border-l border-white/10 pl-2">
                      {productLinks.map((pl) => (
                        <Link key={pl.to} to={pl.to} onClick={() => { setIsMenuOpen(false); setIsMobileProductsOpen(false); }} className="block rounded-lg px-4 py-2 text-base font-medium text-gray-200 hover:text-white hover:bg-white/10 no-underline">
                          {pl.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "block rounded-lg px-4 py-3 text-base font-medium no-underline transition",
                      "text-gray-200 hover:text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60",
                      isActive && "text-white bg-white/10"
                    )
                  }
                >
                  {item.label}
                </NavLink>
              )
            ))}

            <div className="mt-3 grid grid-cols-2 gap-2">
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                <Button
                  variant="outline"
                  className="w-full border-white/15 text-gray-200 hover:text-white hover:bg-white/10"
                >
                  Sign In
                </Button>
              </Link>
              <Link to="/get-demo" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-red-600 hover:bg-red-500 text-white">Get Demo</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}