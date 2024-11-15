import React from "react";
import styled from "styled-components";
import { SectionText } from "../../../../components/SectionText";

type BlogPostPropsType = {
  title: string;
  text: string;
  src: string;
  link: string;
};

export const BlogPost = (props: BlogPostPropsType) => {
  return (
    <StyledBlogPost>
      <PostImage src={props.src} alt="" />
      <PostTitle>{props.title}</PostTitle>
      <SectionText>
        {props.text}Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Vitae nulla diam in ac dictum a urna
      </SectionText>
      <PostLink>{props.link}Learn More</PostLink>
    </StyledBlogPost>
  );
};

const StyledBlogPost = styled.div`
  background-color: #ffffff;
  max-width: 310px;
  width: 100%;

  margin: 0 20px 0 0;
`;

const PostImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const PostTitle = styled.h3`
font-family: var(--font-family);
font-weight: 500;
font-size: 18px;
line-height: 124%;
text-transform: capitalize;
`;

const PostLink = styled.a`
color: #FFB400;
`;
