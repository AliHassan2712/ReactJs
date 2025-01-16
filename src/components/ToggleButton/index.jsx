import './toggle.css'
import React from 'react'
class ToggleButton extends React.Component{
  state = {
    theme : 'light'
  }
  
  changeTheme = ()=>{
    this.setState((prevState)=>{
       return prevState.theme === 'light' ? {theme: 'dark'} : {theme: 'light'}
    })
  }

  
  render(){
    return(
  <button  onClick = {this.changeTheme} className ={`buttonToggle ${this.state.theme}`}>
    {this.state.theme}
  </button>
    )
}
  
  }
  

export default ToggleButton