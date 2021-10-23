import { useState, useEffect } from "react";
import styled from "styled-components";

import { Text } from "./Text";

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
`;

const Initial = styled.div`
  display: flex;
  align-items: center;
  background-color: #e8f2fb;
  border-radius: 0.5rem;
  margin: 0 1.5rem 0 0;
  width: 3.5rem;
  height: 3.5rem;
`;

const InitialText = styled(Text)`
  color: #005cc8;
  flex-grow: 1;
  margin: 0;
  text-align: center;
`;

const NameText = styled(Text)`
  flex-grow: 1;
  margin: 0;
`;

const Row = styled.div`
  display: flex;
  flex-direction: "row";
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

interface CustomerListItemProps {
  name?: string;
  role: string;
}

export function CustomerListItem(props: CustomerListItemProps) {
  const { name, role } = props;

  const [user_click_count, set_user_click_count] = useState(0);

  useEffect(() => {
    // NOTE: sends data to analytics
    sendDataToAnalytics({ name, role, user_click_count });
  }, []);

  const initial = name.charAt(0).toUpperCase();

  return (
    <Row>
      <Initial>
        <InitialText>{initial}</InitialText>
      </Initial>
      <Column onClick={() => set_user_click_count(user_click_count + 1)}>
        <NameText>{name}</NameText>
      </Column>
    </Row>
  );
}

const sendDataToAnalytics = (data) => {
  // TODO: implementation to be completed
};

export default CustomerListItem;
