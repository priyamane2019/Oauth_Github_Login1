import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import RepoDetailsPage from './pages/RepoDetailsPage';
import ReposPage from './pages/ReposPage'
import NotFoundPage from './pages/NotFoundPage';
import Header from './components/Header';
import DarkToLight from './Theme/DarkToLight';
// import Home from './components/Home'
// import Protected from './components/Protected';

const App = () => {
  return (
    <BrowserRouter>
    <Header />
      <Navbar /> 
      <Routes>
        <Route path="/" exact element={<LoginPage />} />
        <Route path="/ReposPage" exact element={ <ReposPage/>} />
        <Route path="/RepoDetailsPage/:login" element={<RepoDetailsPage/>} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
      <DarkToLight />
    </BrowserRouter>
    
  );
};

export default App;


         







 












































































