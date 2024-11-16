import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitile";
import { SectionText } from "../../../components/SectionText";
import { Slider } from "../../../components/Slider";
import { FlexWrapper } from "../../../components/FlexWrapper";

import profile1Img from "../../../assets/img/review-image-1.webp";
import profile2Img from "../../../assets/img/review-image-2.webp";
import profile3Img from "../../../assets/img/review-image-3.webp";

export const Recommendations = () => {
  return (
    <StyledRecommendations>
      <SectionTitle>Recommendations</SectionTitle>
      <SectionText>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </SectionText>
      <FlexWrapper>
        <Slider
          title={"Great Quality!"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet...."
          }
          src={profile1Img}
          name={"James Gouse"}
          special={"Graphic Designer"}
        />
        <Slider
          title={"Amazing Work!"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet...."
          }
          src={profile2Img}
          name={"Tiana Philips"}
          special={"Photographer"}
        />
        <Slider
          title={"Great Quality!"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet...."
          }
          src={profile3Img}
          name={"Talan Westervelt"}
          special={"Business man"}
        />
      </FlexWrapper>
      <Pagination>
        <span></span>
        <span></span>
        <span></span>
      </Pagination>
    </StyledRecommendations>
  );
};

const StyledRecommendations = styled.section``;

const Pagination = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  span {
    border-radius: 100%;
    width: 10px;
    height: 10px;
    margin: 5px;
    background-color: #ffb400;
  }
`;
