import React, {useState} from "react";
import { View } from "react-native";
import styled from "styled-components/native";

import Description from "./Comps/Description";
import Dropdown from "./Comps/Dropdown";
import Input from "./Comps/Input";
import Likes from "./Comps/Likes";
import Popup from "./Comps/Popup";
import Texting from "./Comps/Texting";
import Post from "./Comps/Post";
import WalkerProfile from "./Comps/WalkerProfile";
import MsgSent from "./Comps/MsgSent";
import MsgSelection from "./Comps/MsgSelection";
import Birthday from "./Comps/Birthday";
import MsgRecieved from "./Comps/MsgRecieved";
import DashDog from "./Comps/DashDog";
import DashOwner from "./Comps/DashOwner";
import AddImage from "./Comps/AddImage";
import Spacer from "./Comps/Spacer";
import TopBar from "./Comps/TopBar";
import AvatarWithName from "./Comps/Avatar/AvatarWithName";
import AvatarEdit from "./Comps/Avatar/AvatarEdit";
import FooterBar from "./Comps/FooterBar";

const Main = styled.View`
  width:375px;
  height:812px;
  display:flex;
  flex-direction:column;
  /* background-color:red; */
  align-items:center;
`;
const MainCont = styled.View`
  width:100%;
  height:812px;
`;
const FooterCont = styled.View`
  width:375px;
  position:absolute;
  bottom:0;
`;
const Cont = styled.View`
  width:100%;
  height:86%;
  /* background-color:blue; */
  overflow-y:scroll;
  display:flex;
  flex-direction:column;
  align-items:center;
`;
const Top = styled.View`
  width:100%;
  height:194px;
  /* background-color:#DBD; */
  display:flex;
  flex-direction:column;
  justify-content:center;
`;
const PersonalInfo = styled.View`
  width:100%;
  height:202px;
  /* background-color:#CCA; */
  z-index:5;
  display:flex;
  margin-top:10px;
`;
const BasicInfo = styled.View`
  width:100%;
  height:227px;
  display:flex;
  flex-direction:column;
  background-color:#FFF;
  align-items:center;
`;
const HeaderText = styled.Text`
  font-weight: 500;
  font-size: 14px;
  margin-left:20px;
  margin-top:14px;
  /* background-color:#ACA; */
`;
const InputCont = styled.View`
  width:100%;
  height:202px;
  display:flex;
  align-items:center;
  justify-content:flex-start;
  /* background-color:#BBA; */
  margin-top:30px;
`;
const Bcont = styled.View`
  margin-top:24px;
`;
const EmergencyInfo = styled.View`
  width:100%;
  height:180px;
  /* background-color:#ECA; */
  z-index:4;
  display:flex;
  margin-top:16px;
`;
const InputCont2 = styled.View`
  width:100%;
  height:120px;
  display:flex;
  align-items:center;
  justify-content:flex-start;
  /* background-color:red; */
  margin-top:30px;
`;
const Scont = styled.View`
  margin-top:50px;
  background-color:#ACA;
`;
const WalkerEditProfile = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");
  const [bio, setBio] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [emname, emSetName] = useState("");
  const [emphone, emSetPhone] = useState("");
  return (
    <View>
    <Main>
      <MainCont>
        <TopBar title="Edit Profile" text1="Cancel" text2="Done"/>
        <Cont>
          <Top>
            <AvatarEdit />
          </Top>
          <Spacer />
          <BasicInfo>
            <Input text="Name" 
            onChangeText={(t)=>{
              alert(t)
              setName(name);
              }}/>
            <Input text="Age" 
            onChangeText={(t)=>{
              alert(t)
              setAge(age);
            }}/>
            <Input text="Location"
            onChangeText={(t)=>{
              alert(t)
              setLocation(location);
            }}/>
            <Input text="Bio" height="48px"
            onChangeText={(t)=>{
              alert(t)
              setBio(bio);
            }}/>
          </BasicInfo>
          <Spacer />
          <PersonalInfo>
            <HeaderText>Personal Information</HeaderText>
            <InputCont>
              <Input text="Email"
                onChangeText={(t)=>{
                  alert(t)
                  setEmail(email);
              }}/>
              <Input text="Phone"
                onChangeText={(t)=>{
                  alert(t)
                  setPhone(phone);
              }}/>
                <Bcont>
                  <Birthday />
                </Bcont>
              </InputCont>
            </PersonalInfo>
            <Scont>
          <Spacer />
            </Scont>
            <EmergencyInfo>
              <HeaderText>Emergency Contact Information</HeaderText>
                <InputCont2>
                  <Input text="Name"
                    onChangeText={(t)=>{
                      alert(t)
                      emSetName(emname);
                      }}/>
                  <Input text="Phone"
                    onChangeText={(t)=>{
                      alert(t)
                      emSetPhone(emphone);
                      }}/>
                  </InputCont2>
              </EmergencyInfo>
          </Cont>
        <FooterCont><FooterBar /></FooterCont>
     </MainCont>
      </Main>
    </View>
  );
};

export default WalkerEditProfile;