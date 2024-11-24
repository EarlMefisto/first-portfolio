import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Icon } from "../../components/icon/Icon";
import { Container } from "../../components/Container";
import { thems } from "../../styles/Thems";

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FooterWrapper>
          <FlexWrapper justify={"center"}>
            <IconWrapper>
              <Icon
                iconId={"copyright"}
                width={"24px"}
                height={"24px"}
                viewBox={"0 0 24px 24px"}
              />
            </IconWrapper>
            <Copyright>2024 All Rights Reserved</Copyright>
          </FlexWrapper>
        </FooterWrapper>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer``;

const FooterWrapper = styled.div`
  background-color: ${thems.colors.secondaryBg};
`

const IconWrapper = styled.div`
  margin: 18px 15px 0;
`;

const Copyright = styled.small`
  margin: 18px 0;

  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 160%;
  text-transform: capitalize;
`;
