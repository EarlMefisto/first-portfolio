import React from "react";
import styled from "styled-components";
import { Info } from "./PropsInfo/PropsInfo";
export const ContactInfo = () => {
  return (
    <StyledContactInfo>
      <StyledContactInfoTitle>Contact Information</StyledContactInfoTitle>
      
        <Info iconId={"location"} description={"Country: Bangladesh"} />
        <Info iconId={"mail"} description={"Email: youremail@gmail.com"} />
        <Info iconId={"mobile"} description={"Support services: 15369"} />
      
    </StyledContactInfo>
  );
};

const StyledContactInfo = styled.div``;

const StyledContactInfoTitle = styled.h2``;
