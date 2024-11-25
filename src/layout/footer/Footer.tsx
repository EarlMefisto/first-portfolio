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
          <IconWrapper>
            <Icon
              iconId={"copyright"}
              width={"24px"}
              height={"24px"}
              viewBox={"0 0 24px 24px"}
            />
          </IconWrapper>
          <Copyright>2024 All Rights Reserved</Copyright>
        </FooterWrapper>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  @media ${thems.media.mobile} {
    background-color: ${thems.colors.secondaryBg};
  }
`;

const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${thems.colors.secondaryBg};
`;

const IconWrapper = styled.div`
  margin: 18px 15px 0;
`;

const Copyright = styled.small`
  padding: 18px 0;

  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 160%;
  text-transform: capitalize;
`;
