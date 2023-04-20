import { useState } from 'react';
import './SeatReservation.css';
import { Link } from 'react-router-dom';


const SeatReservation = () => {
  const [seats, setSeats] = useState([
    { id: 1, price: 10, isBooked: false },
    { id: 2, price: 10, isBooked: false },
    { id: 3, price: 10, isBooked: false },
    { id: 4, price: 10, isBooked: false },
    { id: 5, price: 10, isBooked: false },
    { id: 6, price: 10, isBooked: false },
    { id: 7, price: 10, isBooked: false },
    { id: 8, price: 10, isBooked: false },
    { id: 9, price: 15, isBooked: false },
    { id: 10, price: 15, isBooked: false },
    { id: 11, price: 15, isBooked: false },
    { id: 12, price: 15, isBooked: false },
    { id: 13, price: 15, isBooked: false },
    { id: 14, price: 15, isBooked: false },
    { id: 15, price: 15, isBooked: false },
    { id: 16, price: 15, isBooked: false },
    { id: 17, price: 20, isBooked: false },
    { id: 18, price: 20, isBooked: false },
    { id: 19, price: 20, isBooked: false },
    { id: 20, price: 20, isBooked: false },
    { id: 21, price: 20, isBooked: false },
    { id: 22, price: 20, isBooked: false },
    { id: 23, price: 20, isBooked: false },
    { id: 24, price: 20, isBooked: false },
    { id: 25, price: 20, isBooked: false },
    { id: 26, price: 20, isBooked: false },
    { id: 27, price: 20, isBooked: false },
    { id: 28, price: 20, isBooked: false },
    { id: 29, price: 20, isBooked: false },
    { id: 30, price: 20, isBooked: false },
    { id: 31, price: 20, isBooked: false },
    { id: 32, price: 20, isBooked: false },
    { id: 33, price: 20, isBooked: false },
  
  ]);


  const [selectedSeats, setSelectedSeats] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleSeatClick = (seatId) => 
  {
    const updatedSeats = seats.map((seat) => 
    {
      if (seat.id === seatId) 
      {
        return { ...seat, isBooked: !seat.isBooked };
      } 
      else 
      {
        return seat;
      }
    });

    setSeats(updatedSeats);

    if (selectedSeats.includes(seatId)) 
    {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatId));
    } 
    else
     {
      setSelectedSeats([...selectedSeats, seatId]);
     }
  };

  const handleCheckout = () =>
   {
    const selectedSeatPrices = selectedSeats.map(
      (seatId) => seats.find((seat) => seat.id === seatId).price
    );

    const totalSelectedSeatsPrice = selectedSeatPrices.reduce(
      (total, price) => total + price,
      0
    );
    
    setTotalPrice(totalSelectedSeatsPrice);
    alert(`Total price: $${totalSelectedSeatsPrice}`);

};


      const getSeatClass = (seat) => 
      {
        let seatClass = 'seat';
      
        if (seat.isBooked) 
        {
          seatClass += ' booked';
        } 
        else if (selectedSeats.includes(seat.id)) 
        {
          seatClass += ' selected';
        }
        return seatClass;
      };
    


    return(
       <>
     
      <div className="theater">
         <h2 >Select Your Seats</h2>
         <div className="screen">Scr📺een</div>
         <div className="seats">
          {seats.map((seat) => (
          <div key={seat.id} className={getSeatClass(seat)}
          onClick={() => handleSeatClick(seat.id) }>{seat.id}
        </div>  ))}
      </div>
       
       
       <div className="booking-info">
          <h3>Booking Information</h3>
          <div>
          <span >Selected Seats: </span>
          {selectedSeats.length > 0 ? (
          selectedSeats.map((seat) => <span key={seat}>{seat}, </span>)
          ) : (
         <span>None</span>
          )}
      </div>
      
      <div>
        <span >Total Price: </span>
        <span >${totalPrice} </span>
      </div>


      <Link to="/checkout">
      <button className='chkout' onClick={handleCheckout} disabled={selectedSeats.length === 0}>
       Checkout
      </button>
      </Link>
      
      </div>
      </div>
    </>
    )
    }

    export default SeatReservation;
