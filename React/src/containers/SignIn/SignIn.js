import React, { Component } from 'react';

import classes from './SignIn.css';

class SignIn extends Component {
    render(){
        return (
            <div className={classes.SignIn}>
                <div className={classes.SignIn_Form}>
                    <div className={classes.Title}>SignIn</div>
                    <div className={classes.Option}><a className={classes.Active}>User</a> | <a>Professional</a></div>
                    <form>
                        <div className={classes.Form_Group}>
                            <label for="email">E-mail : </label>
                            <span className={classes.Form_Placeholder}>E-mail</span>
                            <input type="email" required name="email" id="email" placeholder="E-mail"/>
                        </div>
                        <div className={classes.Form_Group}>
                            <label for="password">Password : </label>
                            <input type="password" required placeholder="Password" name="password" id="password"/>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default SignIn;