import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroBtnWrapper, HeroH1, HeroP,HeroP2, ArrowForward, ArrowRigth } from "./HeroElements";
import { Button } from "../ButtonElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Hi, I'm Dzaki.</HeroH1>
        <HeroP>I'm Fullstack Developer.</HeroP>
        <HeroP2>Feel free to check out my works below.</HeroP2>
        <HeroBtnWrapper>
          <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
            See My Projects {hover ? <ArrowForward /> : <ArrowRigth />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
