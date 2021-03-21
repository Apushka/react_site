import React from 'react';
import classes from "./Profile.module.css";



const Profile = () => {
  return (
    <div className={classes.content}>
      <div>
        <img src="https://i.ibb.co/vJXsNJZ/image-one.jpg" />
      </div>
      <div>
        ava + desc
        </div>
      <div>
        My posts
          <div>
          New posts
          </div>
        <div>
          <div className={classes.item}>
            post 1
            </div>
          <div className={classes.item}>
            post 2
            </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;