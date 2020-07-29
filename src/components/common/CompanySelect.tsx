import React from "react";
import styled from "styled-components";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import "./button.css";

const animatedComponents = makeAnimated();

interface ICompanyProps {
  name?: string;
}

const Overview = styled.div``;

const CompanySelectStyle = styled.div`
  width: 300px;
  padding: 20px;
`;
const Text = styled.div`
  font-weigth: bold;
  font-size: 20px;
  padding-bottom: 10px;
`;
const companyOptions = [
  { value: "Facebook", label: "Facebook" },
  { value: "Twitter", label: "Twitter" },
  { value: "Reddit", label: "Reddit" },
  { value: "Instagram", label: "Instagram" },
];
export default ({ name }: ICompanyProps) => {
  return (
    <Overview>
      <CompanySelectStyle>
        <Text>Pick platform(s)</Text>
        <Select
          closeMenuOnSelect={false}
          components={animatedComponents}
          isMulti
          options={companyOptions}
        />
      </CompanySelectStyle>
    </Overview>
  );
};
