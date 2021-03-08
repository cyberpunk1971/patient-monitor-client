import React, {useContext} from 'react';

import AuthApiService from '../services/auth';
import AppContext from '../AppContext';

import classes from './Home.module.css';

const Home = (props) => {
    const context = useContext(AppContext);
    
    const Demo = async () => {
        
        const demoValues = {
            email: 'demo@email.com',
            password: 'demopassword'
        }
       const data = await AuthApiService.login(demoValues)
        context.setUser(data.username);
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
                    
                </section>
                
            </main>





        </>
    )
}

export default Home; 