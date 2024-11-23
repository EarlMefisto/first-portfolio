import styled from "styled-components";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitile";
import { SectionText } from "../../../components/SectionText";
import { MyWorksPost } from "./myWorksPost/MyWorksPost";
import { TabMenu } from "./tabMenu/TabMenu";

import postImage1 from "../../../assets/img/0cbd17e4381497547009ce81acc4eee3.webp";

const WorksItems = ["All", "Layout", "App", "Project"];

export const MyWorks = () => {
  return (
    <StyledMyWorks>
      <Container>
        <SectionTitle>My Works</SectionTitle>
        <SectionText>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. lorem ipsum
        </SectionText>
        <FlexWrapper justify={"center"}>
          <TabMenu menuItems={WorksItems} />
        </FlexWrapper>
        <StyledMyWorksPost
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, auto)",
            gap: "20px",
          }}
        >
          <MyWorksPost src={postImage1} />
          <MyWorksPost src={postImage1} />
        </StyledMyWorksPost>
      </Container>
    </StyledMyWorks>
  );
};

const StyledMyWorks = styled.section``;
const StyledMyWorksPost = styled.div``;
