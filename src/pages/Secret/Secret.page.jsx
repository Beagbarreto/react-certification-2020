import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function SecretPage() {
  return (
    <section>
      <pre>
        welcome, voyager...
        <Link><LinkColor to="/"> ← go back</LinkColor></Link>
      </pre>
      <CardContainer>
      <iframe
        width="800"
        height="450"
        allowFullScreen
        frameBorder="0"
        title="rick roll"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0&autoplay=1"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      />
      </CardContainer>
    </section>
  );
}

export default SecretPage;

const CardContainer = styled.div`
  border-radius: 6px;
  overflow: hidden;
  box-shadow: rgb(85, 91, 255) 0px 0px 0px 3px, rgb(31, 193, 27) 0px 0px 0px 6px, rgb(255, 217, 19) 0px 0px 0px 9px, rgb(255, 156, 85) 0px 0px 0px 12px, rgb(255, 85, 85) 0px 0px 0px 15px;
`;

const LinkColor = styled.p`
color: #6c56a3;
`;