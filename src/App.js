import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import LoginSigninHeader from "./pages/LoginSigninHeader";
import ProtectedRoute from "./pages/protectedRoute";
import Searchp from "./pages/Searchp";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <ProtectedRoute path="/" component={Home} exact />
        <Route path="/login" component={LoginSigninHeader} exact />
        
        <ProtectedRoute path="/Searchp" component={Searchp} exact />
        <Route path="*" render={() => (<div id="notfound">NOT FOUND 404</div>)} />
      </Switch>
    </BrowserRouter >
  );
}

export default App;
