import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const ButtonStyle = styled.div`
  margin-top: 2rem;
  .button {
    font-size: 2.2rem;
    background-color: ${(props) =>
    props.outline ? 'transparent' : 'coral'};
    padding: 1rem 1rem;
    border-radius: 8px;
    display: inline-block;
    border: 2px solid coral;
    color: ${(props) => (props.outline ? 'coral' : 'var(--white)')};
  }
  @media only screen and (max-width: 768px) {
    .botton {
      font-size: 11.8rem;
    }
  }
`;

export default function Button({
  btnLink = 'test',
  btnText = 'Test',
  outline = false,
}) {
  return (
    <ButtonStyle outline={outline} className="buttons-wrapper">
      <Link href={btnLink}>
        <a className="button">{btnText}</a>
      </Link>
    </ButtonStyle>
  );
}
