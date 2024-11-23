import styled from "styled-components";
import { Icon } from "../../../components/icon/Icon";

export const HeaderMenu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledHeaderMenu>
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
    </StyledHeaderMenu>
  );
};

const StyledHeaderMenu = styled.nav`
  ul {
    display: flex;
    flex-direction: column;
    gap: 43px;
  }
`;

const ListItem = styled.li``;
const Link = styled.a``;
