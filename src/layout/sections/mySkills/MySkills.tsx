import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitile";
import { SectionText } from "../../../components/SectionText";
import { Container } from "../../../components/Container";
import { Skills } from "./Skills/Skills";
import { thems } from "../../../styles/Thems";

export const MySkills = () => {
  return (
    <StyledMySkills>
      <Container>
        <SectionTitle>My Skills</SectionTitle>
        <SectionText>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. lorem ipsum
        </SectionText>
        <FlexWrapper wrap={"wrap"} justify={"space-between"} gap={"20px"}>
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
            viewBox={"0 0 512 30"}
            title={"Git / GitHub"}
            description={"Amet minim mollit"}
          />
          <Skills
            iconId={"iconReact"}
            viewBox={"0 0 32 32"}
            title={"React"}
            description={"Amet minim mollit"}
          />
          <Skills title={"and other..."} description={"Amet minim mollit"} />
        </FlexWrapper>
      </Container>
    </StyledMySkills>
  );
};

const StyledMySkills = styled.section`
  margin-bottom: 70px;

  @media ${thems.media.laptop} {
    padding: 0 10px;
  }
`;
