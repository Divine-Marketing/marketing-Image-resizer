import React, { useState } from "react";
import "./App.css";

import Header from "./components/header";
import CompanySelect from "./components/common/CompanySelect";
import SizeSelect from "./components/common/SizeSelct";
import ImageThings from "./components/Image";
import Upload from "./components/Upload";
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
  const [fileData, setFileData] = useState([]);

  const companyDataCallback = (data: any) => {
    setCompanyData(data);
  };
  const imageDataCallback = (data: any) => {
    setImageSizeData(data);
  };
  const fileCallback = (data: any) => {
    setFileData(data);
  };
  return (
    <div>
      <Header />

      <Center>
        <Layout>
          <Upload fileCallback={fileCallback} />
          <CompanySelect companyCallback={companyDataCallback} />
          <SizeSelect imageCallback={imageDataCallback} />
          <ImageThings
            file={fileData}
            companyData={companyData}
            imageSizeData={imageSizeData}
          />
        </Layout>
      </Center>
    </div>
  );
}

export default App;
