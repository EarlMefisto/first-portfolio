import styled, { css } from "styled-components";
import { thems } from "../../../styles/Thems";
import { Icon } from "../../../components/Icon";

export const MobileMenu = () => {
  return (
    <StyledMobileMenu>
      <BurgerButton isOpen={true}>
        <span></span>
      </BurgerButton>
      <MobileMenuList>
        <MobileMenuItem>
          <MobileMenuLink href="">
            <Icon
              width={"30"}
              height={"30"}
              viewBox={"0 0 18 18"}
              iconId={"home"}
            />
          </MobileMenuLink>
        </MobileMenuItem>
        <MobileMenuItem>
          <MobileMenuLink href="">
            <Icon
              width={"30"}
              height={"30"}
              viewBox={"0 0 18 18"}
              iconId={"service"}
            />
          </MobileMenuLink>
        </MobileMenuItem>
        <MobileMenuItem>
          <MobileMenuLink href="">
            <Icon
              width={"30"}
              height={"30"}
              viewBox={"0 0 18 18"}
              iconId={"works"}
            />
          </MobileMenuLink>
        </MobileMenuItem>
        <MobileMenuItem>
          <MobileMenuLink href="">
            <Icon
              width={"30"}
              height={"30"}
              viewBox={"0 0 18 18"}
              iconId={"message"}
            />
          </MobileMenuLink>
        </MobileMenuItem>
        <MobileMenuItem>
          <MobileMenuLink href="">
            <Icon
              width={"30"}
              height={"30"}
              viewBox={"0 0 18 18"}
              iconId={"contact"}
            />
          </MobileMenuLink>
        </MobileMenuItem>
        <MobileMenuItem>
          <MobileMenuLink href="">
            <Icon
              width={"30"}
              height={"30"}
              viewBox={"0 0 18 18"}
              iconId={"location"}
            />
          </MobileMenuLink>
        </MobileMenuItem>
      </MobileMenuList>
    </StyledMobileMenu>
  );
};

const StyledMobileMenu = styled.nav`
display: none;

@media ${thems.media.tablet} {
  display: block;
}
`;

const MobileMenuPopUp = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
  background-color: ${thems.colors.secondaryBg};
  display: none;

  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      display: flex;
      justify-content: center;
      align-items: center;
    `}

  ul {
    display: flex;
    gap: 43px;
    flex-direction: column;
    align-items: center;
  }
`;

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: 100px;
  right: 300px;
  width: 50px;
  height: 50px;
  z-index: 9999999;

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${thems.colors.accent};

    position: absolute;
    right: 31px;
    top: 34px;

    ${(props) =>
      props.isOpen &&
      css<{ isOpen: boolean }>`
        background-color: rgba(255, 255, 255, 0);
      `}

    &::before {
      content: "";
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${thems.colors.secondaryBg};

      position: absolute;
      transform: translateY(-20px);

      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(-45deg) translateY(0px);
        `}
    }

    &::after {
      display: block;
      width: 24px;
      height: 2px;
      color: ${thems.colors.secondaryBg};

      position: absolute;
      transform: translateY(10px);

      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(-45deg) translateY(0px);
          width: 36px;
        `}
    }
  }
`;

const MobileMenuItem = styled.li``;
const MobileMenuLink = styled.a``;
const MobileMenuList = styled.ul``;
