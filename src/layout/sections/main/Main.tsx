import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { Button } from "../../../components/Button";
import { thems } from "../../../styles/Thems";

import photo from "../../../assets/img/photo_2024-10-28_22-37-35.webp";


export const Main = () => {
  return (
    <GlobalStyledMain>
      <Container>
        <FlexWrapper justify={"space-around"} align={"center"} wrap={"wrap"}>
          <StyledMain>
            <StyledTitles>
              <StyledMainTitleH2>
                I’m <span>Iryna Lebedeva</span>
              </StyledMainTitleH2>
              <StyledMainTitleH1>
                And I <span>Front-end</span> Developer
              </StyledMainTitleH1>
            </StyledTitles>
            <StyledMainText>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit. lorem
              ipsum
            </StyledMainText>
            <ButtonWrapper>
              <Button>More about me</Button>
            </ButtonWrapper>
          </StyledMain>
          <PhotoWrapper>
            <Photo src={photo} alt="My photo" />
          </PhotoWrapper>
        </FlexWrapper>
      </Container>
    </GlobalStyledMain>
  );
};

const GlobalStyledMain = styled.div`
  margin-bottom: 100px;

  @media ${thems.media.tablet} {
    margin-bottom: 87px;
  }
`;

const StyledMain = styled.div`
  background-color: ${thems.colors.secondaryBg};
`;

const StyledTitles = styled.div`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 32px;
  color: ${thems.colors.title};

  span {
    color: ${thems.colors.accent};
  }
`;

const StyledMainTitleH2 = styled.h2`
  margin: 93px 0 0 60px;

  line-height: 124%;

  @media ${thems.media.tablet} {
    margin: 100px 0 0 20px;
  }
`;

const StyledMainTitleH1 = styled.h1`
  max-width: 500px;
  margin: 0 0 0 60px;

  line-height: 124%;

  @media ${thems.media.tablet} {
    margin: 0 0 0 20px;
  }
`;

const StyledMainText = styled.p`
  display: block;
  max-width: 435px;
  margin: 18px 0 0 60px;

  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 150%;
  text-transform: capitalize;

  @media ${thems.media.mobile} {
    max-width: 281px;
    margin: 90px 0 0 32px;

    font-size: 16px;
  }
`;

const PhotoWrapper = styled.div`
  margin: 40px;

  position: relative;
  z-index: 0;

  &::before {
    content: "";
    width: 340px;
    height: 485px;
    border: 4px solid ${thems.colors.title};

    position: absolute;
    top: -20px;
    left: 20px;
    z-index: -1;

    @media ${thems.media.tablet} {
      width: 0;
      height: 0;

      border: none;
    }
  }
`;

const Photo = styled.img`
  width: 325px;
  height: 450px;
  object-fit: cover;

  @media ${thems.media.mobile} {
    width: 325px;
    height: 450px;
  }
`;

const ButtonWrapper = styled.div`
  margin: 25px 0 74px 60px;

  @media ${thems.media.mobile} {
    margin: 35px 0 50px 35px;

    button {
      height: 50px;
    }
  }
`;
