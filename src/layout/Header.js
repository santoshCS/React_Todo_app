import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg flex-column flex-md-row bd-navbar">
                    <div className="container">
                        <Link className="navbar-brand" to="/">Todo List </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        
                    </div>
        </nav>
    </div>

);
}

export default Header;