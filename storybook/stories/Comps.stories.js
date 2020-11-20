import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import React from 'react';


import AvatarWithName from '../../comps/Avatar/AvatarWithName';
import AvatarDogProfile from '../../comps/AvatarForm/AvatarDogProfile';
import AddImage from '../../comps/AddImage';
import AvatarEdit from '../../comps/Avatar/AvatarEdit';


import Background from '../../comps/Background';


import ContinueAs from '../../comps/ContinueAs';


import Dislikes from '../../comps/Dislikes';
import Dropdown from '../../comps/Dropdown';


import DogInfo from '../../comps/DogInfo';
import DogDislikes from '../../comps/DogDislikes';
import DogLikes from '../../comps/DogLikes';
import DashOwner from '../../comps/DashOwner';
import DashDog from '../../comps/DashDog';
import DogPhotos from '../../comps/DogPhotos';


import FooterBar from '../../comps/FooterBar';
import FacebookButton from '../../comps/FacebookButton';

import GoogleButton from '../../comps/GoogleButton';

import Input from '../../comps/Input';



import Likes from '../../comps/Likes';
import LocationAge from '../../comps/LocationAge';

import MsgSent from '../../comps/MsgSent';
import MsgSelection from '../../comps/MsgSelection';
import MapPlaceholder from '../../comps/MapPlaceholder';

import Or from '../../comps/Or';

import Posts from '../../comps/Posts';
import Post from '../../comps/Post';
import Popup from '../../comps/Popup';

import ReviewStars from '../../comps/ReviewStars';


import ShareFeedback from '../../comps/ShareFeedback';
import Spacer from '../../comps/Spacer';

import Title from '../../comps/Title';
import Texting from '../../comps/Texting';

import UserBio from '../../comps/UserBio';

import WalkerProfile from '../../comps/WalkerProfile';
import WriteReview from '../../comps/WriteReview';

import YourReview from '../../comps/YourReview';

//-----------Pages


import LeaveReviewPage from '../../comps/LeaveReviewPage';
import WalkerProfileTitle from '../../comps/WalkerProfileTitle';

import UserInfo from '../../comps/UserInfo';




storiesOf('Comps', module)


.add('AvatarEdit', () => (
  <AvatarEdit />
  ))
.add('AddImage', () => (
  <AddImage />
))
.add('AvatarDogProfile', () => (
  <AvatarDogProfile />
))
.add('AvatarWithName', () => (
<AvatarWithName/>
))

.add('ContinueAs', () => (
  <ContinueAs/>
  ))


.add('Dropdown', () => (
<Dropdown/>
))
.add('DogInfo', () => (
<DogInfo/>
))
.add('DogLikes', () => (
<DogLikes/>
))
.add('DashOwner', () => (
<DashOwner/>
))
.add('DashDog', () => (
<DashDog/>
))
.add('DogDislikes', () => (
<DogDislikes/>
))
.add('DogPhotos', () => (
<DogPhotos/>
))
.add('Dislikes', () => (
<Dislikes
  maintext="Dislikes"
/>
))



.add('FooterBar', () => (
<FooterBar/>
))
.add('FacebookButton', () => (
<FacebookButton/>
))

.add('GoogleButton', () => (
<GoogleButton/>
))
.add('MsgSelection', () => (
<MsgSelection/>
))

.add('MapPlaceholder', () => (
<MapPlaceholder/>
))
.add('Post', () => (
<Post/>
))
.add('Popup', () => (
<Popup/>
))


.add('ReviewStars', () => (
<ReviewStars/>
))
.add('Spacer', () => (
<Spacer/>
))
  
  
.add('Texting', () => (
<Texting/>
))

.add('Title', () => (
<Title/>
))
.add('Input', () => (
<Input
   text= "Name"
   height={37}
  //  width={200}
   placeholder=""  />
))


.add('LocationAge', () => (
  <LocationAge />
))
.add('Likes', () => (
  <Likes 
  maintext="Likes"
  />
))

.add('UserInfo', () => (
  <UserInfo/>
))
.add('UserBio', () => (
  <UserBio/>
))
.add('WalkerProfile', () => (
  <WalkerProfile/>
))
.add('WriteReview', () => (
  <WriteReview />
))
.add('WalkerProfileTitle', () => (
  <WalkerProfileTitle/>
))
.add('WriteReview', () => (
  <WriteReview/>
))
.add('YourReview', () => (
<YourReview/>
))

//--------------Pages----------------------


// .add('DogProfilePage', () => (
//   <DogProfilePage/>
//   ))
  
// .add('ActivatePage', () => (
// <ActivatePage/>
// ))

// .add('RequestPage', () => (
//   <RequestPage/>
//   ))
// .add('ContinueAsPage', () => (
//   <ContinueAsPage/>
// ))

// .add('SignInPage', () => (
//   <SignIn/>
// ))
// .add('WalkProfilePage', () => (
// <WalkerProfilePage/>
// ))

;





