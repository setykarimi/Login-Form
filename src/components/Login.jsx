import { defaultMaxListeners } from 'events';
import React from 'react';
import Input from './Input';

function Login(props) {
    return (
        <form className="form">
            <div>
                <Input
                    type="text"
                    placeholder="UserName" />
            </div>

            <div>
                <Input
                    type="password"
                    placeholder="Password" />
            </div>

            <div> {!props.isRegsiter && <Input type="password" placeholder="Confirm Password" />}</div>
           <div> <button>{(props.isRegsiter) ? "Login" : "Register"}</button></div>
        </form>
    )
}

export default Login;