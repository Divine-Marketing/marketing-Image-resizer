import React from "react";
import styled from "styled-components";

import "./button.css";
interface IButtonProps {
  name: string;
  // background: string;
}

const Overview = styled.div``;
const ButtonSelect = styled.div`
  width: 300px;
  padding: 20px;
`;
const Button = styled.button`
  height: auto;
  width: auto; //set width later for consistency
  font-size: 20px;
  padding: 10px;
  color: white;
  transition-duration: 0.4s;
  border-radius: 20px;
  outline: 0;
  border: none;
  user-select: none;
  cursor: pointer;
  &:hover {
    background-color: gray;
    background: gray;
    color: black;
  }
`;

export default ({ name }: IButtonProps) => {
  return (
    <Overview>
      <ButtonSelect></ButtonSelect>
      <Button className={name}>{name}</Button>
    </Overview>
  );
};
