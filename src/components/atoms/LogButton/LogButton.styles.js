import styled from 'styled-components';
import { VscArrowSmallLeft, VscArrowSmallRight } from 'react-icons/vsc';

export const LogContainer = styled.div`
  display: block;
  flex-direction: row;
  align-text: center;
`;
// color: #F894F1; pink

export const LogOutIcon = styled(VscArrowSmallLeft)`
  font-size: 27px;
  margin-right: 20px;
  color: #6c56a3;
  margin-left: 0.2em;
`;

export const LogInIcon = styled(VscArrowSmallRight)`
  font-size: 27px;
  margin-right: 20px;
  color: #6c56a3;
  margin-left: 0.2em;
`;