import styled from "styled-components";
import { FlexWrapper } from "../../FlexWrapper";
import { Icon } from "../../icon/Icon";
import { Container } from "../../Container";
import { RIghtMenuMenu } from "./rMenu/RMenu";

const Items = ["Home", "Service", "CV", "Portfolio", "Blog", "Contact"];

export const RightMenu = () => {
  return (
    <StyledRightMenu>
      <Container>
        <FlexWrapper align={"center"}>
          <Icon
            iconId={"contrast"}
            width={"30"}
            height={"30"}
            viewBox={"0 0 30 30"}
          />
          <RIghtMenuMenu menuItems={Items} />
        </FlexWrapper>
      </Container>
    </StyledRightMenu>
  );
};

const StyledRightMenu = styled.nav`
  background: #fafafa;
  padding: 0 21px;
  position: fixed;
  top: 0;
  left: 20;
  right: 0;
  z-index: 99999;

  height: 1330px;
`;
