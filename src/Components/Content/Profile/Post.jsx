import React from "react";
import { addPostActionCreator, updateNewPostTextCreator } from "../../../redux/posts-reduser";
import Posts from "./Posts";
import s from  "./Profile.module.css";

let Post=(props)=>{ 
  


     let p=props.post.map((el)=><Posts message={el.message} liceCount={el.liceCount}/>)
let newPostElement=React.createRef()
let addPost=()=>{props.dispatch(addPostActionCreator())}
let onPostChange=()=>{  
  let text=newPostElement.current.value
let action=updateNewPostTextCreator(text)
   
 
    props.dispatch(action)
}



return<div>
    <div className={s.i}>
     <div><textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/></div>
     <button onClick={addPost} >Нажми</button>
       
 <div className={s.pr}>
            {p}
        </div>
     </div> 

</div>


}
export default Post