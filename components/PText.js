import React from 'react';
import styled from 'styled-components';

const PSstyle = styled.div`
  max-width: 500px;
  margin: 0 auto;
  font-size: 1.8rem;
  line-height: 1.3em;
  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export default function PText({ children, props }) {
  return (
    <PSstyle className="para">
      <p>{children}</p>
    </PSstyle>
  );
}