import React, { useState } from "react";
import styled from "styled-components";
import Select from "react-select";
import { useForm } from "react-hook-form";

import makeAnimated from "react-select/animated";
import "./button.css";

const animatedComponents = makeAnimated();

interface ICompanyProps {
  companyCallback: Function;
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
const options = [

  { value: "facebook", label: "Facebook" },
  { value: "Twitter", label: "Twitter" },
  { value: "Reddit", label: "Reddit" },
  { value: "Instagram", label: "Instagram" },
];
export default ({ companyCallback }: ICompanyProps) => {
  const { handleSubmit } = useForm();
  const [selectedCompanyOptions, setSelectedCompanyOptions] = useState([]);

  const handleChange = (options: any) => {
    setSelectedCompanyOptions(options);
  };

  companyCallback(selectedCompanyOptions);

  const test = (event: any) => {};
  return (
    <Overview>
      <CompanySelectStyle>
        <Text>Pick your platform(s)</Text>
        <form onSubmit={handleSubmit(test)}>
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={options}
            onChange={handleChange}
          />
        </form>
      </CompanySelectStyle>
    </Overview>
  );
};

// for (const {
//   type: type,
//   size: { width: width, height: height },
// } of facebookSizes) {

// }
