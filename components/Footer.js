import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyles = styled.div`
  padding-top: 5rem;
  background-color: var(--deep-dark);
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
    color: coral;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--deep-dark);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0px;
      color: var(--gray-1);
    }
  }
  @media only screen and (max-width: 768px) {
    padding-top: 1rem;
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">tabuladata</h1>
          <PText>
            A freelance web designer and develo[er from Jakarta, Indonesia. I
            always make websites that have uniq designs and also has a good
            performance rate
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            Links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                title: 'About',
                path: '/About',
                type: 'Link',
              },
              {
                title: 'Projects',
                path: '/Projects',
                type: 'Link',
              },
              {
                title: 'Contact',
                path: '/Contact',
                type: 'Link',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            Links={[
              {
                title: '+990123',
                path: 'tel:+990123',
              },
              {
                title: 'dev@tabuladata',
                path: 'mailto:tabuladata@gmail.com',
              },
              {
                title: 'GEC Circle, Jakarta, Indonesia',
                path: 'https://google.com/maps',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            Links={[
              {
                title: 'Facebook',
                path: 'https://facebook.com',
              },
              {
                title: 'Instagram',
                path: 'https://instagram.com',
              },
              {
                title: 'Twitter',
                path: 'https://twitter.com',
              },
              {
                title: 'Linked In',
                path: 'https://linkedin.com',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>© 2022 - tabuladata | Designed by someone in eart</PText>
        </div>
      </div>
    </FooterStyles>
  );
}
