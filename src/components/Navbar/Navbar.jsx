import { useState } from 'react';
import './Navbar.css';

const Navbar = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setIsOpen(false); // close the menu after picking a page on mobile
  };

  return(
    <nav className={`Navbar ${isOpen ? 'open' : ''}`}>
      <div className='navbar-header'>
        <button className='navbar-title navbar-home' onClick={() => handleNavClick('home')}>
          <h2>Seth</h2>
          <h2>Harling</h2>
        </button>
        <button
          className='navbar-toggle'
          aria-label='Toggle navigation menu'
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <ul className='navbar-menu'>
        <li className={`MenuItem ${currentPage === 'about' ? 'active' : ''}`}>
          <button onClick={() => handleNavClick('about')}>About</button>
        </li>
        <li className={`MenuItem ${currentPage === 'portfolio' ? 'active' : ''}`}>
          <button onClick={() => handleNavClick('portfolio')}>Portfolio</button>
        </li>
        <li className={`MenuItem ${currentPage === 'resume' ? 'active' : ''}`}>
          <button onClick={() => handleNavClick('resume')}>Resume</button>
        </li>
      </ul>
      <div className='navbar-footer'>
        <a href='https://github.com/sethharling' target='_blank' rel='noopener noreferrer'>GitHub</a>
        <a href='https://linkedin.com/in/seth-harling' target='_blank' rel='noopener noreferrer'>LinkedIn</a>
      </div>
    </nav>
  );
};

export default Navbar;
