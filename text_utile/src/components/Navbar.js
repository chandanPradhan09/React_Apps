import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>
          {props.title}
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className='collclassapse navbar-collapse'
          id='navbarSupportedContent'
        >
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link className='nav-link' aria-current='page' to='/'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/about'>{props.about}</Link>
            </li>
          </ul>
          <i className="fa-solid fa-circle-half-stroke fa-xl m-2" onClick={props.toggleMode}></i>
        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string,
};
Navbar.defaultProps = {
  title: "Set title Here",
  about: "Set About Here",
};
