import searchingVideos from '../utils/services/videoServices';

describe('Search request', () => {
  
  it('retrieves videos searched', async () => {
    const query = 'wizeline';

    const result = await searchingVideos(query);

    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBe(16);
  })
})
