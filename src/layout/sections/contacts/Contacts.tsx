import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { LeaveInfo } from "./leaveInfo/LeaveInfo";
import { ContactInfo } from "./contactInfo/ContactInfo";


export const Contacts = () => {
  return (
    <StyledContacts >
      <Container>
      <FlexWrapper direction={"row"} justify={"space-around"}>
        <LeaveInfo />
        <ContactInfo />
      </FlexWrapper>
      </Container>
    </StyledContacts>
  );
};

const StyledContacts = styled.section`
`;
