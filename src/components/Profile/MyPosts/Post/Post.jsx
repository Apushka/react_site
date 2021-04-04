import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
    return (
        <div>
            <div className={classes.item}>
                <img src="https://sputnik.kg/images/101808/13/1018081344.jpg" alt='post_avatar' />
                    <span>{props.message}</span>
                    <div>
                    <span>like</span> {props.likesCount}
                </div>
            </div>
        </div>
    );
}

export default Post;
