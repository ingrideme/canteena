import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';
const Nav = () => {
    return (
        <nav>
            <h2>LOGO</h2>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/register">Cadastre-se</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
