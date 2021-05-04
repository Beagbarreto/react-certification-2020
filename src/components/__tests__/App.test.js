import React from 'react';
import { screen, create, render} from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from '../App';

// it('Should render NotFound', () => {
//   const app = render(<App />);
//   expect(app).toMatchSnapshot();
// });

it('App renders correctly', () => {
  const tree = renderer
    .create(<App/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});