import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../../providers/Auth';
import { LogInIcon, LogOutIcon, LogContainer } from './LogButton.styles';

const LogButton = () => {
  const history = useHistory();
  const { authenticated, logout } = useAuth();

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }

  return(
    <section>
      <LogContainer>
        {authenticated ? (
          <Link to="/" onClick={deAuthenticate}>
            <LogOutIcon /> Logout
          </Link>
        ) : (
          <Link to="/login">
          Login <LogInIcon />
          </Link>
        )}
      </LogContainer>
    </section>
  )
};

export default LogButton;