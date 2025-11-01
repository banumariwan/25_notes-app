import { useState } from "react";
import api from "../services/api";

export default function FlightForm({ onAdded }) {
  const [data, setData] = useState({
    flight_number: "",
    origin: "",
    destination: "",
    departure_time: "",
    arrival_time: "",
    status: "Scheduled",
  });

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post("flights/", data)
      .then(() => {
        alert("Flight added successfully!");
        onAdded(); // refresh list
        setData({
          flight_number: "",
          origin: "",
          destination: "",
          departure_time: "",
          arrival_time: "",
          status: "Scheduled",
        });
      })
      .catch(() => alert("Error adding flight."));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="flight_number" value={data.flight_number} onChange={handleChange} placeholder="Flight Number" />
      <input name="origin" value={data.origin} onChange={handleChange} placeholder="Origin" />
      <input name="destination" value={data.destination} onChange={handleChange} placeholder="Destination" />
      <input type="datetime-local" name="departure_time" value={data.departure_time} onChange={handleChange} />
      <input type="datetime-local" name="arrival_time" value={data.arrival_time} onChange={handleChange} />
      <select name="status" value={data.status} onChange={handleChange}>
        <option value="Scheduled">Scheduled</option>
        <option value="Delayed">Delayed</option>
        <option value="Cancelled">Cancelled</option>
      </select>
      <button type="submit">Add Flight</button>
    </form>
  );
}
