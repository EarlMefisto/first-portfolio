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
display: flex;
justify-content: center;
color: #5D478B;

margin-bottom: 50px;
`;

const StyledLeaveInfoForm = styled.form`
max-width: 570px;
width: 100%;
display: flex;
flex-direction: column;
gap: 55px;
background-color: #151f34;
`;

const StyledLeaveInfoField = styled.input`
background-color: #EEAEEE;
`;
