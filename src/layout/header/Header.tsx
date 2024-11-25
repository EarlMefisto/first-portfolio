
import styled from "styled-components";
import { DayMode } from "../../components/dayMode/DayMode";
import { FlexWrapper } from "../../components/FlexWrapper";
import { HeaderMenu } from "./headerMenu/HeaderMenu";
import { thems } from "../../styles/Thems";
import { MobileMenu } from "./MobileMenu/MobileMenu";

const Items = ["Home", "Skills", "Works", "Contact"];

export const Header = () => {
  return (
    <StyledHeader>
      <HeaderWrapper>
        <FlexWrapper>
          {/* <DayMode /> */}
          <HeaderMenu menuItems={Items} />
          <MobileMenu menuItems={Items} />
        </FlexWrapper>
      </HeaderWrapper>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  padding: 10px;
  position: fixed;
  top: 30px;
  right: 80px;
  z-index: 99999;

  border: 3px solid ${thems.colors.title};
  border-radius: 5px;

  @media ${thems.media.tablet} {
    display: none;
  }
`;

const HeaderWrapper = styled.div`
margin: 10px 0;
`;
