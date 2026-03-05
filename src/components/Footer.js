import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-north-bg border-t border-north-wood/30 py-10 text-north-text">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-lg font-serif tracking-wide opacity-90">
          NORTHFORREST • A sanctuary of cedar, ice, and whispering pines
        </p>
        <p className="mt-4 text-sm opacity-70">
          Rocky View County, Alberta, Canada
        </p>
        <div className="mt-6 h-px bg-north-glow/20 max-w-xs mx-auto"></div>
        <p className="mt-6 text-sm opacity-70">
          © {new Date().getFullYear()} NORTHFORREST. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;