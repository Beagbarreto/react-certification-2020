import styled from 'styled-components';

export const Favs = styled.section`
  display: block;
  margin: 1rem auto;
  padding-right: 1rem;
  padding-left: 1rem;
`;

export const Title = styled.h1`
  display: flex;
  font-size: 2.1rem;
  letter-spacing: -2px;
  font: Helvetica;
  color: #E92C8A;
  text-align: left;
  margin: 2.5rem;

  @media screen and (max-width: 720px) {
    font-size: 1.5rem;
    margin: 1.2rem;
  }
}
`;