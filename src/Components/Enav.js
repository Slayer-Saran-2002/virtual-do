import React from 'react'
import "./styles.css"


const Navbar = ()=> {
  // const togglebutton = document.getElementById('toggle-button');
  // const navilist = document.getElementById('navlist');
  // togglebutton.addEventListener('click',()=> {
  //   navilist.classList.toggle('active');
  // })

  return (
    <>
    <div className="App">
      <nav className="navbar">
         <div className="nav-logo"><a href="/"><img src="favicon-32x32.png" alt=""/></a></div>
          <ul className="nav-list" id='navlist'>
            <li className="list-items"><a href="/">Dashboard</a></li>
            <li className="list-items"><a href="/">Tasks</a></li>
            <li className="list-items"><a href="/">Projects</a></li>
            <li className="list-items"><a href="/">Profile</a></li>
          </ul>
          
        <div class="menu" id='toggle-button' >
            <div class="menu-line"></div>
            <div class="menu-line"></div>
            <div class="menu-line"></div>
        </div> 
      </nav>
    </div>
    </>
  )
}

export default Navbar