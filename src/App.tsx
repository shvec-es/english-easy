import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
  import 'react-toastify/dist/ReactToastify.css';
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
import { useAppSelector } from "./store/hooks/redux";

const App: React.FC = () => {
  const { token } = useAppSelector((state) => state.AuthSlice);
  return token ? (
    <>
      <Header />
      <Container>
    <ToastContainer position="bottom-left" theme="colored" autoClose={1500}/>
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

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Container>
    </>
  ) : (
    <Routes>
      <Route path="*" element={<Navigate to="/login" />} />
      <Route
        path="/login"
        element={
          <PublicRoute restricted>
            <LoginPage />
          </PublicRoute>
        }
      />
      <Route
        path="/register"
        element={
          <PublicRoute restricted>
            <RegisterPage />
          </PublicRoute>
        }
      />
    </Routes>
  );
};

export default App;
