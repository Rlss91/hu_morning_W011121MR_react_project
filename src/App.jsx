import logo from "./logo.svg";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import ForgetPasswordPage from "./pages/forgetPassword.page";

function App() {
  return (
    <div className="container">
      <Switch>
        <Route path="/recoverpassword/:keyParam/:encryptedEmail">
          <ForgetPasswordPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
