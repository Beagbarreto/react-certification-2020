import React from 'react'
import { render, fireEvent, create } from '@testing-library/react'
import VideoPage from '../pages/Video';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect'

import searchingVideos from '../utils/services/videoServices';
import { RecommendedVideos } from '../pages/Video/Video.styles';

//describe('Video Page page', () => {

  it(`Video Page renders correctly`, () => {
    const component = renderer.create(<VideoPage />);
    let tree = component.toJSON();
    expect(tree).toBeTruthy()
    expect(tree).toMatchSnapshot();
  });

  // it('Renders Recommended videos correctly', () => {
  //   const display = render(<Dipslay />);
  //   let tree = display.toJSON();
  //   expect(tree).toBeTruthy()
  // });
  
  // it('Renders Video Display correctly', () => {
  //   const shallow = render(<RecommendedVideos />);
  //   let tree = shallow.toJSON();
  //   expect(tree).toBeTruthy()
  // });
  
  // it('retrieves videos searched', async () => {
  //   const query = 'wizeline';

  //   const result = await searchingVideos(query);

  //   expect(result).toBeInstanceOf(Object);
  // })

//})
