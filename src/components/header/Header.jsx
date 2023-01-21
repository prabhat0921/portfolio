import './header.css'
import Nav from '../nav/Nav'

const Header = () => {
  
  return (
    <div id='header'>
      <Nav className='smallScreen'/>
      <div className="container">
        <nav className='bigScreenNav'>
            <h2 className='logo'><span>P</span>rabhat.</h2>
            <ul id='sidemenu'>
                <li><a href="#header">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#" >Services</a></li>
                <li><a href='#' >Projects</a></li>
                <li><a href="#contact">Contact</a></li>
                
            </ul>
            
        </nav>
        <div className="header-text">
            <p>Hi, my name is</p>
            <h2>Prabhat Kushwaha. </h2>
            <h2 id='fade'>I build things for Frontend Development.</h2>
        </div>
      </div>
    </div>
  )
}

export default Header
