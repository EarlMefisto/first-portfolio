import React from "react";
import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";


type InfoPropsType = {
  iconId?: string;
  text?: string;
};

export const ContactsInfo = (props: InfoPropsType) => {
  return (
    <StyledInfo>
      <ContactsWrapper>
        <Icon iconId={props.iconId || "none"} />
        <ContactsText>{props.text}</ContactsText>
      </ContactsWrapper>
    </StyledInfo>
  );
};

const StyledInfo = styled.div`
  

  margin-bottom: 18px;
`;

const ContactsText = styled.div``;

const ContactsWrapper = styled.div``;
