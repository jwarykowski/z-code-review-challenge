import { useState } from "react";
import styled from "styled-components";

import RoleList from "./components/RoleList";
import { ZellerRoles } from "./types";
import { ZELLER_ADMIN } from "./constants";

const HorizontalRule = styled.hr`
  border-top: 1px solid #e2e8f0;
`;

const Main = styled.main`
  padding: 2rem;
`;

function App() {
  const [role, setRole] = useState<ZellerRoles>(ZELLER_ADMIN);

  return (
    <Main>
      <RoleList role={role} setRole={setRole} />
      <HorizontalRule />
      <HorizontalRule />
    </Main>
  );
}

export default App;
