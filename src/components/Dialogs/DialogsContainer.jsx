import React from "react";
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;

    let sendNewMessage = () => {
        props.store.dispatch(sendMessageActionCreator());
    }

    let onMessageChange = (message) => {
        props.store.dispatch(updateNewMessageTextActionCreator(message));
    }

    return (
        <Dialogs updateNewMessageBody={onMessageChange}
            sendMessage={sendNewMessage}
            dialogsPage={state}

        />
    )
}

export default DialogsContainer;