import React from "react";
import styled from "styled-components";
import { Info } from "./PropsInfo/PropsInfo";
import { FlexWrapper } from "../../../../components/FlexWrapper";

export const ContactInfo = () => {
  return (
    <StyledContactInfo>
      <StyledContactInfoTitle>Contact Information</StyledContactInfoTitle>
        <Info iconId={"location"} description={"Country: "} direction={""}/>
        <Info iconId={"mail"} description={"Email: "} />
        <Info iconId={"mobile"} description={"Phone:"} />
    </StyledContactInfo>
  );
};

const StyledContactInfo = styled.div`

`;

const StyledContactInfoTitle = styled.h2`
  color: #5d478b;

  margin-bottom: 50px;
`;
