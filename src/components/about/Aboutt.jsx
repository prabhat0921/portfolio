import React from 'react'
import './about.css'
import USER from '../assets/images/user.png'

const Aboutt = () => {
    var tablinks = document.getElementsByClassName('tab-links');
    var tabcontents = document.getElementsByClassName('tab-contents');
    function opentab(tabname){
        for(var x of tablinks){
            x.classList.remove('active-link');
        }
        for(var y of tabcontents){
            y.classList.remove('active-tab')
        }
        document.getElementById(tabname).classList.add('active-tab')

    }
    
  return (
    <div id='about'>
      <div className="container">
        <div className="row">
            <div className="about-col-1">
                <img src={USER} alt="" />
            </div>
            <div className="about-col-2">
                <h1 className='sub-title'>About Me</h1>
                <p>Hello! My name is Prabhat Kushwaha and I enjoy creating things that live on the internet. My interest in web development started back in 2021 when I joined my college to Pursue Computer Science, I have tried HTML and CSS before when i was in 8th grade but because of some reason i didnt continue.
                   <div><br /></div>Fast Forward to today i have accomplished a lot of knowledge in Frontend Development --- as per the latest required technologies, HTML5, CSS, JavaScript, ReactJS.
                    Apart from these in my college I have learned C and OOPs in C++ and DSA with C++.
                    Yet there is a lot more to LEARN.
                </p>
                    <div className="tab-title">
                        <p className='tab-links active-link' onClick={()=>opentab('skills')}>Skills</p>
                        <p className='tab-links ' onClick={()=>opentab('experience')} >Experience</p>
                        <p className='tab-links ' onClick={()=>opentab('education')} >Education</p>
                    </div>
                    <div className="tab-contents active-tab" id='skills'>
                        <ul>
                            <li><span>FRONTEND DEVELOPMENT</span><br />HTML, CSS, JavaScript, Reactjs</li>
                            <li><span>UI/UX</span><br />-----</li>
                            <li><span>App Development</span><br />-----</li>
                        </ul>
                    </div>
                    <div className="tab-contents" id='education'>
                        <ul>
                            <li><span>2019</span><br />Intermidiate - CBSE</li>
                            <li><span>2021-2024</span><br />BCA - Bachelor in Computer Application</li>

                        </ul>
                    </div>
                    <div className="tab-contents" id='experience'>
                        <ul>
                            <li><span>2023</span><br />Internship at ---</li>
                        </ul>
                    </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutt
