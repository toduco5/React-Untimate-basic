import './assets/style/todolist.css'
import Btn_Input from './assets/style/Btn_Input'
import Todo_Content from './assets/style/TodoContent'
import Logo from './assets/react.svg'
import { useState } from 'react';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import { Outlet } from 'react-router-dom';

const App = () => {

  return (
    <>
      <Header />
     
      <Outlet/>
      <Footer />
    </>
  );
};

export default App;
