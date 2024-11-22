import React from "react";
import styled from "styled-components";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitile";
import { SectionText } from "../../../components/SectionText";

export const MyWorks = () => {
  return (
    <StyledMyWorks>
      <Container>
        <SectionTitle>My Works</SectionTitle>
        <SectionText>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. lorem ipsum
        </SectionText>
        <FlexWrapper></FlexWrapper>
      </Container>
    </StyledMyWorks>
  );
};

const StyledMyWorks = styled.section``;
