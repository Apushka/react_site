import React from "react";
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogs-reducer";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id} link={d.link} />
        );

    let messagesElements = state.messages
        .map(m => <Message message={m.message} id={m.id} />);

    let sendNewMessage = () => {
        props.sendMessage();
    }

    let onMessageChange = (e) => {
        let message = e.target.value;
        props.updateNewMessageBody(message);
    }

    return (
        <div className={s.dialogs}>
            <div>
                {dialogsElements}
            </div>
            <div>
                {messagesElements}
            </div>
            <div className={s.sendMessage}>
                <textarea onChange={onMessageChange} className={s.textarea} value={state.newMessageText} ></textarea>
                <br></br>
                <button onClick={sendNewMessage} >Send Message</button>
            </div>
        </div>
    )
}

export default Dialogs;