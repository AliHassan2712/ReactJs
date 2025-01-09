import './button.css'
const Button =({tittle="No Tittle" , isActive })=>{
  return(
  <button className= {isActive ? "activeButton" : ""}>{tittle}</button>
    )
}

export default Button