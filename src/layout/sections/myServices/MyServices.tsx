import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/flexWrapper";
import { SectionTitle } from "../../../components/SectionTitile";
import { Service } from "./Service/PropsService";

export const MyServices = () => {
  return (
    <StyledMyServices>
      <SectionTitle>My Services</SectionTitle>
      <SectionText>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </SectionText>{/* сделать все первые буквы капсом! */}
      <FlexWrapper wrap={"wrap"} justify={"space-between"}>
        <Service
          iconId={"coding"}
          title={"Web Development"}
          description={"Blog, E-commerce"}
        />
        <Service
          iconId={"illustration"}
          title={"UI/UX Design"}
          description={"Mobile app, Website Design"}
        />
        <Service
          iconId={"microphone"}
          title={"Sound Design"}
          description={"Voice Over, Beat Making"}
        />
        <Service
          iconId={"gameDevelopment"}
          title={"Game Design"}
          description={"Character Design, Props & Objects"}
        />
        <Service
          iconId={"photographer"}
          title={"Photography"}
          description={"Portrait, Product Photography"}
        />
        <Service
          title={"Advertising"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi."
          } // сделать все первые буквы капсом!
        />
      </FlexWrapper>
    </StyledMyServices>
  );
};

const StyledMyServices = styled.section`
  background-color: #f5f5f5;
  min-height: 100vh;
`;
const SectionText = styled.p`
  text-align: center;
`;
