import React from "react";
import styled from "styled-components";

const HeaderText = styled.h1`
  text-align: center;
`;
interface IImageProps {
  companyData: any;
  imageSizeData: any;
}
export default ({ companyData, imageSizeData }: IImageProps) => {
  console.log(companyData);
  console.log(imageSizeData);
  return (
    <HeaderText>
      <div></div>
    </HeaderText>
  );
};
