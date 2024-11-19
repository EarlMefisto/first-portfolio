import React from "react";
import styled from "styled-components";

type PortfolioPostPropsType = {
  src: string;
};

export const PortfolioPost = (props: PortfolioPostPropsType) => {
  return (
    <StyledPortfolioPost>
      <PortfolioPostImage src={props.src} alt="" />
    </StyledPortfolioPost>
  );
};

const StyledPortfolioPost = styled.div``;
const PortfolioPostImage = styled.img`
  max-width: 310px;
  width: 100%;

  object-fit: cover;
`;
