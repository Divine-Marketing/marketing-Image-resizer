import React, { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/header";
import CompanySelect from "./components/common/CompanySelect";
import SizeSelect from "./components/common/SizeSelct";
import ImageThings from "./components/Image";
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
  const [companyData, setCompanyData] = useState([]);
  const [imageSizeData, setImageSizeData] = useState([]);

  const companyDataCallback = (data: any) => {
    setCompanyData(data);
  };
  const imageDataCallback = (data: any) => {
    setImageSizeData(data);
  };

  return (
    <div>
      <Header />

      <Center>
        <Layout>
          <CompanySelect companyCallback={companyDataCallback} />
          <SizeSelect imageCallback={imageDataCallback} />
          <ImageThings
            companyData={companyData}
            imageSizeData={imageSizeData}
          />
        </Layout>
      </Center>
    </div>
  );
}

export default App;
