import styled from "styled-components";
import { LeaveMessage } from "./leaveMessage/LeaveMessage";
import { WorksContacts } from "./worksContacts/WorksContacts";
import { Container } from "../../../components/Container";



export const Connection = () => {
  return (
    <StyledConnection>
      <Container>
        <LeaveMessage />
        <WorksContacts />
      </Container>
    </StyledConnection>
  );
};

const StyledConnection = styled.section``;
