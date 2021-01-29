import {useState} from 'react';
import {Route, Redirect} from 'react-router-dom';
// import {authSelectors} from '../redux/auth';


const PrivateRoute = ({
                          children,
                          redirectTo = '/',
                          ...routeProps
                      }) => {
    // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    const [isLoggedIn, setisLoggedIn] = useState(false)
    return (
        <Route {...routeProps}>
            {isLoggedIn ? children : <Redirect to={redirectTo}/>}
        </Route>
    );
}


export default PrivateRoute