import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../../components/SectionTitile";
import { SectionText } from "../../../../components/SectionText";

type PlansPropsType = {
  title: string;
  description: string;
  price?: number;
  currency: string;
};

export const Plans = (props: PlansPropsType) => {
  return (
    <StyledPlans>
      <SectionTitle>{props.title}</SectionTitle>
      <PlansPrice>
        {props.currency} {props.price || 0.0}
      </PlansPrice>
      <SectionText>
        {props.description ||
          "For most businesses that want to optimize web queries"}
      </SectionText>
    </StyledPlans>
  );
};

const StyledPlans = styled.div`
  width: 35%;
  margin: 0 10px 15px;

  background-color: white;
  text-align: center;
`;

const PlansPrice = styled.h2``;
