import React from "react";
import styled from "styled-components";
import { Icon } from "../../../../../components/icon/Icon";

type InfoPropsType = {
  iconId?: string;
  description: string;
  direction?: string;
  justify?: string;
};

export const Info = (props: InfoPropsType) => {
  return (
    <StyledInfo>
      <Icon iconId={props.iconId || "none"} flex-direction={props.direction} justify-content={props.justify}/>
      <StyledInfoText>{props.description}</StyledInfoText>
    </StyledInfo>
  );
};

const StyledInfo = styled.div`
background-color: #151f34;

margin-bottom: 18px;
`;

const StyledInfoText = styled.div``;
