import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg`} style={{backgroundColor: props.mode === 'dark' ? '#212529' : props.mode === 'blue' ? 'blue' : props.mode === 'green' ? '#1f7d27' : 'white'}}>
      <div className="container-fluid">
        {/* <Link className={`navbar-brand text-${props.mode==='light'?'dark':'white'} me-3 `} to="/" > {props.title} </Link> */}
        <a className={`navbar-brand text-${props.mode==='light'?'dark':'white'} me-3 `} href="/" > {props.title} </a>
        <div className="collapse navbar-collapse" >
          <ul className="navbar-nav">
              {/* <Link className={`nav-link active aria-current="page" text-${props.mode==='light'?'dark':'white'} me-1`} to="/" >Home</Link> */}
              <a className={`nav-link active aria-current="page" text-${props.mode==='light'?'dark':'white'} me-1`} href="/" >Home</a>
              {/* <Link className={`nav-link text-${props.mode==='light'?'dark':'white'} `} to="/about" >{props.about}</Link> */}
          </ul>
          <div className="dropdown ms-auto mx-4  text -nowrap">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" >
              colour themes
            </button>
            <ul className={`dropdown-menu bg-${props.mode==='light'?'white':'dark'}`}>
              <li>
                <div className={`form-check form-switch text-${props.mode==='light'?'dark':'white'}`}>
                  <input className="form-check-input" onClick={props.togglemodedark} type="checkbox" role="switch" id="switchCheckDefault"/>
                  <label className="form-check-label" htmlfor="switchCheckDefault">{`${props.mode === 'light'?'Enable dark mode': 'Enable light mode'}`}</label>
                </div>
              </li>
              <li>               
                <div className={`form-check form-switch text-${props.mode==='light'?'dark':'white'}`}>
                  <input className="form-check-input" onClick={props.togglemodeblue} type="checkbox" role="switch" id="switchCheckDefault"/>
                  <label className="form-check-label" htmlfor="switchCheckDefault">{`${props.mode === 'light'?'Enable blue mode': 'Enable light mode'}`}</label>
                </div>
              </li>
              <li>
                <div className={`form-check form-switch text-${props.mode==='light'?'dark':'white'}`}>
                  <input className="form-check-input" onClick={props.togglemodegreen} type="checkbox" role="switch" id="switchCheckDefault"/>
                  <label className="form-check-label" htmlfor="switchCheckDefault">{`${props.mode === 'light'?'Enable green mode': 'Enable light mode'}`}</label>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propType = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string
}
// Navbar.defaultProps = {
//     title: 'set title here ',
//     about: 'set text here'
// }