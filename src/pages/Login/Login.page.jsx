import React, {useState} from 'react';
import { useHistory } from 'react-router';

import { useAuth } from '../../providers/Auth';
import './Login.styles.css';

function LoginPage() {
  const { login } = useAuth();
  const history = useHistory();

  function authenticate(event) {
    event.preventDefault();
    login();
    history.push('/');
  }

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  return (
    <section className="login">
      <h3>Welcome back, login!</h3>
      <form onSubmit={authenticate} className="login-form">
        <div className="form-group">
          <label htmlFor="username">
            <strong>username </strong>
            <input
              required type="text"
              id="username"
              onChange={e => setUsername(e.currentTarget.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="password">
            <strong>password </strong>
            <input
              required
              type="password"
              id="password"
              onChange={e => setPassword(e.currentTarget.value)}
            />
          </label>
        </div>
        <button type="submit">login</button>
      </form>
    </section>
  );
}

export default LoginPage;
