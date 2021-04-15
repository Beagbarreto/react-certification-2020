import styled from 'styled-components';

export const LongCard = styled.div`
  display: flex;
  align-items: center;
  width: 75%;
  background-color: rgba(185, 134, 217, 0.2);
  border-radius: 4px;
`;

export const TextContainer = styled.div`
  color: #606060;
  font-size: small !important;
  margin: 2px 2px;
`;

export const Title = styled.h4`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Text = styled.p`
  display: flex;
  flex-direction: column;
`;

export const ThumbnailImg = styled.image`
  height: 120px !important;
  width: 120px !important;
  margin: 10px 60px;
`;

export const Channel = styled.p`
  margin-top: 6px;
  font-size: 12px;
  color: #606060;
`;