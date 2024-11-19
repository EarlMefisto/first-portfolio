import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitile";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { BlogPost } from "./blogPost/BlogPost";
import { SectionText } from "../../../components/SectionText";
import blog1Img from "../../../assets/img/portfolio-image-1.webp";
import blog2Img from "../../../assets/img/portfolio-image-2.webp";
import blog3Img from "../../../assets/img/portfolio-image-3.webp";
import { Container } from "../../../components/Container";

export const Blog = () => {
  return (
    <StyledBlog>
      <Container>
        <SectionTitle>Blog</SectionTitle>
        <SectionText>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. lorem ipsum
        </SectionText>
        <FlexWrapper wrap={"wrap"} justify={"center"}>
          <BlogPost
            src={blog1Img}
            title={"How To Make Web Tempates"}
            text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna"}
            link={"Learn More"}
          />
          <BlogPost
            src={blog2Img}
            title={"Make Business Card"}
            text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna"}
            link={"Learn More"}
          />
          <BlogPost
            src={blog3Img}
            title={"How To Make Flyer Design"}
            text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna"}
            link={"Learn More"}
          />
        </FlexWrapper>
      </Container>
    </StyledBlog>
  );
};

const StyledBlog = styled.section`
`;
