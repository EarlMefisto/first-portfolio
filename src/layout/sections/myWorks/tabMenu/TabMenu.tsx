import styled from "styled-components";


export const TabMenu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledTabMenu>
      <TabMenuList>
        {props.menuItems.map((item: string, index: number) => {
          return (
            <TabMenuItem key={index}>
              <TabMenuLink href="">{item}</TabMenuLink>
            </TabMenuItem>
          );
        })}
      </TabMenuList>
      
    </StyledTabMenu>
  );
};

const StyledTabMenu = styled.nav`
  ul {
    display: flex;
    justify-content: space-between;
    gap: 37px;

    max-width: 606px;
    width: 100%;

    margin-top: 25px;
    margin-bottom: 50px;
  }
`;

const TabMenuList = styled.ul``

const TabMenuItem = styled.li``;

const TabMenuLink = styled.a`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 18px;
  text-transform: capitalize;
`;
