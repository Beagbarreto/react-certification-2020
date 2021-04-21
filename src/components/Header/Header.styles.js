import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  width: 100vw;
  min-height: 70px;
  padding: 17px 17px;
  background: linear-gradient(#beeaf5, #80d9df);
  justify-content: space-between;
  margin-bottom: 2.5rem;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  align-items: center;
`;

export const Col = styled.div`
  flex: ${(props) => props.size};
`;
