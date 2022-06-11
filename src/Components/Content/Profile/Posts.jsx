import s from "./Profile.module.css"
let Posts=(props)=>{ 
   return <div className={s.item}>
         <img  className={s.img} src="https://cdn2.iconfinder.com/data/icons/avatars-60/5985/30-Scientist-256.png"
        alt=""/>
       {props.message}
       <div><span>Like</span>{props.liceCount}</div>
   </div>

}
export default Posts