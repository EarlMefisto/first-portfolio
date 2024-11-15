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

const StyledPortfolioPost = styled.div`
  max-width: 310px;
  width: 100%;
  margin: 0 20px 0 0;
`;
const PortfolioPostImage = styled.img`
  height: 300px;
  object-fit: cover;
`;
