import './header.css'
import {FaBars} from 'react-icons/fa'
import {FaTimes} from 'react-icons/fa'

const Header = () => {

  function UpdateProjects(){
    alert('Will be Updated soon')
  }
  var sidemenu = document.getElementById("sidemenu");
  function openmenu(){
    sidemenu.style.right= '0';
  }
  function closemenu(){
    sidemenu.style.right = '-200px'
  }
  return (
    <div id='header'>
      <div className="container">
        <nav>
            <h2 className='logo'><span>P</span>rabhat.</h2>
            <ul id='sidemenu'>
                <li><a href="#header">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#" onClick={()=> UpdateProjects()}>Services</a></li>
                <li><a href='#' onClick={()=> UpdateProjects()}>Projects</a></li>
                <li><a href="#contact">Contact</a></li>
                <FaTimes className='fas' onClick={()=>closemenu()} />
            </ul>
            <FaBars className='fas' onClick={()=>openmenu()}/>
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
