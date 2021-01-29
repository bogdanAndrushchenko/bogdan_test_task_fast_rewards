import HomePage from "../HomePage/HomePage";
import Login from "../Login/LogIn.";
import Register from "../Regicter/Register";

import {MuiThemeProvider, createMuiTheme} from "@material-ui/core";
import {CssBaseline} from "@material-ui/core";
import {BrowserRouter as Router ,Switch, Route} from "react-router-dom";
const theme = createMuiTheme();

const App =()=>{
    return(
        <MuiThemeProvider theme={theme}>
            <CssBaseline/>
            <Router>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/register" component={Register}/>
                    {/*<Route exact path="/dashboard" component={Dashboard}/>*/}
                </Switch>
            </Router>
        </MuiThemeProvider>
    )
};
export default App