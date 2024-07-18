
// import Signup from "./components/Signup"
// import Courses from "./courses/Courses"
// import Home from "./Home/Home"
// import { Navigate, Route, Routes } from "react-router-dom"
// import { Toaster } from 'react-hot-toast';
// // import Login from "./components/Login";
// import { useAuth } from "./context/AuthProvider";
// import Login from "./components/Login";

// function App() {
//    const [ authUser, setAuthUser] =  useAuth();
//   console.log(authUser);
//   return (
//      <>
//      <div className=" dark: bg-slate-900 dark:text-white">
//      <Routes>
     
//      <Route path="/" element={<Home/>}/>

//      <Route path="/course" element={authUser ? <Courses/>  : <Navigate to="/signup"/>}/>
//      <Route path="/signup" element={<Signup/>}/>
     
//      <Route path="/login" element={<Login />} />
//      </Routes>
//      <Toaster/>
//      </div>
//      </>
    
//   )
// }

// export default App

import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Signup from './components/Signup';
import Courses from './courses/Courses';
import Home from './Home/Home';
import Login from './components/Login';
import { useAuth } from './context/AuthProvider';

function App() {
  const [authUser] = useAuth(); // Assuming useAuth returns [authUser, setAuthUser]

  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={authUser ? <Courses /> : <Navigate to="/signup" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
