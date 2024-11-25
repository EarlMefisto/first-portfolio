import styled from "styled-components";
import { thems } from "../../../styles/Thems";
import { Container } from "../../../components/Container";
import { SectionTitle } from "../../../components/SectionTitile";

export const LeaveInfo = () => {
  return (
    <Container>
      <StyledLeaveInfo>
        <StyledForm>
          <SectionTitle>Leave me your message</SectionTitle>
          <StyledLeaveInfoForm>
            <StyledLabel htmlFor="textField">
              Your Full Name (Required)
            </StyledLabel>
            <StyledLeaveInfoField />
            <StyledLabel htmlFor="textField">Your Email (Required)</StyledLabel>
            <StyledLeaveInfoField />
            <StyledLabel htmlFor="textField">Subject</StyledLabel>
            <StyledLeaveInfoField />
            <StyledLabel htmlFor="textField">Your Message</StyledLabel>
            <StyledLeaveInfoField as={"textarea"} id="textField" />

            <ButtonInfo type={"submit"}>Send Message</ButtonInfo>
          </StyledLeaveInfoForm>
        </StyledForm>
      </StyledLeaveInfo>
    </Container>
  );
};

const StyledLeaveInfo = styled.section`
  display: flex;
  justify-content: center;
  gap: 30px;
`;

const StyledForm = styled.div`
  width: 60%;

  @media ${thems.media.mobile} {
    width: 100%;
    margin: 0 10px;
  }
`;

const StyledLeaveInfoForm = styled.form`
  display: flex;
  flex-direction: column;

  padding: 0 25px 25px ;
  margin-top: 50px;

  background-color: ${thems.colors.secondaryBg};

  @media ${thems.media.mobile} {
    margin-top: 30px;
  }

  textarea {
    resize: none;
    height: 210px;

    @media ${thems.media.mobile} {
      height: 110px;
    }
  }
`;

const StyledLeaveInfoField = styled.input`
  width: 100%;

  background-color: ${thems.colors.text};

  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 160%;

  &:focus-visible {
    outline: 2px solid ${thems.colors.accent};
  }
`;

const StyledLabel = styled.label`
  padding: 25px 0 8px;
`

const ButtonInfo = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 159px;
  height: 35px;
  border-radius: 0;
  margin-top: 25px;

  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
`;
