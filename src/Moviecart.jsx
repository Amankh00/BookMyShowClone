import React,{useEffect,useState, createContext} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavBar from "./NavBar";
import "./Moviecart.css"
import "./NavBar"
import AboutUs from "./AboutUs"
import "./AllMovieList.css"
import { useAuth0 ,} from "@auth0/auth0-react";


const srch = createContext();
const setSrch = createContext();
const CartContext = createContext();




const Moviecart = ()=>
{
    const[data,setData]=useState([]);
    const[search,setSearch]= useState("");
    const[cart,setCart]=useState([]);
    const { isAuthenticated } = useAuth0();

    const handleCart = (movie) => {
      if (isAuthenticated) {
        if (cart.some((m) => m.id === movie.id)) {
          alert("This movie is already added to your favorites.");
        } else {
          const newCart = [...cart, movie];
          setCart(newCart);
          localStorage.setItem("cart", JSON.stringify(newCart));
        }
      } else {
        alert("Please log in to add movies to your favorites.");
      }
    };
    
    const handleseat = () => 
    {
      if (isAuthenticated)
       {
        return (
          <Link to="/BookSeat">
            <button>BookShow</button>
          </Link>
        );
      } else
       {
        alert('Please log in to BookShow.');
       }
    };


    useEffect(() => {
      const axi = async () => {
        const res = await axios.get(
          "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1cf50e6248dc270629e802686245c2c8"
        );
        setData(res.data.results);
      };
    
      axi();
    
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        setCart(JSON.parse(storedCart));
      }
    }, []);
    


  const toggleCart = () => {

       const hideDiv = document.getElementById('hide');
          if (hideDiv.style.display === 'none') 
          {
            hideDiv.style.display = 'block';
          }
           else
            {
            hideDiv.style.display = 'none';
            }
};



return( 
        <>
        
<CartContext.Provider value={cart}>
<srch.Provider value={search}>
<setSrch.Provider value={setSearch}>
<NavBar/>

</setSrch.Provider>
</srch.Provider>


      <div className='loveIcon' onClick={toggleCart} >
            
            <span> 
             <abbr title="FAVOURITE ITEM HERE">
             <i class="fa-solid fa-heart" id="myBtn" ></i>
            </abbr>
            </span>
            
            <span id="sp">{isAuthenticated ? cart.length : 0}</span>

             
       </div>


{/* <div id="hide" >
<AddToCart />
</div>      */}

       <div className="allMovieList">
   
          <h1 className='rm' style={{color:"white"}}>Recommended Movies</h1>

            <div className="MovBg">

         {
         data.filter((value)=>
         {
          if(search === "")
          {
            return value;
          }
          else if(value.title.toLowerCase().includes(search.toLowerCase()))
          {
            return value;
          }
      
         }).map((movie)=>
            (
             
            <section  key={movie.id}>
             <div className="cards">
                  
                  <div className="image_box">
                     <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}alt={movie.title}/>
                  </div>
              
                   <div className="details">
                   
                        <h1>{movie.title}</h1>
                        <p>{movie.overview}</p>
                        <p>Release Date {movie.release_date}</p>
           
    {
      (isAuthenticated) ? <Link to="/BookSeat">  <button >BookShow</button> </Link> : 
      <button onClick={handleseat}>BookShow</button>

     }
                        <button  onClick={() => handleCart(movie)} id='cartBtn'>Add to Favourite</button>
                   </div>
              
              </div>
             </section>
            
            )
            )
            
        }
              </div>
              </div>

<AboutUs/>
</CartContext.Provider>

          </>
        )
      }
 export default Moviecart;
export {srch,setSrch,CartContext };