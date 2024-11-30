import styled from "styled-components";
import { Icon } from "../../../../components/Icon";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { thems } from "../../../../styles/Thems";

type ServicePropsType = {
  iconId?: string;
  title?: string;
  description?: string;
  width?: string;
  height?: string;
  viewBox?: string;
  fill?: string;
};

export const Skills = (props: ServicePropsType) => {
  return (
    <StyledSkills>
      <FlexWrapper direction={"column"} align={"center"}>
        <IconWrapper>
          <Icon
            iconId={props.iconId || "none"}
            width={props.width || "80px"}
            height={props.height || "80px"}
            viewBox={props.viewBox || "0 0 24 24"}
          />
        </IconWrapper>
        <StyledSkillsTitile>{props.title}</StyledSkillsTitile>
      </FlexWrapper>
    </StyledSkills>
  );
};

const StyledSkills = styled.div`
  width: 310px;
  min-height: 225px;

  background-color: ${thems.colors.secondaryBg};

  @media ${thems.media.laptop} {
    flex-shrink: 1;
    flex-grow: 1;
  }

  @media ${thems.media.mobile} {
    width: 297px;
  }
`;

const IconWrapper = styled.div`
  margin-top: 28px;
`;

const StyledSkillsTitile = styled.h3`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 124%;
  text-transform: capitalize;
  color: ${thems.colors.text};

  margin: 26px 0 15px;
`;
