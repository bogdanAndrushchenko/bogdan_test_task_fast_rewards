import {useState} from "react";
import s from './FormAuth.module.css';

const FormAuth = () => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('')

    const handleChange = ({target: {value, id}}) => {
        switch (id) {
            case("login"):
                setLogin(value);
            case('password'):
                setPassword(value)
        }
    }

    const createUser = () => {
        console.log('User created')
    }

    return (
        <form className={s.login_block}>
            <input
                type="text"
                id="login"
                placeholder="Login"
                autoComplete="off"
                onChange={handleChange}
            />
            <input
                type="password"
                id="password"
                placeholder="Password"
                autoComplete="off"
                onChange={handleChange}
            />
            <button
                type="submit"
                onClick={createUser}>
                Login
            </button>
        </form>
    )
}

export default FormAuth;