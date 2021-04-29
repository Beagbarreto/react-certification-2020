import React from 'react';
import Header from '../components/Header';
import '../components/Header';
import { render, screen } from '@testing-library/react'
import AuthProvider from '../../providers/Auth';
import ContextProvider from '../../context';

describe('Header component', () => {
  it('is contained in a nav tag', () => {
    const Header = render(<Header />)

    const headerClass = Header().type.styledComponentId
    const HeaderRoot = document.getElementsByClassName(headerClass)
    const style = window.getComputedStyle(HeaderRoot[0]);
    
    expect(headerClass.type).toBe('header');
    expect(style.padding.toBe('17px'));
  });

  it('Renders correctly 4 children', () => {
    const header = renderer(<Header />)
    expect(header.children.length).toBe(4);
  });

  // it('Renders SideBar only when user is authenticated', () => {
  //   const Header = render(<Header />)
  //   expect(screen.queryByText(Sidebar).toBeInTheDocument())
    
  // });
});

