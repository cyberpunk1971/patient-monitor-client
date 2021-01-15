import React, { useContext } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import AppContext from '../../../AppContext';

import classes from './NavLinks.module.css';



const NavLinks = props => {
    const context = useContext(AppContext);

    const logoutUser = () => {
        context.setUser(null);

        localStorage.clear();
        props.history.push('/');
    };

    return (
        <ul className={classes.nav_links}>
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
                    <>
                        <li>
                            <NavLink to='/register'>Register</NavLink>
                        </li>
                        <li>
                            <NavLink to='/login'>Login</NavLink>
                        </li>
                    </>
                )}
        </ul>
    );
    //use conditional to remove login link from login page

};

//withRouter will add React.Router props as history and match from URL
export default withRouter(NavLinks);