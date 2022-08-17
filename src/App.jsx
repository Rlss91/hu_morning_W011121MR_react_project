import logo from "./logo.svg";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import ForgetPasswordPage from "./pages/forgetPassword.page";
import NewProductPage from "./pages/newProduct.page";

function App() {
  return (
    <div className="container">
      <Switch>
        <Route path="/recoverpassword/:keyParam/:iv/:encryptedData">
          <ForgetPasswordPage />
        </Route>
        <Route path="/newproduct">
          <NewProductPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
