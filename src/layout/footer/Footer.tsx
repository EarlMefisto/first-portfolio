import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Icon } from "../../components/icon/Icon";
import { Container } from "../../components/Container";

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FlexWrapper justify={"center"}>
          <Icon
            iconId={"copyright"}
            width={"24px"}
            height={"24px"}
            viewBox={"0 0 24px 24px"}
          />
          <Copyright>2021 All Rights Reserved.Ojjomedia</Copyright>
        </FlexWrapper>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer``;
const Copyright = styled.small`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 160%;
  text-transform: capitalize;
  color: #2b2b2b;
`;
