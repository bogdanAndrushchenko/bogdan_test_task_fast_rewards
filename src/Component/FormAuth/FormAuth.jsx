import {useState, } from "react";
import fire_db from "../../fire_db";
import s from './FormAuth.module.css';

const FormAuth = ({setUser}) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const handleInput = ({target: {name, value}}) => {
        switch (name) {
            case ("login"):
                setLogin(value);
                break
            case ("password"):
                setPassword(value)

        }
    }

    const handleCreate = async event => {
        event.preventDefault();
        try {
            await fire_db
                .auth()
                .createUserWithEmailAndPassword(login, password);
        } catch (error) {
            console.log(error);
        }
        resetForm();
    };

    const resetForm = () => {
        setLogin("");
        setPassword("")
    }

    return (
        <div className={s.login_block}>
            <h1>Sign up</h1>
            <form onSubmit={handleCreate} autoComplete="off">
                <input name="login"
                       type="login"
                       placeholder="Login"
                       className={s.input}
                       onChange={handleInput}
                />

                <input name="password"
                       type="password"
                       placeholder="password"
                       className={s.input}
                       onChange={handleInput}/>

                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default FormAuth;