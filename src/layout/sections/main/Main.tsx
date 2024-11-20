import React from "react";
import styled from "styled-components";
import photo from "../../../assets/img/your-image.jpg";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper direction={"column"}>
          <StyledMainTitleH2>I’m Rayan Adlrdard</StyledMainTitleH2>
          <StyledMainTitleH1>Front-end Developer</StyledMainTitleH1>
          <StyledMainText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
            volutpat feugiat placerat lobortis. Natoque rutrum semper sed
            suspendisse nunc lectus.
          </StyledMainText>
        </FlexWrapper>
        <Photo src={photo} alt="" />
        <ButtonMain/>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`

`;

const StyledMainTitleH2 = styled.h2`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 48px;
  line-height: 124%;
  color: #2b2b2b;
`;

const StyledMainTitleH1 = styled.h1`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 48px;
  line-height: 124%;
  color: #ffb400;
`;

const StyledMainText = styled.span`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  text-transform: capitalize;
`;

const Photo = styled.img`
  width: 327px;
  height: 460px;
  object-fit: cover;
`;

const ButtonMain = styled.button`
  
`