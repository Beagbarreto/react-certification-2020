import styled from 'styled-components';

export const Container = styled.main`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -3rem;
  background: ${props => props.background};
  `;