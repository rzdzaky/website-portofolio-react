import React from 'react'
import icon1 from '../../images/mobil.png'
import { ServicesContainer, ServicesH1, ServicesCard, ServicesIcon, ServicesH2, ServicesWrapper, ServicesP } from "./ServicesElements";

const Services = () => {
    return (
      <ServicesContainer id="services">
        <ServicesH1>MY SERVICES</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={icon1} />
            <ServicesH2>blabla</ServicesH2>
            <ServicesP>We help reduce your fess and increase overall revenue.</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={icon1} />
            <ServicesH2>blabla</ServicesH2>
            <ServicesP>We help reduce your fess and increase overall revenue.</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={icon1} />
            <ServicesH2>blabla</ServicesH2>
            <ServicesP>We help reduce your fess and increase overall revenue.</ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    );
}

export default Services
