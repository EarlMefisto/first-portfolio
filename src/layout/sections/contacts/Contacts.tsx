import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitile";
import { LeaveInfo } from "./leaveInfo/LeaveInfo";
import { ContactInfo } from "./contactInfo/ContactInfo";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";

export const Contacts = () => {
  return (
    <StyledContacts>
      <Container>
        <FlexWrapper justify={"space-around"}>
          <LeaveInfo />
          <ContactInfo />
        </FlexWrapper>
      </Container>
    </StyledContacts>
  );
};

const StyledContacts = styled.section``;
