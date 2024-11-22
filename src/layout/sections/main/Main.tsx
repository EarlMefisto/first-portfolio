import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { Button } from "../../../components/Button";
import photo from "../../../assets/img/photo_2024-10-28_22-37-35.webp";
import { thems } from "../../../styles/Thems";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper align={"center"} justify={"space-around"}>
          <div>
            <StyledTitles>
              <StyledMainTitleH2>
                I’m <span>Iryna Lebedeva</span>
              </StyledMainTitleH2>
              <StyledMainTitleH1>
                And I <span>Front-end Developer</span>
              </StyledMainTitleH1>
            </StyledTitles>
            <StyledMainText>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit. lorem
              ipsum
            </StyledMainText>
          </div>
          <PhotoWrapper>
            <Photo src={photo} alt="My photo" />
          </PhotoWrapper>
        </FlexWrapper>
        <Button>More about me</Button>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  background-color: ${thems.colors.primaryBg};
`;

const StyledTitles = styled.div`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 36px;
  color: ${thems.colors.title};

  span {
    color: ${thems.colors.accent};
  }
`;

const StyledMainTitleH2 = styled.h2``;

const StyledMainTitleH1 = styled.h1``;

const StyledMainText = styled.span`
  display: block;
  max-width: 435px;

  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  text-transform: capitalize;
`;

const PhotoWrapper = styled.div`
  margin: 40px ;
  
  position: relative;
  z-index: 0;

  &::before {
    content: "";
    width: 340px;
    height: 485px;
    border:  5px solid ${thems.colors.title};

    position: absolute;
    top: -24px;
    left: 24px;
    z-index: -1;
  }
`;

const Photo = styled.img`
  width: 325px;
  height: 450px;
  object-fit: cover;
`;
