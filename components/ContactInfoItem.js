import React from 'react';
import styled from 'styled-components';
import { MdPlace } from 'react-icons/md';
import PText from './PText';

const ItemStyles = styled.div`
  padding: 2rem;
  border: 2px solid coral;
  display: flex;
  align-items: center;
  gap: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  .icon {
    color: coral;
    font-size: 30px;
    padding: 1.rem;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
  .para {
    color: var(--deep-dark);
  }
  Image {
    svg {
      width: 3.5rem;
    }
  }
`;
export default function ContactInfoItem({
  icon = <MdPlace />,
  text = 'This is an info',
}) {
  return (
    <ItemStyles>
      <div className="icon">{icon}</div>
      <div className="info">
        <PText>{text}</PText>
      </div>
    </ItemStyles>
  );
}
