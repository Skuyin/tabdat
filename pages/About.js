import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import PText from '../components/PText';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      color: coral;
      font-family: 'Montserrat SemiBold';
      padding: 0.5rem;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
    color: coral;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
      color: var(--deep-dark);
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
    color: var(--deep-dark);
  }
  @media only screen and (max-width: 768px) {
    padding-top: 4rem;
    text-align: center;
    span {
      font-size: 3rem;
    }
    .about__heading {
      font-size: 2rem;
    }
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__info__heading {
      font-size: 2.5rem;
    }
  }
`;

export default function About() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              Hi, I am <span>tabuladata</span>
            </p>
            <h2 className="about__heading">A freelance Web Developer</h2>
            <div className="about__info">
              <PText>
                I am from jakarta, indonesia. A place beauty and nature. Since
                my childhoold, i loce art and design. I always try to design
                stuff with my unique point of view. i also love to create things
                that can be usefull to others.
                <br /> <br />I started coding since i wan in hight school.
                Coding is also an art for mr. I love it and now I have the
                opurtunity to design along woth the coding. I find it really
                interesting and I enjoyed the process a lot.
                <br /> <br />
                My vision is to make the world better place. Now almost
                everything is becoming better than ever. It is time for use to
                create more good stuff that hekps the world to become a better
                place
              </PText>
            </div>
            <Button btnLink="#" btnText="Download CV" />
          </div>
          <div className="right">
            <img src="" alt="" />
          </div>
        </div>
        <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading">our stack</h1>
            <AboutInfoItem
              title="FrontEnd"
              items={['HTML', 'CSS', 'JavaScript', 'REACT']}
            />
            <AboutInfoItem title="BackEnd" items={['Node', 'Express', 'PHP']} />
            <AboutInfoItem
              title="Design"
              items={['Ilustrator', 'Photoshop', 'Figma']}
            />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">experiences</h1>
            <AboutInfoItem
              title="2010-2012"
              items={['Work with pak de gino']}
            />
            <AboutInfoItem
              title="2012-2016"
              items={['Facebook']}
            />
            <AboutInfoItem title="2016-" items={['Nganggur ada loker ga']} />
          </div>
        </div>
      </div>
      <ContactBanner />
    </AboutPageStyles>
  );
}
