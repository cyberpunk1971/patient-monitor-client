import config from '../config';
import TokenService from './token-service';

const AuthApiService = {
  async login(newUser) {
    try {
      const options = {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(newUser)
      }
      const response = await fetch(`${config.API_ENDPOINT}/users/login`,  options);
      const data = await response.json();
      localStorage.authToken = data.token
      localStorage.username = data.username;
      TokenService.saveAuthToken(data.token);
      return data;

    } catch (err) {
      console.error(err);
    }

  },

  async register(newUser) {
    try {
      const options = {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(newUser)
      }

      const response = await fetch(`${config.API_ENDPOINT}/users/register`, options);
      const data = await response.json();
      localStorage.authToken = data.token
      localStorage.username = data.username;
      TokenService.saveAuthToken(data.token);
      return data;
      

    } catch (err) {
      console.error(err);
    }
  },

  postUser(user) {
    return fetch(`${config.API_ENDPOINT}/users`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postLogin({ username, password, email }) {
    return fetch(`${config.API_ENDPOINT}/auth/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ username, password, email }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
      .then(res => {
        /*
          whenever a logint is performed:
          1. save the token in local storage
          2. queue auto logout when the user goes idle
          3. queue a call to the refresh endpoint based on the JWT's exp value
        */
        TokenService.saveAuthToken(res.authToken)
        //IdleService.regiserIdleTimerResets()
        TokenService.queueCallbackBeforeExpiry(() => {
          AuthApiService.postRefreshToken()
        })
        return res;
      })
  },
  postRefreshToken() {
    return fetch(`${config.API_ENDPOINT}/users/refresh`, {
      method: 'POST',
      headers: {
        'authorization': `Bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
      .then(res => {
        /*
          similar logic to whenever a user logs in, the only differences are:
          - we don't need to queue the idle timers again as the user is already logged in.
          - we'll catch the error here as this refresh is happening behind the scenes
        */
        TokenService.saveAuthToken(res.authToken)
        TokenService.queueCallbackBeforeExpiry(() => {
          AuthApiService.postRefreshToken()
        })
        return res
      })
      .catch(err => {
        console.error(err)
      })
  },
}

export default AuthApiService