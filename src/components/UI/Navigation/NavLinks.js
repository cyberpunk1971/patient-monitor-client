import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AppContext from '../../../AppContext';

import './NavLinks.css';

const NavLinks = props => {
    const context = useContext(AppContext);

    return (
        <AppContext.Provider value={context}>
        <ul className="nav-links">
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
        </AppContext.Provider>
    );


};

export default NavLinks;