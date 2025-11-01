import { useEffect, useState } from "react";
import api from "../services/api";
import PassengerForm from "./PassengerForm";

export default function PassengerList() {
  const [passengers, setPassengers] = useState([]);

  const loadPassengers = () => {
    api.get("passengers/").then((res) => setPassengers(res.data));
  };

  useEffect(() => {
    loadPassengers();
  }, []);

  return (
    <div>
      <h2>Passengers</h2>
      <PassengerForm onAdded={loadPassengers} />

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Passport</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {passengers.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.passport_number}</td>
              <td>{p.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
