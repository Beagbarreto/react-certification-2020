import styled from 'styled-components';

export const LongCard = styled.div`
  display: block;
  flex: row;
  align-items: center;
  width: 80%;
  height: fit-content;
  background-color: rgba(185, 134, 217, 0.2);
  border-radius: 4px;
  margin-bottom: 10px;
`;

export const TextContainer = styled.div`
  display: block;
  flex: column;
  color: #606060;
  font-size: small !important;
  margin: 2px 2px;
  margin-left: 14px;
`;

export const Title = styled.h4`
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
`;

export const Text = styled.p`
  margin-top: 10px;
  font-size: 12px;
  color: #606060
`;

export const ThumbnailImg = styled.div`
  display: block;
  object-fit: contain;
  flex: column;
  height: 148px;
  width: 246px;
  background: url(${(props) => props.bg}) no-repeat;
  background-size: cover;
  border-radius: 4px 0px 4px 0;
  overflow: hidden;
  text-align: center;
`;

export const ChannelBlock = styled.div`
  flex: row;
`;

export const Channel = styled.p`
  margin-top: 6px;
  font-size: 12px;
  color: #606060;
`;