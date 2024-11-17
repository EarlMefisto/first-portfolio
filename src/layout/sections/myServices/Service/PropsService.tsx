import React from "react";
import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";
import { SectionText } from "../../../../components/SectionText";
import { SectionTitle } from "../../../../components/SectionTitile";

type ServicePropsType = {
  iconId?: string;
  title: string;
  description: string;
};

export const Service = (props: ServicePropsType) => {
  return (
    <StyledService>
      <Icon iconId={props.iconId || "non"} width={"68px"} height={"68px"} viewBox={"0 0 68px 68px"}/>
      <SectionTitle>{props.title}</SectionTitle>
      <SectionText>{props.description}</SectionText>
    </StyledService>
  );
};

const StyledService = styled.div`
width: 30%;
margin: 0 21px 0 0;

background-color: white;
text-align: center;
`;
