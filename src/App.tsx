import { Routes, Route, Navigate } from "react-router-dom";
import s from './App.module.scss'
import {
  Container,
  Header,
  MyVocabulary,
  AllWords,
  Translator,
  Rules,
  TopUsers,
  Chat,
} from "./components";
import PrivateRoute from "./components/Routes/PrivateRoute";
import PublicRoute from "./components/Routes/PublicRoute";
import DashboardPage from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <section className={s.background}>
      <Container>
        <Routes>
          <Route path="/" element={<PrivateRoute />}>
            <Route index element={<DashboardPage />} />
            <Route path="my_vocabulary" element={<MyVocabulary />} />
            <Route path="all_words" element={<AllWords />} />
            <Route path="translator" element={<Translator />} />
            <Route path="rules" element={<Rules />} />
            <Route path="top_users" element={<TopUsers />} />
            <Route path="chat" element={<Chat />} />
          </Route>

          <Route
            path="login"
            element={
              <PublicRoute restricted>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute restricted>
                <RegisterPage />
              </PublicRoute>
            }
          />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Container>
      </section>
    </>
  );
};

export default App;
