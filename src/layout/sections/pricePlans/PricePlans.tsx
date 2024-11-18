import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitile";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Plans } from "./Plans/PropsPlans";
import { SectionText } from "../../../components/SectionText";
import { Container } from "../../../components/Container";

export const PricePlans = () => {
  return (
    <StyledPricePlans>
      <Container>
        <SectionTitle>Price Plans</SectionTitle>
        <SectionText>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. lorem ipsum
        </SectionText>
        {/* сделать все первые буквы капсом! */}
        <FlexWrapper>
          <Plans title={"Silver"} currency={"$"} price={0.0} description={""} />
          <Plans title={"Gold"} currency={"$"} price={50.0} description={""} />
          <Plans
            title={"Dimond"}
            currency={"$"}
            price={80.0}
            description={""}
          />
        </FlexWrapper>
      </Container>
    </StyledPricePlans>
  );
};

const StyledPricePlans = styled.section``;
