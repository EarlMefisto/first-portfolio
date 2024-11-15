import React from "react";
import styled from "styled-components";
import photo from "../../../assets/img/your-image.jpg"; // возможно, придётся поменять на svg формат
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper
        align={"center"}
        justify={"space-around"}
        background={"#FFFF"}
      >
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
    </StyledMain>
  );
};

const StyledMain = styled.div`
  width: 80%;
`;

const Photo = styled.img`
  width: 327px;
  height: 460px;
  object-fit: cover;
`;
