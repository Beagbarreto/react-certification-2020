import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { useAuth } from '../../providers/Auth';

const Protected = (props) => {
  const { authenticated } = useAuth();
  
  return authenticated ? <Route {...props} /> : <Redirect to='/login'/>
};

export default Protected;
