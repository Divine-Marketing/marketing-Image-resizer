import React from "react";
import styled from "styled-components";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import "./button.css";

const animatedComponents = makeAnimated();

interface ISizeProps {
  name?: string;
}

const Overview = styled.div``;

const SizeSelectStyle = styled.div`
  width: 300px;
  padding: 20px;
`;
const Text = styled.div`
  font-weigth: bold;
  font-size: 20px;
  padding-bottom: 10px;
`;
const sizeOptions = [
  { value: "Profile", label: "Profile" },
  { value: "Post", label: "Post" },
  { value: "Blog", label: "Blog" },
  { value: "Example", label: "Example" },
];

export default ({ name }: ISizeProps) => {
  return (
    <Overview>
      <SizeSelectStyle>
        <Text>Pick your image size(s)</Text>
        <Select
          closeMenuOnSelect={false}
          components={animatedComponents}
          isMulti
          options={sizeOptions}
        />
      </SizeSelectStyle>
    </Overview>
  );
};
