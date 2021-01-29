// import {useSelector} from 'react-redux';
import {useState} from 'react';
import {Route, Redirect} from 'react-router-dom';
// import {authSelectors} from '../redux/auth';


const PublicRoute = ({
                         children,
                         restricted = false,
                         redirectTo = '/',
                         ...routeProps
                     }) => {
    // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    const [isLoggedIn, setisLoggedIn] = useState(true)
    const shouldRedirect = isLoggedIn && restricted;
    return (
        <Route {...routeProps}>
            {shouldRedirect ? <Redirect to={redirectTo}/> : children}
        </Route>
    );
}
export default PublicRoute