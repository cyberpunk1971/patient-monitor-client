import React, { useReducer, useCallback } from 'react';

import Button from './UI/buttons/Button';
import classes from './Home.module.css';
const Home = () => {
    return (
        <>
            <header className={classes.Home}>
                <h1 className={classes.Top_h1}>Patient Monitor</h1>
                <h2 className={classes.Top_h2}>Designed with the healthcare provider in mind</h2>
            </header>
            <main className={classes.Container}>
                <section className={classes.Blurb}>
                    <p className={classes.Home_p}>Patient Monitor allows doctors, nurses, and allied health professionals to manage critical patient data with ease.</p>
                    <p className={classes.Home_p}>To demonstrate the function of the application, simply click the DEMO button below. To access the full suite of Patient Monitor capabilities, such as data persistence over time, please register a new account. If you are already registered, please login.</p>
                    <ol> TODOS:
                    <li>Delete patient shows props.update is not a function error, upon manual refresh, keys show but no data rendered, pt is deleted from db, however. </li>
                        <li>Error in console states that I need a "key" property and to check MedicationList component.</li>
                        <li>Need to render ID and name of patient on medication list screen and maybe pt ID in URL, also. </li>
                        <li>Need to render Username on Dashboard screen. </li>
                        <li>Write DEMO function.</li>
                        <li>Fix links depending on which screen user is on.</li>
                        <li>Fix front end to logout upon session expiry.</li>
                        <li>Alphabetize patients by name.</li>
                        <li>Write tests for front and back end.</li>
                        <li>Style everything.</li>
                        <li>Clean up console logs.</li>
                        <li>Deploy.</li>
                        <li>Send to people for testing.</li>
                    </ol>
                </section>
                <button className={classes.Demo_button}>DEMO</button>
            </main>





        </>
    )
}

export default Home; 