"use client";
import { useState, useRef, useEffect } from "react";

const NAV_LINKS = [
  { label: "On Sale", href: "#" },
  { label: "New Arrivals", href: "#" },
  { label: "Brands", href: "#" },
];
const SHOP_ITEMS = [
  { label: "Dashboard", href: "#" },
  { label: "Settings", href: "#" },
  { label: "Earnings", href: "#" },
  { label: "Sign out", href: "#" },
];

const ChevronIcon = ({ isOpen }) => (
  <svg className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
  </svg>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header>
      {/* Banner */}
      {isBannerVisible && (
        <div className="bg-black text-white">
          <div className="max-w-screen-xl mx-auto px-4 py-2.5 flex items-center justify-center relative">
            <p className="text-sm font-light text-center">
              Sign up and get 20% off to your first order.{" "}
              <a href="#" className="underline font-medium hover:text-gray-300 transition-colors">Sign Up Now</a>
            </p>
            <button className="absolute right-4 p-1 hover:opacity-70 transition-opacity hidden sm:block" onClick={() => setIsBannerVisible(false)} aria-label="Close banner">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M18 6L6 18M6 6l12 12" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          </div>
        </div>
      )}

      {/* Navbar */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            {/* Left */}
            <div className="flex items-center gap-3">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-expanded={isMobileMenuOpen} className="inline-flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors md:hidden" aria-label="Toggle mobile menu">
                <svg className={`w-5 h-5 transition-transform duration-300 ${isMobileMenuOpen ? "rotate-90" : ""}`} fill="none" viewBox="0 0 17 14" aria-hidden="true"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" /></svg>
              </button>
              <a href="#" className="text-2xl sm:text-3xl font-black text-black tracking-tight">SHOP.CO</a>
            </div>

            {/* Center: Desktop links */}
            <div className="hidden md:flex items-center gap-6">
              <div ref={dropdownRef} className="relative">
                <button onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-black transition-colors py-2">
                  Shop <ChevronIcon isOpen={isOpen} />
                </button>
                {isOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-2xl z-50 py-2 border border-gray-100">
                    <ul>{SHOP_ITEMS.map(({ label, href }) => (<li key={label}><a href={href} className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors">{label}</a></li>))}</ul>
                  </div>
                )}
              </div>
              {NAV_LINKS.map(({ label, href }) => (<a key={label} href={href} className="text-sm font-medium text-gray-700 hover:text-black transition-colors py-2">{label}</a>))}
            </div>

            {/* Right: Search + Icons */}
            <div className="flex items-center gap-2">
              <div className="hidden sm:block w-48 lg:w-72">
                <div className="relative flex items-center h-10 rounded-full bg-[#F0F0F0] overflow-hidden focus-within:ring-2 focus-within:ring-black/10 transition-shadow">
                  <div className="grid place-items-center h-full w-10 text-gray-400">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                  </div>
                  <input className="h-full w-full outline-none text-sm text-gray-700 bg-transparent pr-4" type="text" id="search" placeholder="Search for products..." />
                </div>
              </div>
              <button className="sm:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors" aria-label="Search">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" /></svg>
              </button>
              <a href="#" className="p-2 hover:bg-gray-100 rounded-lg transition-colors" aria-label="Cart">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
              <a href="#" className="p-2 hover:bg-gray-100 rounded-lg transition-colors" aria-label="Account">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" /></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"}`}>
          <ul className="py-2 px-2">
            <li>
              <button onClick={() => setIsShopOpen(!isShopOpen)} aria-expanded={isShopOpen} className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <span className="font-medium">Shop</span>
                <ChevronIcon isOpen={isShopOpen} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${isShopOpen ? "max-h-60" : "max-h-0"}`}>
                <ul className="pl-4 pb-1">{SHOP_ITEMS.map(({ label, href }) => (<li key={label}><a href={href} className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">{label}</a></li>))}</ul>
              </div>
            </li>
            {NAV_LINKS.map(({ label, href }) => (<li key={label}><a href={href} className="block px-4 py-3 text-gray-700 font-medium hover:bg-gray-50 rounded-lg transition-colors">{label}</a></li>))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
