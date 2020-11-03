import React from "react";
import styled, { css } from "styled-components/native";
import { View, Text } from "react-native";

const InputCont = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 268px;
  height: 48px;
`;

const InputTitle = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputBox = styled.View`
  display: flex;
  flex: 3;
  input {
    width: 100%;
    height: ${(props) => (props.height ? props.height : 22)}px;
    border: none;
  }
`;
const Spacer = styled.View`
  flex: 1;
`;

const Input = ({ text, placeholder, height }) => {
  return (
    <View>
      <InputCont>
        <InputTitle>
          <Text>{text}</Text>
        </InputTitle>
        <Spacer />
        <InputBox height={height}>
          <input placeholder={placeholder}></input>
        </InputBox>
      </InputCont>
    </View>
  );
};

Input.defaultProps = {
  text: "default",
  placeholder: "default",
  width: "22px",
  height: "40px"
};

export default Input;
