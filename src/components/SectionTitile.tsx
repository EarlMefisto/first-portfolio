import styled from "styled-components";

type SectionTitlePropsType = {
  algin?: string;
};

export const SectionTitle = styled.h2<SectionTitlePropsType>`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 124%;
  text-transform: capitalize;
  color: #5d478b;
  text-align: ${(props) => props.algin || "center"};
`;
