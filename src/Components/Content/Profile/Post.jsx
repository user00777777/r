
import React from "react";
import Posts from "./Posts";
import s from  "./Profile.module.css";

let Post=(props)=>{

  let pos=props.posts;
  let newPostText=pos.newPostText


     let p=pos.post.map((el)=><Posts message={el.message} key={el.id} liceCount={el.liceCount}/>)
//let newPostElement= React.createRef()
let addPost=()=>{props.onAddPost()}
let postChange=(event)=>{  
  let text=event.target.value  
     //newPostElement.current.value
props.onPostChange(text)}



return<div>
    <div className={s.i}>
     <div><textarea onChange={postChange} value={newPostText}/></div>
     <button onClick={addPost} >Нажми</button>
       
 <div className={s.pr}>
            {p}
        </div>
     </div> 

</div>


}
export default Post