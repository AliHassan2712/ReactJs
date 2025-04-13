// Functional component

// import "./button.css";
// const Button = ({ tittle = "NO Button" , isActive }) => {
//   return (
//     <>
//       <button className= {isActive ? 'activeButton' : ''}>{tittle}</button>
//     </>
//   );
// };
// export default Button;


// Class Comp

import React from "react";
import "./button.css";
class Button extends React.Component{
    render(){
        const { tittle = "NO Button" , isActive } = this.props
        return(
               <>
      <button className= {isActive ? 'activeButton' : ''}>{tittle}</button>
    </> 
        )
    }
}
export default Button;