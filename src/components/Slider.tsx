import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "./FlexWrapper";

type RecommendationsPropsType = {
  title: string;
  src: string;
  text: string;
  name: string;
  special: string;
};

export const Slider = (props: RecommendationsPropsType) => {
  return (
    <StyledSlider>
      <FlexWrapper>
        <Slide>
          <SlideTitle>{props.title}</SlideTitle>
          <SlideText>{props.text}</SlideText>
          <SlideProfile src={props.src} alt="" />
          <SlideName>{props.name}</SlideName>
          <SlideSpecialization>{props.special}</SlideSpecialization>
        </Slide>
      </FlexWrapper>
    </StyledSlider>
  );
};

const StyledSlider = styled.div`
  border: 1px solid;
`;

const Slide = styled.div`
  max-width: 500px;
  text-align: center;
`;

const SlideTitle = styled.h4`
  text-align: left;
`;

const SlideText = styled.p`
  text-align: left;
`;

const SlideProfile = styled.img``;

const SlideName = styled.span``;

const SlideSpecialization = styled.div``;
