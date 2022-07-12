import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isLogin } from '../utility';

function Public({ component: Component, restricted = false, ...rest }) {
    return (
        <Route {...rest} render={props => (
            isLogin() && restricted === true ?
                <Redirect to={'/'} />
                :
                <Component {...props} />
        )}

        />
    );
}

export default Public;