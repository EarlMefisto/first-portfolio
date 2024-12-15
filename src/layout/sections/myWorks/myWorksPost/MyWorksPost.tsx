import styled from "styled-components";
import { thems } from "../../../../styles/Thems";
import { Button } from "../../../../components/Button";

type PostPropsType = {
  src: string;
  href?: string;
};

export const MyWorksPost = (props: PostPropsType) => {
  return (
    <PostWrapper>
      <PostImage src={props.src} alt="" />
      <Button>push me</Button>
    </PostWrapper>
  );
};

const PostWrapper = styled.div`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

    background: rgba(0, 110, 255, 0.3);
    backdrop-filter: blur(5px);
    transition: 400ms;

    cursor: pointer;

    opacity: 0;
  }

  ${Button} {
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  &:hover {
    ${Button} {
      opacity: 1;
      transition: 400ms;
    }
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
  max-width: 310px;
  min-height: 310px;
  object-fit: cover;

  @media ${thems.media.laptop} {
    width: 100%;
    object-fit: cover;
  }
`;
