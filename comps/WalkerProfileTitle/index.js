import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";

const Titletext = styled.Text`
  /* margin-top: 20px; */
  color: #000;
  display: flex;
  /* align-items: center;
  justify-content: center; */
  /* margin-left: 20px; */
  flex-direction: column;
  font-weight: 400;
`;

const WalkerProfileTitle = () => {
  return (
    <View>
      <Titletext>
        <Text style={{fontWeight:"bold"}}>Walker Profile</Text>
      </Titletext>
    </View>
  );
};

export default WalkerProfileTitle;
