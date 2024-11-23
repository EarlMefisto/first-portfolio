import styled from "styled-components";

import { thems } from "../../../../styles/Thems";
import { Container } from "../../../../components/Container";

export const LeaveInfo = () => {
  return (
    <StyledLeaveInfo>
      <Container>
        <StyledLeaveInfoTitle>Leave us your info</StyledLeaveInfoTitle>
        <StyledLeaveInfoForm>
          <StyledLeaveInfoField placeholder={"Your Full Name (Required)"} />
          <StyledLeaveInfoField placeholder={"Your Email (Required)"} />
          <StyledLeaveInfoField placeholder={"Subject"} />
          <StyledLeaveInfoField as={"textarea"} placeholder={"Your Message"} />
          <ButtonInfo type={"submit"}>Send Message</ButtonInfo>
        </StyledLeaveInfoForm>
      </Container>
    </StyledLeaveInfo>
  );
};

const StyledLeaveInfo = styled.div``;

const StyledLeaveInfoTitle = styled.h2`
  display: flex;
  justify-content: flex-start;
  color: ${thems.colors.title};

  margin-bottom: 50px;
`;

const StyledLeaveInfoForm = styled.form`
  max-width: 570px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 55px;
  margin: 0 auto;

  background-color: ${thems.colors.secondaryBg};
`;

const StyledLeaveInfoField = styled.input`
  width: 100%;

  background-color: ${thems.colors.text};
`;

const ButtonInfo = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 9px 24px;
  margin: 0 0 25px 25px;
  width: 159px;
  height: 35px;
  border-radius: 0;

  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
`;
