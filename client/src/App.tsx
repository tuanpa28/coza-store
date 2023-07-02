import { Route, Routes } from "react-router-dom";
import "./assets/css/style.css";
import AdminLayout from "./components/Layouts/AdminLayout/adminLayout";
import BaseLayout from "./components/Layouts/BaseLayout/baseLayout";
import SigninPage from "./pages/Signin/SigninPage";
import SignupPage from "./pages/Signup/SignupPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import { privateRoutes, publicRoutes } from "./routes";
import routes from "./config/routes";

function App() {
  return (
    <Routes>
      {/* client */}
      {publicRoutes?.map((route, index) => {
        const Page = route.Comment;
        return (
          <Route
            key={index}
            path={route.path}
            element={
              <BaseLayout>
                <Page />
              </BaseLayout>
            }
          />
        );
      })}

      {/* admin */}
      {privateRoutes?.map((route, index) => {
        const Page = route.Comment;
        return (
          <Route
            key={index}
            path={route.path}
            element={
              <AdminLayout>
                <Page />
              </AdminLayout>
            }
          />
        );
      })}

      {/* signin signup */}
      <Route path={routes.signin} element={<SigninPage />} />
      <Route path={routes.signup} element={<SignupPage />} />

      {/* Router Not Found */}
      <Route path={routes.notFound} element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
