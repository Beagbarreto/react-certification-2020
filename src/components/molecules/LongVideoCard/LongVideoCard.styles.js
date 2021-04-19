import styled from 'styled-components';

export const LongCard = styled.div`
  display: flex;
  flex: row;
  width: 700px;
  background-color: rgba(185, 134, 217, 0.2);
  border-radius: 4px;
  margin-bottom: 20px;
`;

export const TextContainer = styled.div`
  display: block;
  flex: column;
  color: #606060;
  font-size: small !important;
  margin: 2px 2px;
  padding-left: 15px;
  padding-right: 15px;
`;

export const Title = styled.h4`
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
`;

export const Text = styled.p`
  display: flex;
  margin-top: 10px;
  font-size: 12px;
  color: #606060
`;

export const ThumbnailImg = styled.div`
  display: block;
  //flex: column;
  object-fit: contain;
  width: 246px;
  height: 138px;
  background: url(${(props) => props.bg}) no-repeat;
  background-size: cover;
  border-radius: 4px 0px 0px 4px;
  object-fit: contain;
`;

export const ChannelBlock = styled.div`
  flex: row;
`;

export const Channel = styled.p`
  margin-top: 6px;
  font-size: 12px;
  color: #606060;
`;