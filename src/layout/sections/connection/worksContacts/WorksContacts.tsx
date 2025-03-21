import styled from "styled-components";
import { SectionTitle } from "../../../../components/SectionTitile";
import { Icon } from "../../../../components/Icon";
import { thems } from "../../../../styles/Thems";

export const WorksContacts = () => {
  return (
    <StyledContacts>
      <SectionTitle>Contact Information</SectionTitle>
      <WorksContactsList>
        <WorksContactsItem>
          <WorksContactsLink
            href={
              "https://www.instagram.com/swanayran?igsh=MWIwaDlzOWNiODVqMw%3D%3D&utm_source=qr"
            }
          >
            <Icon height={"120px"} width={"100px"} iconId={"instagram"} />
          </WorksContactsLink>
        </WorksContactsItem>
        <WorksContactsItem>
          <WorksContactsLink href={"https://t.me/earlmefisto"}>
            <Icon height={"120px"} width={"100px"} iconId={"telegram"} />
          </WorksContactsLink>
        </WorksContactsItem>
        <WorksContactsItem>
          <WorksContactsLink href={"https://www.linkedin.com/in/earlmefisto/"}>
            <Icon height={"120px"} width={"100px"} iconId={"linkedin"} />
          </WorksContactsLink>
        </WorksContactsItem>
      </WorksContactsList>
    </StyledContacts>
  );
};

const StyledContacts = styled.section`
  width: 40%;

  @media ${thems.media.laptop} {
    width: 40%;
  }
`;

const WorksContactsList = styled.ul`
  margin-top: 50px;

  text-align: center;
`;

const WorksContactsItem = styled.li``;

const WorksContactsLink = styled.a``;
