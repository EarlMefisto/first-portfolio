import styled from "styled-components";
import { thems } from "../../../styles/Thems";
import { Icon } from "../../../components/icon/Icon";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitile";

export const WorksContacts = () => {
  return (
    <div>
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
    </div>
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

const StyledContact = styled.div`
  width: 40%;
`;

const StyledContactsInfo = styled.div`
  padding: 25px 0;
`;
