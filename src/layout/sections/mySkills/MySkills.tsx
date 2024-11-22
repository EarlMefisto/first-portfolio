import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitile";
import { SectionText } from "../../../components/SectionText";
import { Container } from "../../../components/Container";
import { Skills } from "./Skills/PropsSkills";

export const MySkills = () => {
  return (
    <StyledMySkills>
      <Container>
        <SectionTitle>My Skills</SectionTitle>
        <SectionText>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. lorem ipsum
        </SectionText>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, auto)",
            gap: "10px",
          }}
        >
          <Skills
            iconId={"iconJS"}
            viewBox={"0 0 24 24"}
            title={"Java Script"}
            description={"Amet minim mollit"}
          />
          <Skills
            iconId={"iconHtml"}
            viewBox={"0 0 15 15"}
            title={"HTML"}
            description={"Amet minim mollit"}
          />
          <Skills
            iconId={"iconCss"}
            viewBox={"0 0 15 15"}
            title={"CSS"}
            description={"Amet minim mollit"}
          />
          <Skills
            iconId={"iconGit"}
            viewBox={"0 0 512 300"}
            title={"Git / GitHub"}
            description={"Amet minim mollit"}
          />
          <Skills
            iconId={"iconReact"}
            viewBox={"0 0 32 32"}
            title={"React"}
            description={"Amet minim mollit"}
          />
          <Skills
            iconId={"iconReact"}
            viewBox={"0 0 32 32"}
            title={"React"}
            description={"Amet minim mollit"}
          />
        </div>
      </Container>
    </StyledMySkills>
  );
};

const StyledMySkills = styled.section``;
