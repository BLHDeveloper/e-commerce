"use client";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Pour le menu déroulant "Shop"
  const dropdownRef = useRef(null); // Référence pour le menu déroulant "Shop"

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Pour le menu mobile
  const mobileMenuRef = useRef(null); // Référence pour le menu mobile

  const [isShopOpen, setIsShopOpen] = useState(false); // Pour le sous-menu "Shop"
  const dashboardRef = useRef(null); // Référence pour le sous-menu "Shop"

  // Fermer les menus déroulants lorsqu'on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
      if (
        dashboardRef.current &&
        !dashboardRef.current.contains(event.target)
      ) {
        setIsShopOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); // Retire les dépendances inutiles

  const [isBannerVisible, setIsBannerVisible] = useState(true); // Pour la bannière

  // Fonction pour masquer la bannière
  const toggleBanner = () => {
    setIsBannerVisible(false);
  };

  return (
    <>
      {/* Bannière supérieure */}
      {isBannerVisible && (
        <div className="flex flex-row justify-center bg-black">
          <div className="sm:basis-[85%]">
            <h5 className="py-2 text-center text-sm text-white font-light">
              Sign up and get 20% off to your first order.{" "}
              <span className="underline">Sign Up Now</span>
            </h5>
          </div>
          <button
            className="py-1 max-sm:hidden"
            onClick={toggleBanner}
            aria-label="Close banner"
          >
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 0.9 0.9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m0.637 0.263 -0.375 0.375m0 -0.375 0.375 0.375"
                stroke="#ffffff"
                strokeWidth="0.075"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      )}

      {/* Barre de navigation principale */}
      <nav className="bg-white shadow-md">
        <div className="max-w-screen-xl mx-auto p-4 flex justify-between items-center">
          {/* Logo et menu mobile */}
          <div ref={mobileMenuRef} className="flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              type="button"
              className="inline-flex items-center w-10 h-10 md:hidden"
              aria-label="Toggle mobile menu"
            >
              <svg
                className={`w-5 h-6 ${isMobileMenuOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <a href="#" className="text-4xl font-bold text-black">
              SHOP.CO
            </a>
            {isMobileMenuOpen && (
              <div
                ref={dashboardRef}
                className="absolute top-[6rem] left-0 w-[50%] bg-white rounded-xl shadow-2xl z-50 md:hidden "
              >
                <ul>
                  <li>
                    <button
                      onClick={() => setIsShopOpen(!isShopOpen)}
                      aria-expanded={isShopOpen}
                      className="flex items-center justify-between w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Shop
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          isShopOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {/* Sous-menu "Shop" */}
                    {isShopOpen && (
                      <ul className="pl-4">
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                          >
                            Dashboard
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                          >
                            Settings
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                          >
                            Earnings
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                          >
                            Sign out
                          </a>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      On Sale
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      New Arrivals
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Brands
                    </a>
                  </li>
                </ul>
              </div>
            )}
            {/* Menu mobile */}
          </div>
          {/* Menu principal (Desktop) */}
          <div
            className="hidden w-full md:block md:w-auto max-w-md mx-auto"
            id="navbar-dropdown"
          >
            <div className="flex flex-col md:p-0 md:space-x-8 md:flex-row md:mt-0">
              <div ref={dropdownRef} className="relative">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  aria-expanded={isOpen}
                  aria-label="Toggle shop menu"
                  className="flex items-center space-x-2 focus:outline-none"
                >
                  Shop
                  <svg
                    className={`w-4 h-4 m-1 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {/* Menu déroulant "Shop" */}
                {isOpen && (
                  <div className="absolute mt-2 w-48 bg-white rounded-xl shadow-2xl z-50">
                    <ul>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          Dashboard
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          Settings
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          Earnings
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          Sign out
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              {/* Autres liens du menu */}
              <a href="#" className="text-black hover:text-gray-700">
                On Sale
              </a>
              <a href="#" className="text-black hover:text-gray-700">
                New Arrivals
              </a>
              <a href="#" className="text-black hover:text-gray-700">
                Brands
              </a>
            </div>
          </div>

          {/* Barre de recherche */}
          <div className="max-w-md mx-auto w-full max-sm:hidden">
            <div className="relative flex items-center w-[110%] h-12 rounded-full focus-within:shadow-lg bg-[#F0F0F0] overflow-hidden">
              <div className="grid place-items-center h-full w-12 text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                className="peer h-full w-full outline-none text-gray-700 font-light bg-[#F0F0F0]"
                type="text"
                id="search"
                placeholder="Search for products..."
              />
            </div>
          </div>

          {/* Icônes de navigation */}
          <ul className="flex space-x-5">
            <li className="sm:hidden">
              <svg
                className="w-5 h-6"
                fill="#000000"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" />
              </svg>
            </li>
            <li>
              <svg
                className="w-5 h-6"
                viewBox="0 -2.72 54.624 54.624"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  id="Group_38"
                  data-name="Group 38"
                  transform="translate(-150.273 -1577.233)"
                >
                  <path
                    id="Path_98"
                    data-name="Path 98"
                    d="M159.723,1596.869v13.651h32.746l6.107-13.651Z"
                    fill="#d1d3d4"
                  />
                  <path
                    id="Path_99"
                    data-name="Path 99"
                    d="M152.273,1579.233h7.683v31.286h32.513l10.428-23.312h-39.26"
                    fill="none"
                    stroke="#231f20"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
                  />
                  <path
                    id="Path_100"
                    data-name="Path 100"
                    d="M167.668,1620.451a3.972,3.972,0,1,1-3.973-3.973A3.972,3.972,0,0,1,167.668,1620.451Z"
                    fill="#ffffff"
                    stroke="#231f20"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
                  />
                  <path
                    id="Path_101"
                    data-name="Path 101"
                    d="M187.532,1620.451a3.973,3.973,0,1,1-3.972-3.973A3.972,3.972,0,0,1,187.532,1620.451Z"
                    fill="#ffffff"
                    stroke="#231f20"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
                  />
                </g>
              </svg>
            </li>
            <li>
              <svg
                className="w-5 h-6"
                viewBox="0 0 0.6 0.6"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
              >
                <path d="M0.6 0.3C0.6 0.134 0.466 0 0.3 0S0 0.134 0 0.3c0 0.091 0.041 0.173 0.106 0.228 0.001 0.001 0.001 0.001 0.001 0.001 0.005 0.004 0.011 0.008 0.017 0.013 0.003 0.002 0.005 0.004 0.008 0.007A0.3 0.3 0 0 0 0.301 0.6a0.3 0.3 0 0 0 0.168 -0.052c0.003 -0.002 0.005 -0.004 0.008 -0.006 0.005 -0.004 0.011 -0.008 0.017 -0.013 0.001 -0.001 0.001 -0.001 0.001 -0.001 0.064 -0.056 0.105 -0.138 0.105 -0.229m-0.3 0.263c-0.056 0 -0.108 -0.018 -0.151 -0.048 0.001 -0.005 0.002 -0.01 0.003 -0.014a0.158 0.158 0 0 1 0.016 -0.037c0.007 -0.011 0.014 -0.022 0.024 -0.031 0.009 -0.009 0.02 -0.017 0.031 -0.024 0.011 -0.007 0.023 -0.011 0.037 -0.015A0.158 0.158 0 0 1 0.3 0.388a0.157 0.157 0 0 1 0.11 0.044q0.021 0.021 0.032 0.049 0.006 0.016 0.009 0.034A0.264 0.264 0 0 1 0.3 0.562m-0.092 -0.278a0.094 0.094 0 0 1 -0.008 -0.038c0 -0.013 0.002 -0.026 0.008 -0.038s0.013 -0.023 0.022 -0.032 0.02 -0.016 0.032 -0.022 0.025 -0.008 0.038 -0.008c0.014 0 0.026 0.002 0.038 0.008s0.023 0.013 0.032 0.022c0.009 0.009 0.016 0.02 0.022 0.032 0.005 0.012 0.008 0.025 0.008 0.038 0 0.014 -0.002 0.026 -0.008 0.038a0.105 0.105 0 0 1 -0.022 0.032 0.105 0.105 0 0 1 -0.032 0.022 0.102 0.102 0 0 1 -0.077 0 0.105 0.105 0 0 1 -0.032 -0.022 0.094 0.094 0 0 1 -0.021 -0.032zm0.278 0.199c0 -0.001 -0.001 -0.002 -0.001 -0.003a0.195 0.195 0 0 0 -0.026 -0.053 0.184 0.184 0 0 0 -0.041 -0.043 0.195 0.195 0 0 0 -0.039 -0.023 0.112 0.112 0 0 0 0.017 -0.014 0.158 0.158 0 0 0 0.023 -0.029 0.135 0.135 0 0 0 0.02 -0.073 0.139 0.139 0 0 0 -0.011 -0.055 0.142 0.142 0 0 0 -0.031 -0.045 0.146 0.146 0 0 0 -0.045 -0.03 0.139 0.139 0 0 0 -0.055 -0.011 0.139 0.139 0 0 0 -0.055 0.011 0.135 0.135 0 0 0 -0.045 0.031 0.142 0.142 0 0 0 -0.03 0.045 0.139 0.139 0 0 0 -0.011 0.055q0 0.02 0.005 0.038c0.004 0.013 0.008 0.024 0.015 0.035 0.006 0.011 0.014 0.02 0.023 0.029q0.008 0.008 0.018 0.014a0.188 0.188 0 0 0 -0.039 0.023c-0.016 0.012 -0.029 0.026 -0.041 0.042a0.188 0.188 0 0 0 -0.026 0.053c-0.001 0.001 -0.001 0.002 -0.001 0.003C0.067 0.436 0.037 0.372 0.037 0.3 0.037 0.155 0.155 0.037 0.3 0.037s0.263 0.118 0.263 0.263a0.261 0.261 0 0 1 -0.076 0.184" />
              </svg>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
