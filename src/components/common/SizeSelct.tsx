import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import "./button.css";

const animatedComponents = makeAnimated();

interface ISizeProps {
  imageCallback: Function;
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
  { value: "EventImage", label: "Event Image" },
  { value: "ProfilePhoto", label: "Profile Photo" },
  { value: "CoverPhoto", label: "CoverPhoto" },
];

export default ({ imageCallback }: ISizeProps) => {
  const [selectedSizeOptions, setSelectedSizeOptions] = useState([]);
  const { handleSubmit } = useForm();

  const handleChange = (options: any) => {
    setSelectedSizeOptions(options);
  };

  imageCallback(selectedSizeOptions);
  const test = (event: any) => {};
  return (
    <Overview>
      <SizeSelectStyle>
        <Text>Pick your image size(s)</Text>
        <form onSubmit={handleSubmit(test)}>
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={sizeOptions}
            onChange={handleChange}
          />
        </form>
      </SizeSelectStyle>
    </Overview>
  );
};
