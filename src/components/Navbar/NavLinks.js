import React from 'react';
import { HashLink } from 'react-router-hash-link';

const NavLinks = ({ isMobile = false, onClick }) => {
  const linkClass = isMobile
    ? 'hover:text-north-glow transition-colors duration-300 text-2xl py-3'
    : 'hover:text-north-glow transition-colors duration-300 text-lg';

  return (
    <>
      <HashLink smooth to="/#experiences" className={linkClass} onClick={onClick}>
        Experiences
      </HashLink>
      <HashLink smooth to="/#contact" className={linkClass} onClick={onClick}>
        Contact
      </HashLink>
    </>
  );
};

export default NavLinks;