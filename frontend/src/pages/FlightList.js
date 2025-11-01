import { useEffect, useState } from "react";
import api from "../services/api";
import FlightForm from "./FlightForm";

export default function FlightList() {
  const [flights, setFlights] = useState([]);

  const loadFlights = () => {
    api.get("flights/").then((res) => setFlights(res.data));
  };

  useEffect(() => {
    loadFlights();
  }, []);

  return (
    <div>
      <h2>Flights</h2>
      <FlightForm onAdded={loadFlights} />

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Flight</th>
            <th>Origin</th>
            <th>Destination</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((f) => (
            <tr key={f.id}>
              <td>{f.id}</td>
              <td>{f.flight_number}</td>
              <td>{f.origin}</td>
              <td>{f.destination}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
