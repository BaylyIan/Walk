import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import WalkerProfileTitle from '../../comps/WalkerProfileTitle';
import WalkerProfilePage from '../../comps/WalkerProfilePage';
import UserInfo from '../../comps/UserInfo';
import UserBio from '../../comps/UserBio';
import Title from '../../comps/Title';
import Texting from '../../comps/Texting';
import Spacer from '../../comps/Spacer';
import SignIn from '../../comps/SignIn';
import ShareFeedback from '../../comps/ShareFeedback';
import ReviewStars from '../../comps/ShareFeedback';
import RequestPage from '../../comps/RequestPage';
import Posts from '../../comps/Posts';
import Post from '../../comps/Post';
import Popup from '../../comps/Popup';
import Or from '../../comps/Or';
import MsgSent from '../../comps/MsgSent';
import MsgSelection from '../../comps/MsgSelection';
import LocationAge from '../../comps/LocationAge';
import Likes from '../../comps/Likes';
import LeaveReviewPage from '../../comps/LeaveReviewPage';
import Input from '../../comps/Input';
import GoogleButton from '../../comps/GoogleButton';
import FooterBar from '../../comps/FooterBar';
import EventInfo from '../../comps/EventInfo';
import Dropdown from '../../comps/Dropdown';
import DogInfoTitle from '../../comps/DogInfoTitle';
import DogInfo from '../../comps/DogInfo';
import DashOwner from '../../comps/DashOwner';
import DashDog from '../../comps/DashDog';
import Continue from '../../comps/ContinueAs';

import ContinuePage from '../../comps/ContinueAsPage';
// import Birthday from '../../comps/Birthday';
import Background from '../../comps/Background';


storiesOf('Comps', module)
 //completed
  .add('WalkerProfileTitle', () => (
    <WalkerProfileTitle/>
  ))
  //need to modify code
  .add('WalkProfilePage', () => (
    <WalkerProfilePage/>
  ))
// impossible, it break Android
//   .add('WalkerProfile', () => (
//     <WalkerProfile/>
//   ))
//error occured, need to modify code
.add('UserInfo', () => (
    <UserInfo/>
  ))
  //error break Android. need to modify code
.add('UserBio', () => (
    <UserBio/>
  ))
  //completed
.add('Title', () => (
    <Title/>
  ))
  //completed
.add('Texting', () => (
    <Texting/>
  ))
//empty screen. need to modify code
.add('Spacer', () => (
    <Spacer/>
  ))
//error occured, need to modify code
.add('SignIn', () => (
    <SignIn/>
  ))
.add('ShareFeedback', () => (
    <ShareFeedback/>
  ))
// error break Android, need to modify code
.add('ReviewStars', () => (
    <ReviewStars/>
  ))
.add('RequestPage', () => (
    <RequestPage/>
  ))
.add('Posts', () => (
    <Posts/>
  ))
.add('Post', () => (
    <Post/>
  ))
.add('Popup', () => (
    <Popup/>
  ))
.add('Or', () => (
    <Or/>
  ))
.add('MsgSent', () => (
    <MsgSent/>
  ))
.add('MsgSelection', () => (
    <MsgSelection/>
  ))
.add('MsgRecieved', () => (
    <MsgRecieved/>
  ))
.add('LocationAge', () => (
    <LocationAge/>
  ))
.add('Likes', () => (
    <Likes/>
  ))
.add('LeaveReviewPage', () => (
    <LeaveReviewPage/>
  ))
.add('Input', () => (
    <Input/>
  ))
.add('GoogleButton', () => (
    <GoogleButton/>
  ))
.add('FooterBar', () => (
    <FooterBar/>
  ))
.add('FacebookButton', () => (
    <FacebookButton/>
  ))
.add('EventInfo', () => (
    <EventInfo/>
  ))
.add('Dropdown', () => (
    <Dropdown/>
  ))
.add('DogLikes', () => (
    <DogLikes/>
  ))
.add('DogInfoTitle', () => (
    <DogInfoTitle/>
  ))
.add('DogInfo', () => (
    <DogInfo/>
  ))
.add('DogDislikes', () => (
    <DogDislikes/>
  ))
.add('Description', () => (
    <Description/>
  ))
.add('DashOwner', () => (
    <DashOwner/>
  ))
.add('DashDog', () => (
    <DashDog/>
  ))
.add('ContinuePage', () => (
    <ContinuePage/>
  ))
.add('Continue', () => (
    <Continue/>
  ))
// .add('Birthday', () => (
//     <Birthday/>
//   ))
.add('Background', () => (
    <Background/>
  ))
;