import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id} link={d.link} />
        );

    let messagesElements = props.state.messages
        .map(m => <Message message={m.message} id={m.id} />);

    return (
        <div className={s.dialogs}>
            <div>

                {dialogsElements}
                {/* <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} /> */}
            </div>
            <div>
                {messagesElements}
                {/* <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} /> */}
            </div>
        </div>
    )
}

export default Dialogs;