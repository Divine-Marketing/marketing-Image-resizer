import React, { useState } from "react";
import styled from "styled-components";
import Resizer from "react-image-file-resizer";

const facebookSizes: { [key: string]: any } = {
  facebook: {
    EventImage: { width: 1920, height: 1080 },
    ProfilePhoto: { width: 1920, height: 1080 },
    CoverPhoto: { width: 1920, height: 1080 },
  },
};

const Overview = styled.div`
  padding-bottom: 20px;
`;
interface IImageProps {
  companyData: any;
  imageSizeData: any;
  file: any;
}

export default ({ companyData, file, imageSizeData }: IImageProps) => {
  const [im, setIm] = useState([]);
  function createImage(event: string, company: string) {
    let selectedWidth = facebookSizes[company][event].width;
    let selectedHeight = facebookSizes[company][event].height;

    return [selectedWidth, selectedHeight];
  }

  function sizeImage(
    imageType: string,
    imageFile: any,
    height: any,
    width: any
  ) {
    Resizer.imageFileResizer(
      imageFile,
      height,
      width,
      "JPEG",
      100,
      0,
      (uri: any) => {
        setIm(uri);
      },
      "base64"
    );
  }

  for (const { value: company } of companyData) {
    for (const { value: imageType } of imageSizeData) {
      console.log(createImage(imageType, company));
      const [width, height] = createImage(imageType, company);
      sizeImage(imageType, file, height, width);
      console.log(im);
    }
  }

  return <Overview></Overview>;
};
