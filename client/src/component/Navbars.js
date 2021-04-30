import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Context from './context/Context';
const Navbars = () => {
  const { state } = useContext(Context);
  const Rendermenu = () => {
    if (!state) {
      return (
        <>
          <li className='nav-item'>
            <NavLink className='nav-link' to='/register'>
              Register
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-link' to='/login'>
              Login
            </NavLink>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li className='nav-item'>
            <NavLink className='nav-link' to='/logout'>
              Logout
            </NavLink>
          </li>
        </>
      );
    }
  };
  return (
    <>
      <nav className=' navbar navbar-expand-lg navbar-light bg-light'>
        <a className='navbar-brand' href='/'>
          Navbar
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item active'>
              <NavLink className='nav-link' to='/'>
                Home <span className='sr-only'>(current)</span>
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/about'>
                About
              </NavLink>
            </li>
            <Rendermenu />
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbars;
