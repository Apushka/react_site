import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { authMeThunkCreator } from '../../redux/auth-reducer';


class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.authMeThunkCreator();
    }

    render() {
        return (
            <Header {...this.props} />
        );
    }
}
const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        avatar: state.auth.avatar
    }
};

export default connect(mapStateToProps,
    {
        authMeThunkCreator
    })(HeaderContainer);