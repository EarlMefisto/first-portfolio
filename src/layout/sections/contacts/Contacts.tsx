import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitile";
import { LeaveInfo } from "./leaveInfo/LeaveInfo";
import { ContactInfo } from "./contactInfo/ContactInfo";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Contacts = () => {
  return (
    <StyledContacts>
      <FlexWrapper justify={"space-around"}>
        <LeaveInfo />
        <ContactInfo />
      </FlexWrapper>
    </StyledContacts>
  );
};

const StyledContacts = styled.section``;
