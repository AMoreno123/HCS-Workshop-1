import React from "react";
import "./Navbar.css";
import {Link} from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="info">
        <h1 style={{ margin: 0 }}>Aracely Moreno</h1>
        <div className="info-bar">
          <p className="info-item">amoreno1@college.harvard.edu</p>
        </div>
        <div className="info-bar">
          <Link 
            className="info-link"
            to={ {pathname: "https://www.linkedin.com/in/moreno-aracely/"}}
            target="_blank"
            >
              LinkedIn
          </Link>
          <Link 
            className="info-link"
            to={{pathname: "https://github.com/racemore"}}
            target="_blank">
              GitHub
          </Link>
        </div>
      </div>
      <div className="nav-background">
        <Link className="nav-link" to={{pathname: "about"}}>About</Link>
        <Link className="nav-link" to={{pathname: "education"}}>Education</Link>
        <Link className="nav-link" to={{pathname: "experience"}}>Experience</Link>
        <Link className="nav-link" to={{pathname: "projects"}}>Projects</Link>
      </div>
    </>
  );
}