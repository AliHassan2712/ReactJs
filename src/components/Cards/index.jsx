import './card.css'
import Buttons from '../Buttons'
const Card =({name,parg,imgSrc,Childern })=>{
  return(
    <div className = "card">
     <p>Name is {name}</p>
     <div>{parg}</div>
  
       {imgSrc ?<img src={imgSrc}/> : '' }
     {/*imgSrc && <img src={imgSrc}/>*/}
    
    <Buttons tittle ="Click" isActive/>
    </div>
    )
} 

export default Card
