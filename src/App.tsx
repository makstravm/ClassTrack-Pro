import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RoutePath } from "./types";
import { LoginPage } from "./pages/LoginPage";
import { HomePage } from "./pages/HomePage";
import { RegistrationPage } from "./pages/RegistrationPage";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path={RoutePath.HOME} element={<HomePage />} />
      <Route path={RoutePath.LOGIN} element={<LoginPage />} />
      <Route path={RoutePath.REGISTER} element={<RegistrationPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
