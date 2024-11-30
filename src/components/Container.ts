import styled from "styled-components";
import { thems } from "../styles/Thems";

export const Container = styled.div`
  max-width: 970px;
  margin: 0 auto;

  @media ${thems.media.mobile} {
    max-width: 345px;
  }
`;