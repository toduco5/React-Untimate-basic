import './assets/style/todolist.css'
import Btn_Input from './assets/style/Btn_Input'
import Todo_Content from './assets/style/TodoContent'
import Logo from './assets/react.svg'
import { useContext, useEffect, useState } from 'react';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import { Outlet } from 'react-router-dom';
import { getAccountApi } from './services/api.service';
import { AuthContext } from './components/context/auth.context';
import { Spin } from 'antd';
const App = () => {
  const { setUser, isAppLoading, setIsAppLoading } = useContext(AuthContext);

  useEffect(() => {
    fetchUserInfo();
  }, []);
  const delay = (milisec) => {
    return new Promise((resolve) => setTimeout(resolve, milisec))
  }
  const fetchUserInfo = async () => {
    await delay(2000)
    const res = await getAccountApi();
    if (res.data) {
      console.log("check info ", res.data)
      setUser(res.data.user)
    }
    setIsAppLoading(false)
  }
  return (

    <>
      {isAppLoading === true ? (<Spin size="large" style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}></Spin>)
        : (
          <>
            <Header />
            <Outlet />
            <Footer />
          </>
        )}
    </>
  );
};

export default App;
