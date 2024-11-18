import React from "react";
import { Menu } from "../../../components/menu/Menu";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitile";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionText } from "../../../components/SectionText";
import { PortfolioPost } from "./portfolioPost/PortfolioPost";

import portfolio1Img from "../../../assets/img/portfolio-image-1.webp";
import portfolio2Img from "../../../assets/img/portfolio-image-2.webp";
import portfolio3Img from "../../../assets/img/portfolio-image-3.webp";
import portfolio4Img from "../../../assets/img/portfolio-image-4.webp";
import portfolio5Img from "../../../assets/img/portfolio-image-5.webp";
import portfolio6Img from "../../../assets/img/portfolio-image-6.webp";
import portfolio7Img from "../../../assets/img/portfolio-image-7.webp";
import portfolio8Img from "../../../assets/img/portfolio-image-8.webp";
import portfolio9Img from "../../../assets/img/portfolio-image-9.webp";
import { Container } from "../../../components/Container";

const PortfolioItems = [
  "All Categories",
  "UI Design",
  "Web Templates",
  "Logo",
  "Branding",
];

export const Portfolio = () => {
  return (
    <StyledPortfolio>
      <Container>
        <SectionTitle>Portfolio</SectionTitle>
        <SectionText>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. lorem ipsum
        </SectionText>
        <FlexWrapper
          direction={"row"}
          wrap={"nowrap"}
          justify={"space-around"}
        >
          <Menu menuItems={PortfolioItems} />
        </FlexWrapper>
        <FlexWrapper wrap={"wrap"}>
          <PortfolioPost src={portfolio1Img} />
          <PortfolioPost src={portfolio2Img} />
          <PortfolioPost src={portfolio3Img} />
          <PortfolioPost src={portfolio4Img} />
          <PortfolioPost src={portfolio5Img} />
          <PortfolioPost src={portfolio6Img} />
          <PortfolioPost src={portfolio7Img} />
          <PortfolioPost src={portfolio8Img} />
          <PortfolioPost src={portfolio9Img} />
        </FlexWrapper>
      </Container>
    </StyledPortfolio>
  );
};

const StyledPortfolio = styled.section``;
