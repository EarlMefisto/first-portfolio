import React from "react";
import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";

type ServicePropsType = {
  iconId?: string;
  title: string;
  description: string;
};

export const Service = (props: ServicePropsType) => {
  return (
    <StyledService>
      <Icon iconId={props.iconId || "non"} />
      <ServiceTitile>{props.title}</ServiceTitile>
      <ServiceText>{props.description}</ServiceText>
    </StyledService>
  );
};

const StyledService = styled.div`
width: 30%;
margin: 0 21px 0 0;

background-color: white;
text-align: center;
`;
const ServiceTitile = styled.h3``;
const ServiceText = styled.p``;
