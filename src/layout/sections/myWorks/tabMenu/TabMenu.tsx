import styled from "styled-components";

export const TabMenu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledTabMenu>
      <ul>
        {props.menuItems.map((item: string, index: number) => {
          return (
            <ListItem key={index}>
              <TabLink href="">{item}</TabLink>
            </ListItem>
          );
        })}
      </ul>
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

    border: 1px solid red;
  }
`;

const ListItem = styled.li``;
const TabLink = styled.a`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 18px;
  text-transform: capitalize;
`;
