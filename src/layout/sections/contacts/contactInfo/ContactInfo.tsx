
import styled from "styled-components";
import { Info } from "./PropsInfo/PropsInfo";
import { thems } from "../../../../styles/Thems";

export const ContactInfo = () => {
  return (
    <StyledContactInfo>
      <StyledContactInfoTitle>Contact Information</StyledContactInfoTitle>
        <Info iconId={"location"} description={"Country: "}/>
        <Info iconId={"mail"} description={"Email: "} />
        <Info iconId={"mobile"} description={"Phone:"} />
    </StyledContactInfo>
  );
};

const StyledContactInfo = styled.div`

`;

const StyledContactInfoTitle = styled.h2`
  color: ${thems.colors.title};

  margin-bottom: 50px;
`;
