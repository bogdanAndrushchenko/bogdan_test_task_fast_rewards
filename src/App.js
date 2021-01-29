import {Switch} from 'react-router-dom';
import {useState, Suspense} from 'react';
import './App.css';
import FormAuth from "./Component/FormAuth";
import Timer from "./Component/Timer";

// import {AuthProvider} from "./Component/Auth";
import PrivateRoute from "./Component/PrivatRoute";
import PublicRoute from "./Component/PublicRoute";
import LogIn from "./Component/LogIn";
import HomeView from "./Component/HomeView";

const App = () => {
    const [hasAccount, setHasAccount] = useState(false);
    const [isSignIn, setIsSignIn] = useState(false);
    const [startSession, setStartSession] = useState(0);
    const [endSession, setEndSession] = useState(0);

    const setUser = (entry, account, startTime) => {
        setIsSignIn(entry);
        setHasAccount(account);
        setStartSession(startTime);
    }
    return (
        // <FormAuth/>
        <Switch>
            <Suspense fallback={<p>Loading...</p>}>
                <PublicRoute exact path="/">
                    <HomeView/>
                </PublicRoute>
                <PublicRoute exact path="/signin" restricted>
                    <FormAuth/>
                </PublicRoute>
                {/*redirectTo="/timer" restricted*/}
                <PublicRoute exact path="/login">
                    <LogIn/>
                </PublicRoute>
                <PrivateRoute path="/timer" redirectTo="/login">
                    <Timer/>
                </PrivateRoute>

            </Suspense>
        </Switch>
    );
};

export default App;