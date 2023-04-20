
import AddToCart from './AddToCart';
import Moviecart from './Moviecart';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SeatReservation from './SeatReservation';
import CheckoutPage from './CheckoutPage';


function App() {
  return (
    
  <div className="App">

  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Moviecart />} />
  <Route path="BookSeat" element={<SeatReservation />} />
  <Route path="checkout" element={<CheckoutPage />}/>
  </Routes>
  </BrowserRouter>

  </div>
  );
}

export default App;
