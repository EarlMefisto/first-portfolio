import styled from "styled-components";
import { thems } from "../../../../styles/Thems";
import { Icon } from "../../../../components/icon/Icon";

type PostPropsType = {
  src: string;
  href?: string;
};

export const MyWorksPost = (props: PostPropsType) => {
  return (
    <PostWrapper>
      <PostButton>
        <PostLink>
          <Icon iconId={"plus"} width={"50px"} height={"50px"} />
          <PostImage src={props.src} alt="" />
        </PostLink>
      </PostButton>
    </PostWrapper>
  );
};

const PostWrapper = styled.div`
  position: relative;

  max-width: 310px;
  width: 100%;

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

  &:hover {
    &::before {
      opacity: 1;
    }
  }

  @media ${thems.media.laptop} {
    max-width: 100%;

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

const PostButton = styled.button``;

const PostLink = styled.a``;
