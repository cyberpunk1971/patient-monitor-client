import React from 'react';

class Login extends React.Component {
    render() {
        return <>
            <div>
                <form class="col-6" id="login-form" action="/login">

                    <div>
                        <div>
                            <label for="email">Email</label>
                        </div>

                        <div>
                            <input class="col-6" type="email" id="email" name="email" placeholder="Your Email.." />
                        </div>

                    </div>

                    <div>
                        <div>
                            <label for="password">Password</label>
                        </div>

                        <div>
                            <input class="col-6" type="password" id="password" name="password" placeholder="Your password.." />
                        </div>

                    </div>

                    <div>
                        <input class="col-6" type="submit" id="submit-btn" value="Submit" />
                    </div>
                </form>
            </div>
        </>
    }
}

export default Login;