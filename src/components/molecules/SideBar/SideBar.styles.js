import styled from 'styled-components';
import { VscChromeClose } from 'react-icons/vsc';

export const SideColumn = styled.nav`
  display: flex;
  width: 100vw;
  min-height: 70px;
  padding: 17px 17px;
  background: linear-gradient(#beeaf5, #80d9df);
  justify-content: space-between;
  margin-bottom: 2.5rem;
`;

export const CloseIcon = styled(VscMenu)`
  display: block;
  font-size: 26px;
  margin-right: 20px;
  margin-left: 30px;
  color: #6c56a3;
  border: none;
  //cursor: default;
`;

export const CloseIcon = styled.ul`
  display: flex;
`;