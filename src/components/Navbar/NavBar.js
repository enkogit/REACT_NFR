import React, { useState, useEffect } from 'react';
import NavLinks from './NavLinks';           // assuming it's in same folder or adjust path
import { HashLink } from 'react-router-hash-link';

const NavBar = () => {
  const [top, setTop] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
        top
          ? 'bg-transparent'
          : 'bg-north-bg/90 backdrop-blur-md shadow-xl border-b border-north-wood/30'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center py-5">
        {/* Logo / Brand */}
        <div className="flex items-center">
          <HashLink smooth to="/" className="group">
            <h1
              className={`font-serif font-bold text-4xl md:text-5xl tracking-tight transition-colors duration-300 ${
                top ? 'text-north-text' : 'text-north-glow'
              } group-hover:text-north-glow`}
            >
              NORTHFORREST
            </h1>
          </HashLink>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-10">
          <NavLinks isMobile={false} />
        </div>

        {/* Mobile Hamburger */}
        <button
          className={`lg:hidden p-3 rounded-full transition-all duration-300 ${
            isOpen ? 'bg-north-glow/20' : 'hover:bg-north-wood/30'
          }`}
          onClick={handleClick}
          aria-label="Toggle menu"
        >
          <svg
            className="h-8 w-8 text-north-text"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[--navbar-height] transition-all duration-500 ease-in-out transform ${
          isOpen
            ? 'translate-y-0 opacity-100 visible'
            : '-translate-y-full opacity-0 invisible'
        } bg-north-bg/95 backdrop-blur-lg border-b border-north-wood/30 shadow-2xl`}
        style={{ '--navbar-height': top ? '80px' : '80px' }} // adjust if your py- changes
      >
        <div className="flex flex-col items-center py-12 space-y-10 text-lg font-medium text-north-text">
          <NavLinks isMobile={true} onClick={() => setIsOpen(false)} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;