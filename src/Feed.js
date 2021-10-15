import { useEffect, useState } from "react";
import React from 'react'
import { Avatar} from '@material-ui/core'
import PhotoIcon from '@material-ui/icons/Photo';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TodayIcon from '@material-ui/icons/Today';
import AssignmentIcon from '@material-ui/icons/Assignment';
import './css/feed.css'
import Post from './Post';
import firebase from "firebase";
import { db } from './firebase';
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function Feed(){
    const user = useSelector(selectUser);
    const [posts , setPost ] = useState([]);
    const [input, setInput] = useState()
    const submitPost = (e) =>{
        e.preventDefault();
       db.collection("posts").add({
           name : user.displayName,
           description: "this is test",
           message: input,
           photoURL: user.photoURL,
           timestamp: firebase.firestore.FieldValue.serverTimestamp(),
       });
       setInput(" ")
    }
    useEffect(() => {
      db.collection("posts").orderBy("timestamp", "desc").onSnapshot(snapshot => {
          setPost(snapshot.docs.map(doc=> ({
              id : doc.id ,
              data: doc.data()
          })))
      })
    }, [])
    console.log(posts);
    return( <div className = "feed">
       <div className ="feed__input">
           <div className ="feed__form">
           <Avatar src = {user.photoURL}/>
           <form  onSubmit ={submitPost}>
               <input type="text" placeholder =" Start a Post" value={input} onChange ={e=>setInput(e.target.value)}/>
               <input type ="submit" />
           </form>
           </div>
    
       <div className ="feed__options">
           <div className ="option">
           <PhotoIcon style ={{color: '#70b5f9'}}/>
           <span>Photos</span>

           </div>
           <div className ="option">
           <YouTubeIcon style ={{color: '#7fc15e'}}/>
           <span>Video</span>

           </div>
           <div className ="option">
           <TodayIcon style ={{color: '#e7a33e'}}/>
           <span>Event</span>

           </div>
           <div className ="option">
           <AssignmentIcon style ={{color: '#fc9295'}}/>
           <span>Write Article</span>

           </div>

       </div>
     
       </div>

       {
           posts.map(({id, data: { name , description , message , photoURL}}) => {
               return    <Post key ={id} name= {name} description= {description} message= {message} photoURL={photoURL}/>
           })
       }
    
      
       
    </div>
   )
}

export default Feed