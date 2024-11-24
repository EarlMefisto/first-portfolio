import styled from "styled-components";
import { ContactsInfo } from "./PropsInfo/ContactInfo";
import { Container } from "../../../components/Container";
import { SectionTitle } from "../../../components/SectionTitile";


export const ContactInfo = () => {
  return (
    <StyledContactInfo>
      <Container>
        <SectionTitle>Contact Information</SectionTitle>
        <StyledInfo>
          <ContactsInfo iconId={"location"} />
          <ContactsInfo iconId={"mail"} />
          <ContactsInfo iconId={"mobile"} />
        </StyledInfo>
      </Container>
    </StyledContactInfo>
  );
};

const StyledContactInfo = styled.section`
  
`;


// description={"Country: Belarus"}
// description={"Email: hataketodoroke@gmail.com"}
// description={"Phone: +375*********"}
const StyledInfo = styled.div`

`;