import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = props => {
    return <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
        <div className="navbar-brand">
            GitHub Поиск
        </div>
        <ul className="navbar-nav">
            <li className="navbar-item">
                <NavLink to="/" exact className="nav-link">Главная</NavLink>
            </li>
            <li className="navbar-item">
                <NavLink to="/about" className="nav-link">Информация</NavLink>
            </li>
        </ul>
    </nav>
}
 
export default NavBar;