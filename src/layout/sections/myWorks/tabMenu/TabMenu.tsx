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
    margin-bottom: 50px;

    gap: 37px;
  }
`;

const ListItem = styled.li`
  
`
const TabLink = styled.a`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 18px;
  text-transform: capitalize;
`;