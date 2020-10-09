import React, { useState } from "react";
import styled from "styled-components";

interface IFileProps {
  fileCallback: Function;
}

const Overview = styled.div`
  text-align: center;
  padding-bottom: 20px;
`;
const UploadInput = styled.input`
  display: inline-block;
  padding-left: 10px;
`;
const UploadButton = styled.div`
  display: inline-block;
`;
export default ({ fileCallback }: IFileProps) => {
  const [file, setFile] = useState(null);
  const handleChange = (e: any) => {
    setFile(e.target.files[0]);
  };

  fileCallback(file);
  return (
    <Overview>
      <UploadButton>Upload image: </UploadButton>
      <UploadInput onChange={handleChange} type="file" accept="image/*" />
    </Overview>
  );
};
