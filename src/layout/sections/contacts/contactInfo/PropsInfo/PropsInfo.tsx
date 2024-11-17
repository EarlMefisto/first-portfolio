import React from "react";
import styled from "styled-components";
import { Icon } from "../../../../../components/icon/Icon";

type InfoPropsType = {
  iconId?: string;
  description: string;
};

export const Info = (props: InfoPropsType) => {
  return (
    <StyledInfo>
      <Icon iconId={props.iconId || "non"} />
      <StyledInfoText>{props.description}</StyledInfoText>
    </StyledInfo>
  );
};

const StyledInfo = styled.div`
  background-color: white;
`;

const StyledInfoText = styled.div``;
