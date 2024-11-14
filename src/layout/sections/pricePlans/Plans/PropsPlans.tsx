import React from "react";
import styled from "styled-components";

type PlansPropsType = {
  title: string;
  description: string;
  price?: number;
  currency: string;
};

export const Plans = (props: PlansPropsType) => {
  return (
    <StyledPlans>
      <PlansTitile>{props.title}</PlansTitile>
      <PlansPrice>
        {props.currency} {props.price || 0.0}
      </PlansPrice>
      <PlansText>
        {props.description ||
          "For most businesses that want to optimize web queries"}
      </PlansText>
    </StyledPlans>
  );
};

const StyledPlans = styled.div`
  width: 35%;
  margin: 0 10px 15px;

  background-color: white;
  text-align: center;
`;
const PlansTitile = styled.h3``;
const PlansPrice = styled.h2``;
const PlansText = styled.p``;
