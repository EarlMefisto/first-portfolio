import React from "react";
import { Icon } from "../icon/Icon";
import styled from "styled-components";

export const DayMode = () => {
  return (
    <StyledDayMode>
      <Icon
        iconId={"contrast"}
        width={"30px"}
        height={"30px"}
        viewBox={"0 0 30 30"}
      />
    </StyledDayMode>
  );
};

const StyledDayMode = styled.div`
margin: 0 20px 0 20px;
`;
