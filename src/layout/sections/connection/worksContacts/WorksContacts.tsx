import styled from "styled-components";
import { SectionTitle } from "../../../../components/SectionTitile";
import { Icon } from "../../../../components/icon/Icon";

export const WorksContacts = () => {
  return (
    <StyledContacts>
      <SectionTitle>Contact Information</SectionTitle>
      <WorksContactsList>
        <WorksContactsItem>
          <WorksContactsLink>
            <Icon iconId={"gmail"} viewBox={"0 0 7140 540"} />
          </WorksContactsLink>
        </WorksContactsItem>
        <WorksContactsItem>
          <WorksContactsLink>
            <Icon iconId={"telegram"} viewBox={"0 0 1540 104"} />
          </WorksContactsLink>
        </WorksContactsItem>
        <WorksContactsItem>
          <WorksContactsLink>
            <Icon iconId={"linkedin"} viewBox={"0 0 240 15"} />
          </WorksContactsLink>
        </WorksContactsItem>
      </WorksContactsList>
    </StyledContacts>
  );
};

const StyledContacts = styled.div`
  
`;

const WorksContactsList = styled.ul``;

const WorksContactsItem = styled.li``

const WorksContactsLink = styled.a``