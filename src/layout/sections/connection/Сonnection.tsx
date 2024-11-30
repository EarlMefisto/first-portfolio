import styled from "styled-components";
import { LeaveMessage } from "./leaveMessage/LeaveMessage";
import { WorksContacts } from "./worksContacts/WorksContacts";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Connection = () => {
  return (
    <StyledConnection>
      <Container>
        <FlexWrapper justify={"center"} gap={"30px"}>
          <LeaveMessage />
          <WorksContacts />
        </FlexWrapper>
      </Container>
    </StyledConnection>
  );
};

const StyledConnection = styled.section``;
