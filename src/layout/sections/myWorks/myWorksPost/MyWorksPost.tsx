import styled from "styled-components";

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
  text-align: center;

  position: relative;

  &:hover {
    &::before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;

      background: rgba(0, 110, 255, 0.3);
      backdrop-filter: blur(5px);
    }
  }
`;

const PostImage = styled.img`
  width: 100%;
  height: 300px;

  object-fit: cover;
`;
