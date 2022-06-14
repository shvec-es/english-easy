import { Routes, Route, Navigate } from 'react-router-dom';
import {Container, Header, MyVocabulary, AllWords, Translator, Rules, TopUsers, Chat } from './components';
import DashboardPage from './pages/Dashboard';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

const App: React.FC = () => {
  
  return (
    <>
      <Header />
      {/* <section className={styles['section-background']}> */}
        <Container>
          <Routes>
            <Route path='/' element={<DashboardPage />}/>
            <Route path='my_vocabulary' element={<MyVocabulary />} />
            <Route path='all_words' element={<AllWords/>}/>
            <Route path='translator' element={<Translator/>}/>
            <Route path='rules' element={<Rules/>}/>
            <Route path='top_users' element={<TopUsers/>}/>
            <Route path='chat' element={<Chat/>}/>

            <Route path='login' element={<LoginPage />} />
            <Route path='register' element={<RegisterPage />} />

            <Route path="*" element={<Navigate to="/" />}/>
          </Routes>

        </Container>
      {/* </section> */}
    </>
);
}

export default App;
