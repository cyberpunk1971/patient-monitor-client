import React, {useContext} from 'react';

import AuthApiService from '../services/auth';
import AppContext from '../AppContext';

import classes from './Home.module.css';
import Login from './Login';

const Home = (props) => {
    const context = useContext(AppContext);
    const Demo = async () => {
        
        const demoValues = {
            email: 'demo@email.com',
            password: 'demopassword'
        }
       const data = await AuthApiService.login(demoValues)
        context.setUser(data.username);
        console.log(data)
        props.history.push('/dashboard');
    }

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
                </section>
                <button className={classes.Demo_button} onClick={Demo}>DEMO</button>
            </main>





        </>
    )
}

export default Home; 