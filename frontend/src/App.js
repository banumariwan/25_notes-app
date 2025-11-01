// src/App.js
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import FlightList from "./pages/FlightList"; // existing
import PassengerList from "./pages/PassengerList";
import BookingList from "./pages/BookingList";
import Dashboard from "./pages/Dashboard"; // existing

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow p-3 flex gap-4">
          <Link to="/dashboard" className="font-semibold">Dashboard</Link>
          <Link to="/" className="font-semibold">Flights</Link>
          <Link to="/passengers" className="font-semibold">Passengers</Link>
          <Link to="/bookings" className="font-semibold">Bookings</Link>
        </nav>

        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<FlightList />} />
          <Route path="/passengers" element={<PassengerList />} />
          <Route path="/bookings" element={<BookingList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
