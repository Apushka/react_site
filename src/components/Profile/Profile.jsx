import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from "./Profile.module.css";


const Profile = () => {
  return (
    <div>
      <div>
        <img src="https://i.ibb.co/vJXsNJZ/image-one.jpg" width="50%"/>
      </div>
      <div>
        ava + desc
        </div>
      <MyPosts />
    </div>
  );
}

export default Profile;