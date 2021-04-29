import React from 'react'
import { render, fireEvent, create } from '@testing-library/react'
import SearchBar from '../components/molecules';
import '@testing-library/jest-dom/extend-expect'

describe('SearchBar molecule', () =>{

  const searchContext = jest.fn();

  it('Renders search bar correctly', () => {
    const searchBar = render(<SearchBar />);
    let tree = searchBar.toJSON();
    expect(tree).toBeTruthy()
});
  
  it('button render correctly', () => {
    const button = create(<Button />);
    let tree = button.toJSON();
    expect(tree).toBeTruthy()
    expect(tree).toBeInTheDocument();
  });

  it('render input field and takes value', () => {
    const input = create(<Input />);
    let tree = input.toJSON();
    expect(tree).toBeTruthy()
    expect(tree).toBeInTheDocument();
  });

  test('should show a placeholder and updates on change', () => {
    const tree = screen.getByPlaceholderText('Look for a video...');
    expect(tree).toBeInTheDocument();
});

  it('Takes string input and updates', () => {
    const tree = render(<Input />)
    expect(tree).toBeInTheDocument();
    fireEvent.change(tree, { target: { value: 'test' } })
    expect(tree.value).toBe('test')
  })

});
  