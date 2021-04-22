import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import SearchBar from '../components/molecules';
import '@testing-library/jest-dom/extend-expect'

describe('Test SearchBar', () =>{

  test('Renders search bar correctly', () => {
    const searchBar = render(<SearchBar />);
    let tree = searchBar.toJSON();
    expect(tree).toBeTruthy()
});
  
  test('button render correctly', () => {
    const button = create(<Button />);
    let tree = button.toJSON();
    expect(tree).toBeTruthy()
    expect(tree).toBeInTheDocument();
  });

  test('render input field and takes value', () => {
    const input = create(<Input />);
    let tree = input.toJSON();
    expect(tree).toBeTruthy()
    expect(tree).toBeInTheDocument();
  });

  test('should show a placeholder and updates on change', () => {
    const setSearch = jest.fn((value) => {})
    const tree = screen.getByPlaceholderText('Look for a video...');
    expect(tree).toBeInTheDocument();
    fireEvent.change(tree, { target: { value: 'test' } })
    expect(tree.value).toBe('test')
});
});
  