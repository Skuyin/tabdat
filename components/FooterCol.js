import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const ColStyle = styled.div`
  color: var(--gray-1);
  .heading {
    font-size: 2.4rem;
    margin-bottom: 2rem;
  }
  .li {
    margin-bottom: 1rem;
  }
  a {
    font-size: 1.8rem;
  }
`;

export default function FooterCol({
  heading = 'col heading',
  Links = [
    {
      type: 'Link',
      title: 'Home',
      path: '/home',
    },
    {
      type: 'link',
      title: 'About',
      path: '/About',
    },
  ],
}) {
  return (
    <ColStyle>
      <h1 className="heading">{heading}</h1>
      <ul>
        {Links.map((item, index) => (
          <li key={index}>
            {item.type === 'Link' ? (
              <Link href={item.path}>{item.title}</Link>
            ) : (
              <a href={item.path} target="_blank" rel="noreferrer">
                {item.title}
              </a>
            )}
          </li>
        ))}
      </ul>
    </ColStyle>
  );
}
