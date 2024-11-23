import React from "react";
import styled from "styled-components";
import { Icon } from "../../../../../components/icon/Icon";
import { thems } from "../../../../../styles/Thems";

type InfoPropsType = {
  iconId?: string;
  description: string;
};

export const Info = (props: InfoPropsType) => {
  return (
    <StyledInfo>
      <Icon iconId={props.iconId || "none"}/>
      <StyledInfoText>{props.description}</StyledInfoText>
    </StyledInfo>
  );
};

const StyledInfo = styled.div`
background-color: ${thems.colors.secondaryBg};

margin-bottom: 18px;
`;

const StyledInfoText = styled.div``;
