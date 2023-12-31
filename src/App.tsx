import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
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
import { RoutePath } from "./constant/enums";
import { signInUser, signUpUser } from "./api/user";
import { ProtectedRoute } from "./components/ProtectedRoute";

const App = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
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
              onSubmit={signInUser}
              isRememberMe={true}
              formFields={loginFormFields}
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
              onSubmit={signUpUser}
              isRememberMe={false}
              validationSchema={registerValidationSchema}
            />
          }
        />
      </Route>
      <Route path={RoutePath.HOME} element={<ProtectedRoute />}>
        <Route
          path={RoutePath.SUCCESS_SIGN_IN}
          element={<Navigate to={RoutePath.HOME} />}
        />
        <Route path={RoutePath.HOME} element={<HomePage />} />
        <Route path="*" element={<Navigate to={RoutePath.HOME} />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
