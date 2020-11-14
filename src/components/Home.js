import React, { useState } from 'react';
import axios from 'axios';
import Input from './UI/Input';

const Home = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const { username, email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        
            const newUser = {
                username,
                email,
                password
            }

            try {
                const config = {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
                const body = JSON.stringify(newUser);
                const response = await axios.post('http://localhost:8080/api/users/register', body, config);
                console.log(response.data);

            } catch (err) {
                console.error(err.response.data);
            }
         }

    return <>
        <div className="class= col-6 side_div_left">
            <h2>Patient Monitor</h2>
            <h3>is an application for efficient management of
                patient data.</h3>
            <button>DEMO</button>
        </div>

        <div className="register-div">
            <form className="register-form" onSubmit={e => onSubmit(e)}>
                <input
                    element="input"
                    type="text"
                    placeholder="Username"
                    label="Username"
                    name="username"
                    value={username}
                    onChange={e => onChange(e)}
                    required />

                <input
                    element="input"
                    type="email"
                    placeholder="Email"
                    label="Email"
                    name="email"
                    value={email}
                    onChange={e => onChange(e)}
                    required />

                <input
                    element="input"
                    type="password"
                    placeholder="Password"
                    label="Password"
                    name="password"
                    value={password}
                    onChange={e => onChange(e)}
                    required />

                

                <input type="submit" value="Register" />
            </form>


        </div>
    </>
}

export default Home;