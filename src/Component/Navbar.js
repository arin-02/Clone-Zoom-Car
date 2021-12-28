import React from 'react'
import logo from './logo.png'
function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark " style={{backgroundColor:"#000"}}>
  <div className="container-fluid">
        <div className="container">
      <a href=""><i className="fas fa-bars pt-3 pe-3" style={{color:"white" ,fontSize:"150%"}}></i></a>
    <a className="navbar-brand" href="#">
      <img src={logo} alt="logo" width="150px"/>
    </a>
        </div>
  
    
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent ">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item px-5">
        <a className="navbar-brand" href="#">Become a host</a>

        </li>
        <li className="nav-item px-5">
        <a className="navbar-brand" href="#">ZMS</a>

        </li>
        <li className="nav-item px-5">
        <a className="navbar-brand" href="#">Login/Signup</a>

        </li>
        
      </ul>
     
    </div>
  </div>
</nav>
        </div>
    )
}

export default Navbar
