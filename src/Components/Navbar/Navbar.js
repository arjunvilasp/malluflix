import './Navbar.css';

const Navbar = () => {
  return(
    <>
    <div className='nav-container'>
    <div className='top-nav'>
    <div className='left-icon'>
    <h2>MalluFlix</h2>
    </div>
    <div className='right-icon'>
    <i className="fa-solid fa-magnifying-glass"></i>
    <i className="fa-solid fa-user"></i>
    </div>
    </div>
    </div>
    </>
    );
}

export default Navbar;