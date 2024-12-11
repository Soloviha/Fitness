import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './ui/NavBar';
import ChatBot from './ui/ChatBot';
// import FootBar from './ui/FootBar';
// import FootBar from './ui/FootBar';

export default function Layout(): React.JSX.Element {
  return (
    <>
      <NavBar />
      <Outlet />
      <ChatBot /> 
      {/* <FootBar/> */}
    </>
  );
}
