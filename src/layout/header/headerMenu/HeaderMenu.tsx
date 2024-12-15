import styled from "styled-components";
import { Icon } from "../../../components/Icon";
import { thems } from "../../../styles/Thems";

export const HeaderMenu = () => {
  return (
    <StyledHeaderMenu>
      <HeaderMenuList>
        <HeaderMenuItem>
          <HeaderMenuLink href="">
            <Icon
              width={"30"}
              height={"30"}
              viewBox={"0 0 18 18"}
              iconId={"home"}
            />
          </HeaderMenuLink>
        </HeaderMenuItem>
        <HeaderMenuItem>
          <HeaderMenuLink href="">
            <Icon
              width={"30"}
              height={"30"}
              viewBox={"0 0 18 18"}
              iconId={"service"}
            />
          </HeaderMenuLink>
        </HeaderMenuItem>
        <HeaderMenuItem>
          <HeaderMenuLink href="">
            <Icon
              width={"30"}
              height={"30"}
              viewBox={"0 0 18 18"}
              iconId={"works"}
            />
          </HeaderMenuLink>
        </HeaderMenuItem>
        <HeaderMenuItem>
          <HeaderMenuLink href="">
            <Icon
              width={"30"}
              height={"30"}
              viewBox={"0 0 18 18"}
              iconId={"message"}
            />
          </HeaderMenuLink>
        </HeaderMenuItem>
        <HeaderMenuItem>
          <HeaderMenuLink href="">
            <Icon
              width={"30"}
              height={"30"}
              viewBox={"0 0 18 18"}
              iconId={"contact"}
            />
          </HeaderMenuLink>
        </HeaderMenuItem>
        <HeaderMenuItem>
          <HeaderMenuLink href="">
            <Icon
              width={"30"}
              height={"30"}
              viewBox={"0 0 18 18"}
              iconId={"location"}
            />
          </HeaderMenuLink>
        </HeaderMenuItem>
      </HeaderMenuList>
    </StyledHeaderMenu>
  );
};

const StyledHeaderMenu = styled.nav`
`;

const HeaderMenuList = styled.ul``;

const HeaderMenuItem = styled.li`
  display: flex;
  gap: 10px;
  margin: 23px 0;
`;

const HeaderMenuLink = styled.a`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;

  width: 60px;
  height: 60px;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${thems.colors.accent};
  }
`;
