import React from "react";
import styled from "styled-components";
import { Button } from "../../../../components/Button";

export const LeaveInfo = () => {
  return (
    <StyledLeaveInfo>
      <StyledLeaveInfoTitle>Leave us your info</StyledLeaveInfoTitle>
      <StyledLeaveInfoForm>
        <StyledLeaveInfoField placeholder={"Your Full Name (Required)"}/>
        <StyledLeaveInfoField placeholder={"Your Email (Required)"}/>
        <StyledLeaveInfoField placeholder={"Subject"}/>
        <StyledLeaveInfoField as={"textarea"} placeholder={"Your Message"}/>
        <Button type={"submit"}>Send Message</Button>
      </StyledLeaveInfoForm>
    </StyledLeaveInfo>
  );
};

const StyledLeaveInfo = styled.div`
  min-height: 50vh;
`;

const StyledLeaveInfoTitle = styled.h2`
  background-color: #f5f5f5;
`;

const StyledLeaveInfoForm = styled.form`
max-width: 521px;
width: 100%;
display: flex;
flex-direction: column;
gap: 55px;
background-color: white;
`;

const StyledLeaveInfoField = styled.input``;
