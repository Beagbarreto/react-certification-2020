import styled from 'styled-components';
import { VscStarEmpty, VscStarFull } from 'react-icons/vsc';

export const Button = styled.button`
  display: block;
  align-text: center;
  justify-content: center;
`;

export const UnselectedIcon = styled(VscStarEmpty)`
  font-size: 27px;
  margin-right: 20px;
  color: #6c56a3;
  margin-left: 0.2em;
`;

export const SelectedIcon = styled(VscStarFull)`
  font-size: 27px;
  margin-right: 20px;
  color: #F894F1;
  margin-left: 0.2em;
`;