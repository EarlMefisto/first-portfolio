import styled, { css } from "styled-components";
import { Icon } from "../../../components/icon/Icon";
import { thems } from "../../../styles/Thems";

export const MobileMenu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledMobileMenu>
      <BurgerButton isOpen={true}>
        <span></span>
      </BurgerButton>
      <MobileMenuPopUp isOpen={true}>
        <ul>
          {props.menuItems.map((item: string, index: number) => {
            return (
              <ListItem key={index}>
                <Link href="">
                  <Icon
                    iconId={"home"}
                    width={"30"}
                    height={"30"}
                    viewBox={"0 0 20 20"}
                  />
                  {item}
                </Link>
              </ListItem>
            );
          })}
        </ul>
      </MobileMenuPopUp>
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

const ListItem = styled.li``;
const Link = styled.a``;
