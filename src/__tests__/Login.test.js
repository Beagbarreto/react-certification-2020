import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AuthProvider from '../providers/Auth/Auth.provider';
import SearchContextProvider from '../providers/SearchContext';
import Login from '../pages/Login';

describe('Login Component', () => {
  it('Should render Login', () => {
      const login = render(<Login />);
      expect(login).toMatchSnapshot();
    
      const user = screen.getByLabelTest('username');
      expect(user).toBeInTheDocument();
      const password = screen.getByLabelText('password');
      expect(password).toBeInTheDocument();
    });

    it('render error when true', () => {
      let login = render(<Login />);
      expect(login).toThrow();
    });

  it('should take a snapshot', () => {
    const { asFragment } = render(
      <AuthProvider>
        <SearchContextProvider>
          <Login />
        </SearchContextProvider>
    </AuthProvider>
    );
    expect(
      asFragment(
        <AuthProvider>
          <SearchContextProvider>
            <Login />
          </SearchContextProvider>
        </AuthProvider>
      )
    ).toMatchSnapshot();
  });
});
