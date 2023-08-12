import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RoutePath } from "./types";
import { HomePage } from "./pages/HomePage";
import { AuthLayout } from "./pages/AuthLayout";
import { FormComponent } from "./components/FormComponent";
import {
  loginFormFields,
  loginInitialValue,
  registrationFormFields,
  registrationInitialValue,
} from "./constant/initialValuesOfForm";
import {
  loginValidationSchema,
  registerValidationSchema,
} from "./constant/schema";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<AuthLayout />}>
        <Route
          path={RoutePath.LOGIN}
          element={
            <FormComponent
              title="Log In"
              titleLink="Don't have an account? Sign Up"
              link={RoutePath.REGISTER}
              buttonText="Sign In"
              initialValues={loginInitialValue}
              formFields={loginFormFields}
              onSubmit={() => {}}
              validationSchema={loginValidationSchema}
            />
          }
        />
        <Route
          path={RoutePath.REGISTER}
          element={
            <FormComponent
              title="Registration"
              titleLink="Do have an account? Sign In"
              link={RoutePath.LOGIN}
              buttonText="Sign Up"
              initialValues={registrationInitialValue}
              formFields={registrationFormFields}
              onSubmit={() => {}}
              validationSchema={registerValidationSchema}
            />
          }
        />
      </Route>

      <Route path={RoutePath.HOME} element={<HomePage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
