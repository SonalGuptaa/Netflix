import "./navbar.scss"
import { useState } from "react"
import { ArrowDropDown, Notifications, Search,  } from "@mui/icons-material"

const Navbar = () =>{
  const [isScrolled,setIsScrolled] = useState(false);
  window.onscroll = () =>{
    setIsScrolled(window.pageXOffset === 0?false:true);
    return() =>(window.onscroll = null);
  };
  // console.log(isScrolled);
  return (
    <div className={isScrolled ? "navbar scrolled":"navbar"}>
    {/* navbar */}
    <div className="container">
        <div className="left">
          {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Logonfx.png/1024px-Logonfx.png" alt="logo"></img> */}
          <img src="https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png" alt="logo"></img>
      
        <span>Homepage</span>
        <span>Series</span>
        <span>Movies</span>
        <span>New and Popular</span>
        <span>My List</span>
        </div>
        <div className="right">
           <Search className="icon"/>
           <span>KID</span>
           <Notifications className="icon"/>
           <img src="https://media.glamour.com/photos/58a72f5277d3274eb940938f/4:3/w_1987,h_1490,c_limit/hermione.jpg" alt="profile_img"></img>

           <div className="profile">
           <ArrowDropDown className="icon"/>
           <div className="options">
             <span>Settings</span>
             <span>Logout</span>
           </div>
           </div>

        </div>

    </div>
    </div>
  )
}

export default Navbar
