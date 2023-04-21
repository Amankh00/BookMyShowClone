

import React,{useContext} from "react";
import {srch,setSrch,CartContext} from "./Moviecart";
import Genre from "./Genre";
import { useAuth0 ,} from "@auth0/auth0-react";
import "./NavBar.css"
import "./Genre.css"


const NavBar = () =>
{
    const first = useContext(srch);
    const second = useContext(setSrch);
    const { user, isAuthenticated, isLoading } = useAuth0();
    const { loginWithRedirect, logout} = useAuth0();

    return(
        <>
       <header>
        <nav>

        <div className="head">
        <a href="/" name="red">
        {/* <marquee width="200px" direction="right" height="90px">   */}
        <h1><abbr title="Book My Show">
        <img src="https://logodix.com/logo/2010904.jpg" alt="" className="logo"/>
        </abbr></h1>
        {/* </marquee>    */}
        </a>
        
        <input st type="text" name=""  placeholder=
        "🔎 Search for Movies , Events" id="searchBar"
         value={first} onChange={(e)=>{second(e.target.value)}}/>
     
     
     
   <div className="Loginfo">

      {
        isAuthenticated  &&
       (
         <div className="LogIn">
           <p>  {user.name}</p>
           <img width={"44px"} src={user.picture} alt={user.name} />
         </div>
       )
      }

      
      { !isAuthenticated  
      ?
        
        <div> 
            <button style={{backgroundImage:"linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1))",          color:"white",margin:"10px"}} onClick={() => loginWithRedirect()}>Log In</button>
         </div>      

        :
         
         <div>  
           <button style={{backgroundImage:"linear-gradient(90deg, rgba(8,12,43,1) 19%, rgba(61,114,215,1) 50%, rgba(52,141,161,1) 90%)",color:"white",margin:"10px"}}  onClick={() => logout({ logoutParams: { returnTo:    window.location.origin } })}>
                                               Log Out
           </button>
         </div>
  }

       </div>


        </div>
        </nav>
       </header>
     

       <Genre/>

        </>
    )
}

export default NavBar;