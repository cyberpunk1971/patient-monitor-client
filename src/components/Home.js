import React from 'react';

class Home extends React.Component {
    render() {
        return <>
            <div class="class= col-6 side_div_left">
                <h2>Patient Monitor</h2>
                <h3>is an application for managing
                patient data.</h3>
                <button><a href="dashboard.html">DEMO</a></button>
            </div>

            <div>

                <form class="col-6" id="register-form" action="/register" method="POST">

                    <div>
                        <div>
                            <label for="username">Username</label>
                        </div>

                        <div>
                            <input type="text" id="username" name="username" placeholder="Username.." />
                        </div>
                    </div>

                    <div>
                        <div>
                            <label for="email">Email</label>
                        </div>

                        <div>
                            <input type="email" id="email" name="email" placeholder="Your Email.." />
                        </div>
                    </div>

                    <div>
                        <div>
                            <label for="password">Password</label>
                        </div>

                        <div>
                            <input type="password" id="password" name="password" placeholder="Your password.." />
                        </div>
                    </div>


                    <div class="submit__button">
                        <button type="submit" id="submit-btn">Submit</button>
                    </div>

                </form>

                <div class="login__div">
                    <h3>Have an account? <a href="login.html" class="login__btn">Login</a></h3>
                </div>
            </div>
        </>
    }
}

export default Home;