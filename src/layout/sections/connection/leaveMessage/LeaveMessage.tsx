import styled from "styled-components";
import { thems } from "../../../../styles/Thems";
import { SectionTitle } from "../../../../components/SectionTitile";
import { Button } from "../../../../components/Button";
import { FlexWrapper } from "../../../../components/FlexWrapper";

export const LeaveMessage = () => {
  return (
    <StyledLeaveMessage>
      <StyledForm>
        <SectionTitle algin={"left"}>Leave me your message</SectionTitle>
        <StyledLeaveMessageForm>
          <StyledLabel htmlFor="textField">
            Your Full Name (Required)
          </StyledLabel>
          <StyledLeaveMessageField />
          <StyledLabel htmlFor="textField">Your Email (Required)</StyledLabel>
          <StyledLeaveMessageField />
          <StyledLabel htmlFor="textField">Subject</StyledLabel>
          <StyledLeaveMessageField />
          <StyledLabel htmlFor="textField">Your Message</StyledLabel>
          <StyledLeaveMessageField as={"textarea"} id="textField" />
          <FlexWrapper gap={"20px"}>
            <Button type={"submit"}>Send Message</Button>
            <Button type={"reset"}>Reset</Button>
          </FlexWrapper>
        </StyledLeaveMessageForm>
      </StyledForm>
    </StyledLeaveMessage>
  );
};

const StyledLeaveMessage = styled.section`
width: 60%;

`;

const StyledForm = styled.div`

  @media ${thems.media.mobile} {
    width: 100%;
    margin: 0 10px;
  }
`;

const StyledLeaveMessageForm = styled.form`
  display: flex;
  flex-direction: column;

  padding: 0 35px 30px;
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

const StyledLeaveMessageField = styled.input`
  width: 100%;

  color: white;
  background-color: ${thems.colors.primaryBg};

  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 160%;

  border: 2px solid ${thems.colors.primaryBg};

  padding: 5px;

  &:focus-visible {
    outline: 2px solid ${thems.colors.accent};
  }
`;

const StyledLabel = styled.label`
  padding: 25px 0 8px;
`;
