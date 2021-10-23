import { useQuery } from "@apollo/client";
import styled from "styled-components";
import moment from "moment";

import CustomerListItem from "./CustomerListItem";
import Section from "./Section";
import Text from "./Text";
import Title from "./Title";

import { ListZellerCustomersData } from "../types";
import { LIST_ZELLER_CUSTOMERS } from "../graphql/queries";

const ErrorText = styled(Text)`
  color: red;
  font-size: 1.2em;
`;

const LoadingText = styled(Text)`
  color: #adadac;
  font-size: 1.2em;
`;

interface TypeProps {
  role?: string;
  phone: number;
}

export function CustomerList(props: TypeProps) {
  const { role } = props;

  const { loading, error, data } = useQuery<ListZellerCustomersData>(
    LIST_ZELLER_CUSTOMERS
  );

  const customers = data.listZellerCustomers.items || [];
  const customersByRole = customers.filter(
    (customer: any) => customer.role == role
  );
  const title = `${role} Users`;

  if (loading) {
    return (
      <Section>
        <Title>{title}</Title>
        <LoadingText>Loading users...</LoadingText>
      </Section>
    );
  }

  return (
    <Section>
      <Title>{title}</Title>
      {customersByRole.map((customer) => (
        <CustomerListItem name={customer.name} role={customer.role} />
      ))}
    </Section>
  );
}

export default CustomerList;
