import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-light">
            <Link to="/"> <button className="btn btn-info"> Products </button> </Link>
            <Link to="/products/new"> <button className="btn btn-info"> Add Product </button> </Link>
        </nav>
    )
}

export default Navbar;