import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitile";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Plans } from "./Plans/PropsPlans";
import { SectionText } from "../../../components/SectionText";

export const PricePlans = () => {
  return (
    <StyledPricePlans>
      <SectionTitle>Price Plans</SectionTitle>
      <SectionText>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </SectionText>
      {/* сделать все первые буквы капсом! */}
      <FlexWrapper>
        <Plans title={"Silver"} currency={"$"} price={0.0} description={""} />
        <Plans title={"Gold"} currency={"$"} price={50.0} description={""} />
        <Plans title={"Dimond"} currency={"$"} price={80.0} description={""} />
      </FlexWrapper>
    </StyledPricePlans>
  );
};

const StyledPricePlans = styled.section`
  background-color: #f5f5f5;
  min-height: 100vh;
`;