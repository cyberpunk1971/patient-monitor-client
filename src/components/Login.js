import React from 'react';
import Input from './forms/Input';
class Login extends React.Component {
    render() {
        return <>

            <div className="register-div">
                <form className="register-form">
                    <Input element="input" type="text" label="Username" />
                    <Input element="input" type="text" label="Email" />
                    <Input element="input" type="text" label="Password" />
                </form>
            </div>
        </>
    }
}

export default Login;