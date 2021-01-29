import {NavLink} from "react-router-dom";
import s from './HomeViev.module.css';

const HomeView = () => {

    return (
        <>
            <h1 className={s.h1}>Home</h1>
            <nav className={s.nav}>
                <NavLink to="/login" exact className={s.link} activeClassName={s.activeLink}>
                    Log In
                </NavLink>
                <NavLink to="/signin" className={s.link} activeClassName={s.activeLink}>
                    Sign In
                </NavLink>
            </nav>
        </>
    );
};

export default HomeView;