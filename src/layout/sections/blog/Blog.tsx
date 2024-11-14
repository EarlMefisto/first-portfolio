import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitile";
import { RightMenu } from "../../../components/menu/RightMenu/RightMenu";

const BlogItems = ["All categories", "", "", "", ""];

export const Blog = () => {
    return (
        <StyledBlog>
            <SectionTitle></SectionTitle>
            
        </StyledBlog>
    )
}

const StyledBlog = styled.section`
    min-height: 100vh;
`