import { createGlobalStyle } from "styled-components";
import { thems } from "./Thems";
import { LeaveInfo } from "../layout/sections/contacts/leaveInfo/LeaveInfo";

export const GlobalStyled = createGlobalStyle`
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    
}

body {
  margin: 0;
  max-width: 100%;

  font-family: 'Inter', 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: ${thems.colors.text}
}

a {
    text-decoration: none;
}

ul {
    list-style: none;
}

button {
    background-color: unset;
    border: none;
}

section {
    padding: 35px 0;
}

section:nth-of-type(odd) {
    background-color: ${thems.colors.primaryBg};
}

section:nth-of-type(even) {
    background-color: ${thems.colors.primaryBg};
}

`;
