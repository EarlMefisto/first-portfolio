import React from "react";
import styled from "styled-components";
import photo from "../../../assets/img/your-image.jpg";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper align={"center"}>
          <div>
            <h2>I’m Rayan Adlrdard</h2>
            <h1>Front-end Developer</h1>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              volutpat feugiat placerat lobortis. Natoque rutrum semper sed
              suspendisse nunc lectus.
            </span>
          </div>
          <Photo src={photo} alt="" />
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #F5F5F5;
`;

const Photo = styled.img`
  width: 327px;
  height: 460px;
  object-fit: cover;
  background-color: white;
`;
