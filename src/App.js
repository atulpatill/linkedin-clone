import React from 'react';
import Header from "./Header";
import Sidebar from './Sidebar';
import Feed from './Feed';
import Login from './Login';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';




function App() {
  
const user = useSelector(selectUser);
console.log(user)
  return (
    <>
    {
      !user ? (<Login />) : (
        <div className = "app_wrapper">
      
        <Header />
        <div className = "app_body">
          <Sidebar />
          <Feed />
        
        </div>

   </div>
      ) 
    }
   
   
 </> );
}

export default App;
