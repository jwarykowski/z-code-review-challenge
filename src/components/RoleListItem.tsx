import React from "react";
import styled from "styled-components";

import Text from "./Text";

interface LabelProps {
  isSelected: boolean;
}

const Label = styled.label<LabelProps>`
  align-items: center;
  background-color: ${(props) => (props.isSelected ? `#e8f2fb` : `#ffffff`)};
  border-radius: 1rem;
  display: flex;
  flex-grow: 1;
  margin-bottom: 1rem;
  padding: 0rem 2rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const RadioInput = styled.input`
  height: 2rem;
  margin: 0 1.5rem 0 0;
  width: 2rem;
`;

interface RoleListItemProps {
  label: string;
  isSelected: boolean;
  handleOnChange: () => void;
}

export function RoleListItem(props: RoleListItemProps) {
  const { label, isSelected, handleOnChange } = props;

  return (
    <Label isSelected={isSelected} htmlFor={label}>
      <RadioInput
        data-testid={label}
        checked={isSelected}
        id={label}
        onChange={handleOnChange}
        name="role"
        type="radio"
      />
      <Text>{label}</Text>
    </Label>
  );
}

export default RoleListItem;
