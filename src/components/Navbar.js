import React from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


// props means properties
export default function Navbar(props){
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2" >
                <Link className={`nav-a active text-decoration-none text-${props.mode === 'light'?'dark':'light'}`} aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-a active text-decoration-none text-${props.mode === 'light'?'dark':'light'}`} to="/About">{props.aboutText}</Link>
              </li>
            </ul>
            <div className={`form-check form-switch mx-2 text-${props.mode === 'light'?'dark':'light'}`}>
              <input className="form-check-input" onClick = {props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label " htmlFor="flexSwitchCheckDefault">Navbar Dark Mode </label>
            </div>
          </div>
        </div>
      </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string,
    aboutText: PropTypes.string
}

// set the default props ,at the time we dosen't pass the props value but we use props in our code that time use the default pass
Navbar.defaultProps = {
    title:'Set title here',
    aboutText:'About text here'
};