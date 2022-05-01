import React from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToProps = (state) =>{
    return {
        isAuth: state.auth.isAuth
    }
}

const withAuthRedirect = (Components) => {
    const RedirectComponents = (props) => {
        if (!props.isAuth){return  <Navigate to={'/login'}/>}
        return <Components {...props}/>
    }

    let connectedAuthRedirectComponents = connect(mapStateToProps)(RedirectComponents)

    return connectedAuthRedirectComponents

}

export default withAuthRedirect;