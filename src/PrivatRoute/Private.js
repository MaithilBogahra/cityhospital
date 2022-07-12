import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isLogin } from '../utility';

function Private({ component: Component, ...rest }) {
    return (
        <Route  {...rest} render={props => (
            isLogin() ?
                <Component  {...props} />
                :
                <Redirect to={'/form'} />
        )}

        />
    );
}

export default Private;