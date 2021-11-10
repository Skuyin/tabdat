import React from 'react';
import styled from 'styled-components';
import PText from './PText';

const MapStyles = styled.div`
  background: url('/images/map.png') no-repeat center / cover;
  min-height: 400px;
  .container {
    position: relative;
    min-height: 400px;
  }
  .para {
    color: var(--gray-1);
  }
  .map__card {
    position: absolute;
    right: 10%;
    bottom: 10%;
    padding: 2rem;
    background: var(--deep-dark);
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
  }
  .map__card__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: coral;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 3rem;
    text-decoration: underline;
    color: coral;
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    .map__card {
      max-width: none;
      right: auto;
    }
  }
`;

export default function Map() {
  return (
    <MapStyles>
      <div className="container">
        <div className="map__card">
          <h3 className="map__card__heading">Here Is Me</h3>
          <PText>Kemang, South Jakarta, Indonesia</PText>
          <a
            href="https://goo.gl/maps/dDTwiGdRiZTMwMza6"
            target="_blank"
            rel="noreferrer"
            className="map__card__link"
          >
            Here i am on Google Map
          </a>
        </div>
      </div>
    </MapStyles>
  );
}
