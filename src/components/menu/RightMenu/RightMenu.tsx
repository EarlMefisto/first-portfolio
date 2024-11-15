import React from "react";
import styled from "styled-components";
import { Menu } from "../Menu";

const Items = ["Home", "Service", "CV", "Portfolio", "Blog", "Contact"];

export const RightMenu = () => {
  return (
    <StyledRightMenu>
      <Menu menuItems={Items} />
    </StyledRightMenu>
  );
};

const StyledRightMenu = styled.nav``;
