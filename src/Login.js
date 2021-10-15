import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginuser } from './features/userSlice'
import "./css/login.css"
import { auth } from "./firebase"


function Login() {
    
const [signup , setSignUp] =  useState("")
const [name , setName] =  useState("")
const [photoURL , setPhotoURL] =  useState("")
const [email , setEmail] =  useState("")
const [password , setPassword] =  useState("")

const dispatch = useDispatch();

const register = (e) => {
    e.preventDefault();

    if(!name){
        return alert("Name is required");
    }
    if(!photoURL){
        return alert("Profile is required");
    }
    if(!email){
        return alert(" Email is required");
    }
    if(!password){
        return alert("password is required");
    }

    auth.createUserWithEmailAndPassword(email , password).then((userAuth) =>{
        userAuth.user.updateProfile({
            displayName : name ,
            photoURL : photoURL
        }).then(()=> {
            dispatch(loginuser({
            email: userAuth.user.email,
            uid : userAuth.user.uid,
            photoURL:photoURL,
            displayName:name
            }))
        })
    }).catch(error => alert(error));

    setName("");
    setPhotoURL("");
    setEmail("");
    setPassword("");     
}

const signIn = (e) =>{
    e.preventDefault();
    if(!email){
        return alert(" Email is required");
    }
    if(!password){
        return alert("password is required");
    }

    // Here we did destructuring of user.

    auth.signInWithEmailAndPassword(email , password).then(({user}) =>{
        dispatch(loginuser({
            email: user.email,
            uid : user.uid,
            photoURL:user.photoURL,
            displayName: user.displayName
            }))
    }).catch(error =>alert(error));
}
    return (
        <>
        <div className = "loginScreen">
            <img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTgrn-3ixTHV5vJXVKtq-XsbEbc1j4LAcwgw3drJVefFIvxmMriUKFejEkSPitKWXwEvU&usqp=CAU"/>
            { 
            signup === true ? ( 
              <form onSubmit = {register}>
                <input type = "text" placeholder = "Full Name" value = {name} onChange ={e=> setName(e.target.value)}/>
                <input type = "text" placeholder = "Profile Picture URL" value ={photoURL} onChange ={e=> setPhotoURL(e.target.value)}/>
                <input type = "email" placeholder = "E-mail" value = {email} onChange ={e=> setEmail(e.target.value)} />
                <input type = "password" placeholder = "Password" value = {password} onChange ={e=> setPassword(e.target.value)}/>
 
                <input type= "submit" value = "sign up" />
                <h4>Already a member? <span onClick = {e => setSignUp(false)}>LogIn Here</span></h4>
            </form>) 
            :
             (  <form onSubmit = {signIn}>
               <input type = "email" placeholder = "E-mail"  value = {email} onChange ={e=> setEmail(e.target.value)} />
               <input type = "password" placeholder = "Password" value = {password} onChange ={e=> setPassword(e.target.value)}/>

               <input type= "submit" value = "sign In" />
               <h4>Not a member? <span onClick = {e => setSignUp(true)}>Register Here</span></h4>
           </form>) 
            }
       

         
        </div>
        </> 
    )
    
}

export default Login
