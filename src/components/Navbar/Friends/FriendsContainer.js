import React from 'react';
import Friends from './Friends';

const FriendsContainer = (props) => {

    let friends = props.store.getState().sidebar;

    return (
        <Friends friends={friends} />
    );
}

export default FriendsContainer;