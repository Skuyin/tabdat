import React from 'react';
import styled from 'styled-components';
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from 'react-icons/md';
import SectionTitle from './SectionTitle';
import ServicesSectionItems from './ServicesSectionItems';

const ServicesItemStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemStyles>
      <div className="container">
        <SectionTitle heading="Services" subheading="What i will do for you" />
        <div className="services__allItems">
          <ServicesSectionItems
            icon={<MdDesktopMac />}
            title="Website Design"
            desc="I do ui/ux design for the website that helps website to get an unique look."
          />
          <ServicesSectionItems
            icon={<MdCode />}
            title="Website Developmentn"
            desc="I also develop the websites. I create hight performance website with blazing fast speed."
          />
          <ServicesSectionItems
            icon={<MdPhonelinkSetup />}
            title="App Dev"
            desc="I develope mobile application I create mobile app with eye catching ui"
          />
        </div>
      </div>
    </ServicesItemStyles>
  );
}
