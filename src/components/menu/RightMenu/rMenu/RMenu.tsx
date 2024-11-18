import React from "react";
import styled from "styled-components";

export const RIghtMenuMenu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledRightMenuMenu>
      <ul>
        {props.menuItems.map((item: string, index: number) => {
          return (
            <li key={index}>
              <a href="">{item}</a>
            </li>
          );
        })}
      </ul>
    </StyledRightMenuMenu>
  );
};

const StyledRightMenuMenu = styled.nav``;

// const StyledRightMenu = styled.nav`
//   ul {
//     gap: 30px;
//   }
// `;
