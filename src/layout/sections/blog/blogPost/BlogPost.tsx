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
      <PostText>{props.text}</PostText>
      <PostLink>{props.link}</PostLink>
    </StyledBlogPost>
  );
};

const StyledBlogPost = styled.div`
  background-color: white;
  max-width: 310px;
  width: 100%;
`;

const PostImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const PostTitle = styled.h3`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 124%;
  text-transform: capitalize;
  color: #2b2b2b;
`;

const PostText = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 160%;
  text-transform: capitalize;
  color: #767676;
`;

const PostLink = styled.a`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 124%;
  text-transform: capitalize;
  color: #ffb400;
`;
