import styled from "styled-components";
import { thems } from "../../../styles/Thems";
import { Container } from "../../../components/Container";
import { SectionTitle } from "../../../components/SectionTitile";
import { Icon } from "../../../components/icon/Icon";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const LeaveInfo = () => {
  return (
    <Container>
      <StyledLeaveInfo>
        <StyledForm>
          <SectionTitle>Leave me your info</SectionTitle>
          <StyledLeaveInfoForm>
            <StyledLeaveInfoField />
            <StyledLeaveInfoField />
            <StyledLeaveInfoField />
            <StyledLeaveInfoField as={"textarea"} />
            <ButtonInfo type={"submit"}>Send Message</ButtonInfo>
          </StyledLeaveInfoForm>
        </StyledForm>
        <StyledContact>
          <SectionTitle>Contact Information</SectionTitle>
          <StyledContactsInfo>
            <FlexWrapper direction={"column"}>
              <ContactsContainer>
                <ContactsInfoLocation>
                  <InfoWrapper>
                    <Info iconId={"location"} />
                  </InfoWrapper>
                  <div>
                    <ContactsText>Country: Belarus</ContactsText>
                    <ContactsText>District: Minsk</ContactsText>
                    <ContactsText>City: Minsk</ContactsText>
                  </div>
                </ContactsInfoLocation>

                <ContactsInfoMail>
                  <InfoWrapper>
                    <Info iconId={"mail"} />
                  </InfoWrapper>
                  <div>
                    <ContactsText>Google: ***</ContactsText>
                    <ContactsText>Yandex: ***</ContactsText>
                    <ContactsText>Mail.ru: ***</ContactsText>
                  </div>
                </ContactsInfoMail>

                <ContactsInfoMobile>
                  <InfoWrapper>
                    <Info iconId={"mobile"} />
                  </InfoWrapper>
                  <div>
                    <ContactsText>Telegram @earlmefisto</ContactsText>
                    <ContactsText>Instagram @swan_iryna</ContactsText>
                    <ContactsText>LinkedIn ***</ContactsText>
                  </div>
                </ContactsInfoMobile>
              </ContactsContainer>
            </FlexWrapper>
          </StyledContactsInfo>
        </StyledContact>
      </StyledLeaveInfo>
    </Container>
  );
};

type InfoPropsType = {
  iconId?: string;
};

const Info = (props: InfoPropsType) => {
  return (
    <StyledContactsInfo>
      <Icon iconId={props.iconId || "none"} />
    </StyledContactsInfo>
  );
};

const StyledLeaveInfo = styled.section`
  display: flex;
  gap: 30px;
`;

const StyledForm = styled.div`
  width: 60%;
`;

const StyledLeaveInfoForm = styled.form`
  display: flex;
  flex-direction: column;
  
  gap: 25px;
  padding: 25px;
  margin-top: 45px;

  background-color: ${thems.colors.secondaryBg};

  textarea {
    resize: none;
    height: 210px;
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

const ButtonInfo = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 159px;
  height: 35px;
  border-radius: 0;

  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
`;

const StyledContact = styled.div`
  width: 40%;
`;

const StyledContactsInfo = styled.div`
  padding: 25px 0;
`;

const ContactsContainer = styled.div``;

const ContactsInfoLocation = styled.div`
  margin: 18px 0;
  background-color: ${thems.colors.secondaryBg};
`;

const ContactsInfoMail = styled.div`
  background-color: ${thems.colors.secondaryBg};
`;
const ContactsInfoMobile = styled.div`
  margin: 18px 0;
  background-color: ${thems.colors.secondaryBg};
`;

const InfoWrapper = styled.div`
  text-align: center;
`;
const ContactsText = styled.div`
  padding-bottom: 16px;
  padding-left: 25px;
`;
