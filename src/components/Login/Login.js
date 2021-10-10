import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
// import useFirebase from '../../Hooks/useFirebase';

const Login = () => {
    // const { signInUsingGoogle } = useFirebase();
    const { signInUsingGoogle } = useAuth();
    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={signInUsingGoogle}>Google Sign In</button>
            <br />
            <Link to="/register">New User?</Link>
        </div>
    );
};

export default Login;