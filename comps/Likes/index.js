import React, {useState} from "react";
import styled from "styled-components/native";
import { View, TextInput, Text } from "react-native";

const MainCont = styled.View`
  /* background-color: #dbd; */
  width: 290px;
  height: 104px;
  display: flex;
  flex-direction: row;
`;

const LeftSide = styled.View`
  /* background-color: #bbd; */
  flex: 3;
  display: flex;
  align-items: center;
  padding: 4px;
`;
const RightSide = styled.View`
  flex: 5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const OpOne = styled.View`
  width: 100%;
  height: 27px;
  border: 1px solid #e5e5e5;
`;
const Input1 = styled.TextInput`
  /* background-color:#FAD; */
  height:100%;
`
const Likes = ({ maintext}) => {
  const [likeone, setLikeOne] = useState("");
  const [liketwo, setLikeTwo] = useState("");
  const [likethree, setLikeThree] = useState("");
  return (
    <View>
      <MainCont>
        <LeftSide>
          <Text>{maintext}</Text>
        </LeftSide>
        <RightSide>
          <OpOne>
          <Input1 placeholder="Type something..." onChangeText={(t)=>{
              alert(t)
              setLikeOne(likeone);
            }}/>
          </OpOne>
          <OpOne>
          <Input1 placeholder="Type something..." onChangeText={(t)=>{
              alert(t)
              setLikeTwo(liketwo);
            }}/>
          </OpOne>
          <OpOne>
            <Input1 placeholder="Type something..." onChangeText={(t)=>{
              alert(t)
              setLikeThree(likethree);
            }}/>
          </OpOne>
        </RightSide>
      </MainCont>
    </View>
  );
};

Likes.defaultProps = {
  maintext: "default",
};
export default Likes;
