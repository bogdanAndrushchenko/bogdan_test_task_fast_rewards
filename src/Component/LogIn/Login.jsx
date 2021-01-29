import {useState} from 'react';

import fire_db from "../../fire_db";

import s from './Login.module.css'


const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({target: {name, value}}) => {
        switch (name) {
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }
    };

    const handleSignIn = async e => {
        e.preventDefault();
        try {
            await fire_db
                .auth()
                .signInWithEmailAndPassword(email, password);
            resetForm()
        } catch (error) {
            console.error(error);
        }

    };
    const resetForm = ()=>{
        setEmail('');
        setPassword('');
    }


    return (
        <div>
            <h1>Log in</h1>

            <form onSubmit={handleSignIn} className={s.Form}
                  autoComplete="off">
                <label className={s.Label}>
                    Email
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                    />
                </label>

                <label className={s.Label}>
                    Password
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                    />
                </label>

                <button type="submit">Log In</button>
            </form>
        </div>
    );
}
export default LogIn;