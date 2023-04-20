import React from "react";
import "./CheckoutPage.css";
import { CartContext } from "./Moviecart";
import { Link } from "react-router-dom";
import { setp,settp } from "./SeatReservation";


const CheckoutPage = ({ selectedSeats, totalPrice }) => {

//     const cart = useContext(CartContext);
//   const convenienceCharge = totalPrice * 0.0175;
//   const paymentAmount = totalPrice + convenienceCharge;


  return (
    <div className="checkout">
      <h2>Private Checkout</h2>
      <div>
        <span>Movie Name: </span>
        <span>***</span>
      </div>
      <div>
        <span>Seats:</span>
        <span>***</span>
        {/* <span>
          {selectedSeats && selectedSeats.length > 0
            ? selectedSeats
                .map((seat) => <span key={seat}>{seat}, </span>)
                .join("")
            : ""}
        </span> */}
      </div>
      <div>
        <span>Price: </span>
        {/* <span>{cart && cart.id }</span> */}
         <span>***</span>  
      </div>
      <div>
        <span>Convenience Charge (1.75%): </span>
        <span>***</span>
      </div>
      <div>
        <span>*** </span>
        {/* <span>{paymentAmount} Rupees</span> */}
        <span>... Rupees</span> 
      </div>
      <h3>Payment Information</h3>
      <form>
        <div>
          <label htmlFor="name">Name on Card:</label>
          <input type="text" id="name" name="name" required/>
        </div>
        <div>
          <label htmlFor="cardNumber">Card Number:</label>
          <input type="text" id="cardNumber" name="cardNumber" required/>
        </div>
        <div>
          <label htmlFor="expiryDate">Expiry Date:</label>
          <input type="text" id="expiryDate" name="expiryDate" required />
        </div>
        <div>
          <label htmlFor="securityCode">Security Code:</label>
          <input type="text" id="securityCode" name="securityCode" required/>
        </div>
        <div>
          <label htmlFor="zipCode">ZIP/Postal Code:</label>
          <input type="text" id="zipCode" name="zipCode" required/>
        </div>
       
       
        <Link to="/">
          
          <button onClick={()=>alert("Seat is Booked Thankyou For Booking 👍 (dummy payment)")} 
          
          type="submit">
          Pay Invoice</button>
        </Link>

      </form>
    </div>
  );
};
export default CheckoutPage;


