import './header.css'
const Header =(props)=>{
  return(
    <header>
      <h2>Logo</h2>
      <ul>
        <li className ={props.myPage === 'home' ? 'active' : ''}>Home</li>
        <li className ={props.myPage === 'about' ? 'active' : ''}>About</li>
<li className ={props.myPage === 'other' ? 'active' : ''}>Other</li>
      </ul>
    </header>
    )
}

export default Header