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
      <Icon
        iconId={props.iconId || "none"}
        width={"68px"}
        height={"68px"}
        viewBox={"0 0 68px 68px"}
        
      />
      <StyledServisTitile>{props.title}</StyledServisTitile>
      <SectionText>{props.description}</SectionText>
    </StyledService>
  );
};

const StyledService = styled.div`
  max-width: 310px;
  width: 30%;
  height: 225px;
  margin: 0 21px 0 0;

  text-align: center;
  background-color: white;
`;

const StyledServisTitile = styled.h3`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 124%;
  text-transform: capitalize;
  color: #2b2b2b;
`;
