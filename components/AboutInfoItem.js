import React from 'react';
import styled from 'styled-components';
import PText from './PText';

const AboutItemStyles = styled.div`
  padding-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 3rem;
  position: relative;
  .title {
    font-size: 2.4rem;
  }
  .items {
    display: flex;
    gap: 1.5rem;
    position: absolute;
    left: 18rem;
    flex-wrap: wrap;
  }
  .item {
    background-color: coral;
    padding: 1rem;
    border-radius: 8px;
    .para {
      color: var(--deep-dark);
    }
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    .items {
      position: initial;
      gap: 1rem;
    }
    .title {
      font-size: 2rem;
    }
  }
`;

export default function AboutInfoItem({
  title = 'this is title',
  items = ['HTML', 'CSS', 'JS'],
}) {
  return (
    <AboutItemStyles>
      <h1>{title}</h1>
      <div className="items">
        {items.map((item, index) => (
          <div className="item" key={index}>
            <PText>{item}</PText>
          </div>
        ))}
      </div>
    </AboutItemStyles>
  );
}
