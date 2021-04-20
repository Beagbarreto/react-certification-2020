import styled from 'styled-components';

export const Display = styled.div`
  display: block;
  flex: 0.8;
  padding: 55px 20px;
  padding-bottom: 0;
  width: 65%;
  align-items: center;
`;

export const Video = styled.iframe`
width: 100%;
height: 480px;
border-radius: 6px;
box-shadow: rgb(85, 91, 255) 0px 0px 0px 3px, rgb(31, 193, 27) 0px 0px 0px 6px, rgb(255, 217, 19) 0px 0px 0px 9px, rgb(255, 156, 85) 0px 0px 0px 12px, rgb(255, 85, 85) 0px 0px 0px 15px;
`;

export const TextSection = styled.div`
  display; flex;
  width: 100%;
  color: #606060; 
`;

export const Title = styled.h3`
  align-items: center;
  justify-content: space-between;
  font-size: large;
`;

export const Hr = styled.hr`
  height: 1px;
  border: 0;
  background-color: lightgray;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  flex-direction: column;
  -webkit-line-clamp: 3; 
  overflow: hidden;
`;
