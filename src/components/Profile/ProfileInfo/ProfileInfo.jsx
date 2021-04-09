import React from 'react';
import s from "./ProfileInfo.module.css";
import Preloader from './../../Preloader/Preloader';
import userPhoto from '../../../assets/images/images.jpeg';



const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div>
                <img src="https://i.ibb.co/vJXsNJZ/image-one.jpg" width="50%" alt='profileInfo_img' />
            </div>
            <div className={s.descriptionBlock}>
                <div className={s.avaName}>
                    <img src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto} />
                    <p>{props.profile.fullName}</p>
                </div> 
                <div className={s.profileDescription}>
                    <div>Обо мне: {props.profile.aboutMe}</div>
                    <div>Ищу работу: {props.profile.lookingForAJob.toString()}</div>
                    <div>userId: {props.profile.userId}</div>
                </div>     
        </div>
        </div>
    );
}

export default ProfileInfo;