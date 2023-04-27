import { useContext } from "react";
import { CartContext } from "./Moviecart";
import "./AllMovieList.css";
import "./Genre.css";

const AddToCart = () => {
  const cart = useContext(CartContext);

  const handleRemove = (movie) => {
    const newCart = cart.filter((m) => m.id !== movie.id);
    localStorage.setItem("cart", JSON.stringify(newCart));
    window.location.reload();
  };

  return (
    <>
      {cart.length === 0 ? (
        <div className="allMovieListl">
          <marquee
            style={{
              textTransform: "uppercase",
              color: "green",
              padding: "16px",
              fontSize: "25px",
            }}
            behavior="alternate"
            width="100%"
            direction="left"
          >
            Your cart is empty
          </marquee>
        </div>
      ) : (
        <div className="allMovieListl">
          <h1
            className="rm"
            style={{ color: "dARKred", fontSize: "xx-large" }}
          >
            HERE IS YOUR FAVOURITE MOVIE LIST
          </h1>
          <div className="MovBg">
            {cart.map((movie) => (
              <section key={movie.id}>
                <div className="cards">
                  <div className="image_box">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                    />
                  </div>
                  <div className="details">
                    <h1>{movie.title}</h1>
                    <p>{movie.overview}</p>
                    <p>Release Date {movie.release_date}</p>
                    <button onClick={() => handleRemove(movie)}>Remove</button>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default AddToCart;
