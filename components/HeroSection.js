import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import PText from './PText';
import Image from 'next/image'
// import HeroImg from '/public/images/hero.png';
import SocialMediaArrow from '/public/images/social-media-arrow.svg'
import ScrollDownArrow from '/public/images/scroll-down-arrow.svg';

const HeroStyles = styled.div`
  .hero {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .hero__heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero__name {
      font-size: 7rem;
      font-family: 'Montserrat SemiBold';
      color: #ff7f50;
    }
  }
  .hero__img {
    max-width: 900px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
  }
  .hero__info {
    margin-top: -18rem;
  }
  .hero__social,
  .hero__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 20px;
    width: 50px;
  }
  .hero__social {
    left: 50px;
  }
  .hero__scrollDown {
    right: 50px;
  }
  .hero__social__indicator,
  .hero__scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    .images {
      max-height: 50px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
      margin-top: 50px;
    }
  }
  .hero__scrollDown {
    img {
      max-height: 70px;
    }
  }
  .hero__social__text {
    ul {
      li {
        margin-bottom: 1rem;
      }
      a {
        display: inline-block;
        font-size: 1.6rem;
        transform: rotate(-90deg);
        letter-spacing: 5px;
        margin-bottom: 2rem;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
    }
    .hero__heading {
      font-size: 1.4rem;
      margin-bottom: -4rem;
      .hero__name {
        font-size: 3.5rem;
      }
    }
    .hero__img {
      height: 300px;
    }
    .hero__info {
      margin-top: 3rem;
    }
    .hero__social {
      left: 0px;
      bottom: -15%;
      width: 20px;
      align-items: center;
      .hero__social__indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .hero__social__text {
        gap: 2;
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .hero__scrollDown {
      right: 0;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <h1 className="hero__heading">
            <span>Hello This is</span>
            <span className="hero__name">tabuladata</span>
          </h1>
          <div className="hero__img">
            {/* <Image layout="responsive" width="30%" height="20%" objectFit="cover" src={HeroImg} alt="" /> */}
          </div>
          <div className="hero__info">
            <PText>
              I am working as a free lance web designer and developer for 4
              years. I love to design and make new web expriences for the
              people.
            </PText>
            <Button btnLink="/projects" btnText="See my works" />
            <div className="hero__social">
              <div className="hero__social__indicator">
                <p>Follow</p>
                <div className="images">
                  <Image layout="responsive" width="30%" height="100%" src={SocialMediaArrow} alt="" />
                </div>
              </div>
              <div className="hero__social__text">
                <ul>
                  <li>
                    <a
                      href="https://www.instagram.com/aldiazmy"
                      target="_blank"
                      rel="noreferrer"
                    >
                      IG
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/aldiazmy"
                      target="_blank"
                      rel="noreferrer"
                    >
                      TW
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/aldiazmy"
                      target="_blank"
                      rel="noreferrer"
                    >
                      LI
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="hero__scrollDown">
              <p>Scroll</p>
              <div className="images">
                <Image layout="responsive" width="10%" height="60%" src={ScrollDownArrow} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
