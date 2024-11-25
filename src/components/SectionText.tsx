import styled from "styled-components";
import { thems } from "../styles/Thems";

export const SectionText = styled.p`
  max-width: 438px;
  margin: 0 auto;
  margin-top: 25px;
  margin-bottom: 50px;

  text-align: center;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 160%;
  text-transform: capitalize;

  @media ${thems.media.mobile} {
    max-width: 345px;
    margin: 0 auto;
    margin: 25px 15px 25px;
  }
`;
