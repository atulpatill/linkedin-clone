import React, { useState } from 'react'
import "./css/login.css"


function Login() {
    
const [signup , setSignUp] =  useState(false)
    return (
        <>
        <div className = "loginScreen">
            <img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTgrn-3ixTHV5vJXVKtq-XsbEbc1j4LAcwgw3drJVefFIvxmMriUKFejEkSPitKWXwEvU&usqp=CAU"/>
            { 
            signup === true ? ( <form>
                <input type = "text" placeholder = "Full Name" />
                <input type = "text" placeholder = "Profile Picture URL" />
                <input type = "email" placeholder = "E-mail" />
                <input type = "password" placeholder = "Password" />
 
                <input type= "submit" value = "sign up" />
                <h4>Already a member? <span onClick = {e => setSignUp(false)}>LogIn Here</span></h4>
            </form>) 
            :
             (  <form>
               <input type = "email" placeholder = "E-mail" />
               <input type = "password" placeholder = "Password" />

               <input type= "submit" value = "sign In" />
               <h4>Not a member? <span onClick = {e => setSignUp(true)}>Register Here</span></h4>
           </form>) 
            }
       

         
        </div>
        </> 
    )
    
}

export default Login
