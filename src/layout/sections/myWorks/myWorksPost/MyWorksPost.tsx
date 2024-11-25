import styled from "styled-components";
import { thems } from "../../../../styles/Thems";

type PostPropsType = {
  src: string;
};

export const MyWorksPost = (props: PostPropsType) => {
  return (
    <PostWrapper>
      <PostImage src={props.src} alt="" />
    </PostWrapper>
  );
};

const PostWrapper = styled.div`
  position: relative;

  max-width: 310px;
  min-height: 300px;

  @media ${thems.media.laptop} {
    min-width: 100%;
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

    background: rgba(0, 110, 255, 0.3);
    backdrop-filter: blur(5px);

    opacity: 0;
  }

  &:hover {
    &::before {
      opacity: 1;
    }
  }

  @media ${thems.media.laptop} {
    &::before {
      opacity: 0;
    }

    &:hover {
      &::before {
        opacity: 1;
      }
    }
  }
`;

const PostImage = styled.img`
  width: 100%;
  height: 100%;
`;
