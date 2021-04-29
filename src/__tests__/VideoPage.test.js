import React from 'react'
import { render, fireEvent, create } from '@testing-library/react'
import VideoPage from '../pages/Video';
import '@testing-library/jest-dom/extend-expect'

import searchingVideos from '../utils/services/videoServices';
import { RecommendedVideos } from '../pages/Video/Video.styles';

describe('Video Page page', () => {

  it(`Video Page renders correctly`, () => {
    const component = render(<VideoPage />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Renders Recommended videos correctly', () => {
    const display = render(<Dipslay />);
    let tree = display.toJSON();
    expect(tree).toBeTruthy()
  });
  
  it('Renders Video Display correctly', () => {
    const recommended = render(<RecommendedVideos />);
    let tree = recommended.toJSON();
    expect(tree).toBeTruthy()
  });
  
  it('retrieves videos searched', async () => {
    const query = 'wizeline';

    const result = await searchingVideos(query);

    expect(result).toBeInstanceOf(Array);
  })

})
