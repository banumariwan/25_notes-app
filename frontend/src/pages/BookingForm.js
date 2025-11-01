import { useState, useEffect } from "react";
import api from "../services/api";

export default function BookingForm({ onAdded }) {
  const [data, setData] = useState({
    flight: "",
    passenger: "",
    seat_number: "",
    status: "Confirmed"
  });

  const [flights, setFlights] = useState([]);
  const [passengers, setPassengers] = useState([]);

  useEffect(() => {
    api.get("flights/").then((res) => setFlights(res.data));
    api.get("passengers/").then((res) => setPassengers(res.data));
  }, []);

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post("bookings/", data)
      .then(() => {
        alert("Booking added successfully!");
        onAdded();
        setData({ flight: "", passenger: "", seat_number: "", status: "Confirmed" });
      })
      .catch(() => alert("Error adding booking."));
  };

  return (
    <form onSubmit={handleSubmit}>
      <select name="flight" value={data.flight} onChange={handleChange}>
        <option value="">Select Flight</option>
        {flights.map((f) => (
          <option key={f.id} value={f.id}>{f.flight_number}</option>
        ))}
      </select>

      <select name="passenger" value={data.passenger} onChange={handleChange}>
        <option value="">Select Passenger</option>
        {passengers.map((p) => (
          <option key={p.id} value={p.id}>{p.name}</option>
        ))}
      </select>

      <input name="seat_number" value={data.seat_number} onChange={handleChange} placeholder="Seat Number" />

      <select name="status" value={data.status} onChange={handleChange}>
        <option value="Confirmed">Confirmed</option>
        <option value="Cancelled">Cancelled</option>
      </select>

      <button type="submit">Add Booking</button>
    </form>
  );
}
