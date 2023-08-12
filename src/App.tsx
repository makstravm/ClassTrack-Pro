import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RoutePath } from "./types";
import { LoginPage } from "./pages/LoginPage";
import { HomePage } from "./pages/HomePage";
import { RegistrationPage } from "./pages/RegistrationPage";
import { AuthLayout } from "./components/AuthLayout";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path={RoutePath.LOGIN} element={<LoginPage />} />
        <Route path={RoutePath.REGISTER} element={<RegistrationPage />} />
      </Route>

      <Route path={RoutePath.HOME} element={<HomePage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
