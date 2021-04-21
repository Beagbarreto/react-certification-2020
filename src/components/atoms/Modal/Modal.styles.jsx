import styled from 'styled-components';

export const ModalLayot = styled.nav`
  position: fixed,
  top: 50%,
  left: 50%,
  transform(translate -50%, -50%),
  background: WHITE_BKY,
  padding: 50px,
  zIndex: 1000
`;

export const Overlay = styled.nav`
  position: fixed,
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  background: black
  zIndex: 10000
`;