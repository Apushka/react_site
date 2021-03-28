import React from "react";
import { NavLink } from "react-router-dom";
import s from "./../Dialogs.module.css";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    
    return (
        <div className={s.dialogsItems + ' ' + s.active}>
            <NavLink to={path}><img src={props.link}  alt='link' width='50' height='50' style={{borderRadius: '50px'}}></img>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;