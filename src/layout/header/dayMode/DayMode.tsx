import { Icon } from "../../../components/Icon";
import styled from "styled-components";
import { thems } from "../../../styles/Thems";

export const DayMode = () => {
  return (
    <StyledDayMode>
      <Icon
        iconId={"contrast"}
        width={"30"}
        height={"30"}
        viewBox={"0 0 30 30"}
      />
      <DayModeButton />
    </StyledDayMode>
  );
};

const StyledDayMode = styled.div`
  margin-top: 25px;

  cursor: pointer;

  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;

  width: 60px;
  height: 60px;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${thems.colors.accent};
  }
`;

const DayModeButton = styled.button``;
