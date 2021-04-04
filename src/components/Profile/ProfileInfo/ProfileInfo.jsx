import React from 'react';
import s from "./ProfileInfo.module.css";


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://i.ibb.co/vJXsNJZ/image-one.jpg" width="50%" alt='profileInfo_img' />
            </div>
            <div className={s.descriptionBlock}>
                ava + desc
        </div>
        </div>
    );
}

export default ProfileInfo;