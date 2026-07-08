import './Menu.css';

const Menu = () => {
  return(
    <div>
      <ul className='Menu'>
        <li className='MenuItem'><a href='#'>home</a></li>
        <li className='MenuItem'><a href='#about'>about</a></li>
        <li className='MenuItem'><a href='#portfolio'>portfolio</a></li>
        <li className='MenuItem'><a href='#resume'>resume</a></li>
      </ul>
      <hr />
    </div>
  );
};

export default Menu;