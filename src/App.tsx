import React from "react";
import "./App.css";

import Header from "./components/header";
import CompanySelect from "./components/common/CompanySelect";
import SizeSelect from "./components/common/SizeSelct";
// import Button from "./components/common/Button";
import styled from "styled-components";

const Layout = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
const Center = styled.div`
  display: flex;
  justify-content: center;
`;
function App() {
  return (
    <div>
      <Header />

      <Center>
        <Layout>
          <CompanySelect />
          <SizeSelect></SizeSelect>
        </Layout>
      </Center>
    </div>
  );
}

export default App;
