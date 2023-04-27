import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AddToCart from "./AddToCart";
import "./Genre.css"

const Genre = () => {

  const [data, setData] = useState([]);
  const [endpoint, setEndpoint] = useState("");
  const [search,setSearch]= useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.omdbapi.com/?apikey=23d531f5&s=${endpoint}`


        );
        setData(response.data.Search);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [endpoint]);

  const handleButtonClick = (event) => {
    setEndpoint(event.target.value);
  };

 const toggleC = () => {

    const hideDiv = document.getElementById('hidy');
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

<div className="event"  onClick={toggleC}>
  <nav>
  <ul>
  <li><button value="Movies"  onClick={handleButtonClick}>Movies</button></li>
  <li> <button value="Events" onClick={handleButtonClick}>Events</button></li>
  <li> <button value="Plays" onClick={handleButtonClick}>Plays</button></li>
  <li> <button value="Sports" onClick={handleButtonClick}>Sports</button></li>
  <li><button value="Activities" onClick={handleButtonClick}>Activities</button></li>
  <li> <button value="buzz" onClick={handleButtonClick}>buzz</button></li>
  </ul>
  </nav>
  </div>

        <div className="genrebtn"  onClick={toggleC}>

          
  <button value="Action" onClick={handleButtonClick}>Action</button>
  <button value="Adventure" onClick={handleButtonClick}>Adventure</button>
  <button value="Animation" onClick={handleButtonClick}>Animation</button>
  <button value="Comedy" onClick={handleButtonClick}>Comedy</button>
  <button value="Documentary" onClick={handleButtonClick}>Documentary</button>
  



  
  <button value="Drama" onClick={handleButtonClick}>Drama</button>
  <button value="Family" onClick={handleButtonClick}>Family</button>
  <button value="Fantasy" onClick={handleButtonClick}>Fantasy</button>
  <button value="History" onClick={handleButtonClick}>History</button>
  <button value="Horror" onClick={handleButtonClick}>Horror</button>




  
  <button value="Mystery" onClick={handleButtonClick}>Mystery</button>
  <button value="Romance" onClick={handleButtonClick}>Romance</button>
  <button value="Science Fiction" onClick={handleButtonClick}>Science Fiction</button>
  <button value="TV Movie" onClick={handleButtonClick}>TV Movie</button>
  <button value="Thriller" onClick={handleButtonClick}>Thriller</button> 
 




  <button value="War" onClick={handleButtonClick}>War</button>
  <button value="Western" onClick={handleButtonClick}>Western</button>
</div>

   <div id="hide" >  <AddToCart />   </div>      


   <div className="allMovieList">  

     <div id="hidy" > <input type="text"placeholder="🔎 Genre Movie Serch here"
     id="searchBar" value={search}  onChange={(e)=>{setSearch(e.target.value)}}/>
     </div>  
       
       
        <div className="MovBg">
          
          {data && data.filter((value)=>
         {
          if(search === "")
          {
            return value;
          }
          else if(value.Title.toLowerCase().includes(search.toLowerCase()))
          {
            return value;
          }
       
       
         }).map((movie) => (
           
          <section
                key={movie.imdbID}npm start
                style={{width:"fit-content",
                margin:"5% auto",
              }}
            >
              <div className="cards">
                <div className="image_box">
                  <img src={movie.Poster} alt={movie.Title} />
                </div>
               

              </div>
              
              
               <div
                  className="details"
                  style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
              
                <h1 style={{color:"red",width:"fit-content"}}>{movie.Title}</h1>
                {/* <p>{movie.plot} */}
                <p>
                this is intresting and oscar winning movie thanks for visiting our site</p>
                {/* <p>IMDBID = {movie.imdbID}</p> */}
                <p>{movie.Type}</p>
                <p style={{ color: "white", textAlign: "center" }}>
                  Release Year: {movie.Year}
                </p>
                {/* { <button  style={{ marginLeft: "20px" }}>Add to Favourite</button> } */}
           
               <Link to="BookSeat"> <button>BOOK MY TICKET</button></Link>
               
              </div>
            </section>
          ))}
        </div>
</div>

    </>
  );
};

export default Genre;
