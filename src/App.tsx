import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import styles from './App.module.scss'
import {Container, Header, MyVocabulary, AllWords, Translator, AddNewWords, Rules, TopUsers, Chat } from './components';
import DashboardPage from './pages/Dashboard';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <>
      <Header />
      <section className={styles['section-background']}>
        <Container>
          <Routes>
            <Route path='/' element={<DashboardPage />}/>
            <Route path='my_vocabulary' element={<MyVocabulary />} />
            <Route path='all_words' element={<AllWords/>}/>
            <Route path='translator' element={<Translator/>}/>
            <Route path='add_words' element={<AddNewWords/>}/>
            <Route path='rules' element={<Rules/>}/>
            <Route path='top_users' element={<TopUsers/>}/>
            <Route path='chat' element={<Chat/>}/>

            <Route path='login' element={<LoginPage />} />
            <Route path='register' element={<RegisterPage />} />

            <Route path="*" element={<Navigate to="/" />}/>
          </Routes>

        </Container>
      </section>
    </>
);
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <Counter />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <span>
    //       <span>Learn </span>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         React
    //       </a>
    //       <span>, </span>
    //       <a
    //         className="App-link"
    //         href="https://redux.js.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Redux
    //       </a>
    //       <span>, </span>
    //       <a
    //         className="App-link"
    //         href="https://redux-toolkit.js.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Redux Toolkit
    //       </a>
    //       ,<span> and </span>
    //       <a
    //         className="App-link"
    //         href="https://react-redux.js.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         React Redux
    //       </a>
    //     </span>
    //   </header>
    // </div>
}

export default App;
