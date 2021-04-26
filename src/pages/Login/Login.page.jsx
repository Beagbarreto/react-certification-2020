import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router';

import { useAuth } from '../../providers/Auth';
import './Login.styles.css';

function LoginPage() {
  const { login, authenticated, error } = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (authenticated) {
      history.push('/');
    }
  }, [authenticated, history]);

  function authenticate(e) {
    e.preventDefault();
    login(username, password);
  }

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  return (
    <section className="login">
      <h3>Welcome back, login!</h3>
      <form onSubmit={authenticate} className="login-form">
        {error && <span className="error-text">{error}</span>}
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
