import styled from 'styled-components';

export const VideoList = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 2.5rem auto;
  max-width: 1280px;
  @media screen and (min-width: 1025px) {
    max-width: 1440px;
  }
  @media screen and (max-width: 812px) {
    justify-content: center;
  }
`;