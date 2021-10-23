import React from "react";

import RoleListItem from "./RoleListItem";
import Section from "./Section";
import Title from "./Title";

import { ZellerRoles } from "../types";
import { ZELLER_ADMIN, ZELLER_MANAGER } from "../constants";

interface RoleListProps {
  role: string;
  setRole: (role: ZellerRoles) => void;
}

export function RoleList(props: RoleListProps) {
  const { role, setRole } = props;

  return (
    <Section>
      <Title>User Types</Title>
      <RoleListItem
        handleOnChange={() => setRole(ZELLER_ADMIN)}
        isSelected={role === ZELLER_ADMIN}
        label="Admin"
      />
      <RoleListItem
        handleOnChange={() => setRole(ZELLER_MANAGER)}
        isSelected={role === ZELLER_MANAGER}
        label="Manager"
      />
    </Section>
  );
}

export default RoleList;
