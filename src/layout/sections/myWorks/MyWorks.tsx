import styled from "styled-components";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitile";
import { SectionText } from "../../../components/SectionText";
import { MyWorksPost } from "./myWorksPost/MyWorksPost";
import { TabMenu } from "./tabMenu/TabMenu";
import { thems } from "../../../styles/Thems";

import postImage1 from "../../../assets/img/0cbd17e4381497547009ce81acc4eee3.webp";
import postImage2 from "../../../assets/img/Alcohol_use-main.webp";
import postImage3 from "../../../assets/img/photo_2024-11-27_16-55-32.webp";

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
        <FlexWrapper wrap={"wrap"} justify={"space-between"} gap={"20px"}>
          <MyWorksList>
            <MyWorksItem>
              <MyWorksLink href={"https://earlmefisto.github.io/desert/"}>
                <MyWorksPost src={postImage1} />
              </MyWorksLink>
            </MyWorksItem>
          </MyWorksList>
          <MyWorksList>
            <MyWorksItem>
              <MyWorksLink>
                <MyWorksPost src={postImage2} />
              </MyWorksLink>
            </MyWorksItem>
          </MyWorksList>
          <MyWorksList>
            <MyWorksItem>
              <MyWorksLink></MyWorksLink>
              <MyWorksPost src={postImage3} />
            </MyWorksItem>
          </MyWorksList>
        </FlexWrapper>
      </Container>
    </StyledMyWorks>
  );
};

const StyledMyWorks = styled.section`
  @media ${thems.media.laptop} {
    padding: 0 20px;

    ${FlexWrapper} {
      justify-content: center;
    }
  }
`;
const MyWorksList = styled.ul``;

const MyWorksItem = styled.li``;

const MyWorksLink = styled.a``;
