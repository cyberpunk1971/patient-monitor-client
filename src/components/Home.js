import React, { useReducer, useCallback } from 'react';

import Button from './UI/buttons/Button';
import classes from './Home.module.css';
const Home = () => {
    return (
        <>
            <div className={classes.Home}>
                <h1 className={classes.Top_h1}>Patient Monitor</h1>
                <h2 className={classes.Top_h2}>Designed with the healthcare provider in mind</h2>
                <div className={classes.Container}>
                    <section className={classes.Blurb}>
                        <p className={classes.Home_p}>Patient Monitor allows doctors, nurses, and allied health professionals to manage critical patient data with ease.</p>
                        <p className={classes.Home_p}>To demonstrate the function of the application, simply click the DEMO button below. To access the full suite of Patient Monitor capabilities, such as data persistence over time, please register a new account. If you are already registered, please login.</p>
                    </section>
                </div>
            </div>
            <div className={classes.Demo_div}>
                <Button className={classes.button}>DEMO</Button>
            </div>
        </>
    )
}

export default Home; 