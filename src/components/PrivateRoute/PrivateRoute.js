import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const PrivateRoute = (props) => {
    const { children, ...rest } = props;
    const { user } = useAuth();
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ?
                    children :
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }} />
            }
        >

        </Route>
    );
};

export default PrivateRoute;