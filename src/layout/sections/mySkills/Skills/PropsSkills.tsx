import React from "react";
import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";
import { SectionText } from "../../../../components/SectionText";
import { SectionTitle } from "../../../../components/SectionTitile";
import { FlexWrapper } from "../../../../components/FlexWrapper";

type ServicePropsType = {
  iconId: string;
  title: string;
  description?: string;
  width?: string;
  height?: string;
  viewBox?: string;
};

export const Skills = (props: ServicePropsType) => {
  return (
    <StyledSkills>
      <FlexWrapper direction={"column"} align={"center"}>
        <Icon
          iconId={props.iconId || "none"}
          width={props.width || "80px"}
          height={props.height || "80px"}
          viewBox={props.viewBox || "0 0 24 24"}
        />
        <StyledSkillsTitile>{props.title}</StyledSkillsTitile>
        <SectionText>{props.description}</SectionText>
      </FlexWrapper>
    </StyledSkills>
  );
};

const StyledSkills = styled.div`
  text-align: center;
  background-color: #27395e;
`;

const StyledSkillsTitile = styled.h3`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 124%;
  text-transform: capitalize;
`;
