import React from 'react';
import { NavLink } from 'react-router-dom'

import './NavLinks.css';

const NavLinks = props => {
    return <ul className="nav-links">
        <li>
            <NavLink to='/'>Home</NavLink>
        </li>
        <li>
            <NavLink to='/login'>Login</NavLink>
        </li>
        <li>
            <NavLink to='/dashboard'>My Patients</NavLink>
        </li>
        <li>
            <NavLink to='/patients/new'>Add Patient</NavLink>
        </li>
        <li>
            <NavLink to='/'>Logout</NavLink>
        </li>
    </ul>
};

export default NavLinks;