import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Registration from './components/Registration/Registration';
import SignupForm from './components/Login/Login';

function App(event: any) {
  // const [userReg, setUserReg] = useState({
  //   username: "",
  //   email: "",
  //   phone: "",
  //   password: "",
  // })



  return (
    <div>
      {/* <Registration /> */}
      <SignupForm/>
    </div>
  );
}

export default App;
