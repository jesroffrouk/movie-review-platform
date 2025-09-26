'use client'
import Link from "next/link";
import { useAppSelector } from "@/lib/hooks";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";

export default function Header(){
    const user = useAppSelector((state) => state.Auth.value);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
      <>
      <div className="navbar shadow-lg relative z-50  border-b border-base-300/20">
        <div className="navbar-start">
          {/* Enhanced Mobile Menu Button */}
          <div className="dropdown lg:hidden">
            <button 
              className={`btn btn-ghost btn-circle transition-all duration-300 hover:bg-primary/10 ${isMenuOpen ? 'bg-primary/20' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-6 w-6 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              > 
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h8m-8 6h16"} 
                /> 
              </svg>
            </button>
            
            {/* Enhanced Mobile Dropdown */}
            <div className={`fixed inset-x-0 top-16 transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}>
              {/* Backdrop */}
              <div 
                className="fixed inset-0 bg-black/20 backdrop-blur-sm"
                onClick={() => setIsMenuOpen(false)}
              ></div>
              
              {/* Menu Content */}
              <div className="relative mx-4 mt-2">
                <div 
                  className="bg-base-100 rounded-2xl shadow-2xl border border-base-300/30 overflow-hidden"
                  style={{
                    background: "linear-gradient(145deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.9) 100%)",
                    backdropFilter: "blur(20px)",
                  }}
                >
                  <div className="p-2 bg-base-100">
                    {[
                      { href: "/", label: "Home", icon: "🏠" },
                      { href: "/about", label: "About", icon: "ℹ️" },
                      { href: "/moviezone", label: "Search", icon: "🎬" },
                      { href: "/find", label: "Find", icon: "👤" },
                    ].map((item, index) => (
                      <Link 
                        key={item.href}
                        href={item.href} 
                        onClick={handleLinkClick}
                        className="flex items-center space-x-4 px-4 py-3 rounded-xl transition-all duration-200 hover:bg-primary/10 hover:scale-105 active:scale-95 group"
                        style={{
                          animationDelay: `${index * 50}ms`,
                        }}
                      >
                        <span className="text-lg group-hover:scale-110 transition-transform duration-200">
                          {item.icon}
                        </span>
                        <span className="font-medium text-base-content group-hover:text-primary transition-colors duration-200">
                          {item.label}
                        </span>
                        <svg 
                          className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Brand Logo */}
          <Link href="/" className="btn btn-ghost text-xl font-bold hover:scale-105 transition-transform duration-200">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Mzone
            </span>
          </Link>
        </div>
        
        {/* Desktop Navigation - Enhanced */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-1">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/moviezone", label: "Search" },
              { href: "/find", label: "Find" },
            ].map((item) => (
              <li key={item.href}>
                <Link 
                  href={item.href}
                  className="hover:bg-primary/10 hover:text-primary transition-all duration-200 rounded-xl font-medium hover:scale-105"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Enhanced Profile Section */}
        <div className="navbar-end">
          <Link 
            href="/profile" 
            className="btn btn-ghost btn-circle hover:bg-primary/10 transition-all duration-200 hover:scale-110 group"
          >
            {user.username === '' ? (
              <span className="font-semibold group-hover:text-primary transition-colors duration-200">
                Login
              </span>
            ) : (
              <CgProfile className="w-6 h-6 group-hover:text-primary transition-colors duration-200" />
            )}
          </Link>
        </div>
      </div>
      
      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
      </>
    )
}