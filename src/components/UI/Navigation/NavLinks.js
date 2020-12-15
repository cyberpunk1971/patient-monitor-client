import React, { useContext } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import AppContext from '../../../AppContext';

import './NavLinks.css';



const NavLinks = props => {
    const context = useContext(AppContext);

    const logoutUser = () => {
        context.setUser(null);
        props.history.push('/');
        localStorage.clear();
    };
    console.log(context);

    return (
        <ul className="nav-links">
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
            {context.user ? (
                <>
                    <li>
                        <NavLink to='/dashboard'>My Patients</NavLink>
                    </li>
                    <li>
                        <NavLink to='/patients/new'>Add Patient</NavLink>
                    </li>
                    <li>
                        <button onClick={logoutUser}>Logout</button>
                    </li>

                </>
            ) : (
                    <li>
                        <NavLink to='/login'>Login</NavLink>
                    </li>
                )}
        </ul>
    );
    //use conditional to remove login link from login page

};

//withRouter will add React.Router props as history and match from URL
export default withRouter(NavLinks);