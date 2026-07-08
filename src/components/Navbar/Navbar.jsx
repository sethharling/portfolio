import './Navbar.css';

const Navbar = ({ currentPage, setCurrentPage }) => {
  const handleNavClick = (page) => {
    setCurrentPage(page);
  };

  return(
    <nav className='Navbar'>
      <div className='navbar-header'>
        <h2>Seth</h2>
        <h2>Harling</h2>
      </div>
      <ul className='navbar-menu'>
        <li className={`MenuItem ${currentPage === 'home' ? 'active' : ''}`}>
          <button onClick={() => handleNavClick('home')}>Home</button>
        </li>
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