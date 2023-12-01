import './Nav.css';

const Nav = () => {
  const toggleMenu = () => {
    document.querySelector('.nav__wrapper').classList.toggle('show');
    document.querySelector('body').classList.toggle('overflow');
    document.querySelector('.hamburger').classList.toggle('hamburger_active');
  }

  return (
    <nav className='nav'>
        <h2 className="nav__title">React.</h2>
        <div className="nav__wrapper">
          <h2 className='nav__title nav__title_menu'>React.</h2>
            <a href="/#" className="nav__link">Home</a>
            <a href="/#" className="nav__link">Company</a>
            <a href="/#" className="nav__link">Resources</a>
            <a href="/#" className="nav__link">About</a>
            <a href="/#" className="nav__link">Contact</a>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </nav>
  )
}

export default Nav