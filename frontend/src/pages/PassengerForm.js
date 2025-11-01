import { useState } from "react";
import api from "../services/api";

export default function PassengerForm({ onAdded }) {
  const [data, setData] = useState({
    name: "",
    passport_number: "",
    email: "",
    phone_number: ""
  });

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post("passengers/", data)
      .then(() => {
        alert("Passenger added successfully!");
        onAdded();
        setData({ name: "", passport_number: "", email: "", phone_number: "" });
      })
      .catch(() => alert("Error adding passenger."));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={data.name} onChange={handleChange} placeholder="Name" />
      <input name="passport_number" value={data.passport_number} onChange={handleChange} placeholder="Passport Number" />
      <input name="email" value={data.email} onChange={handleChange} placeholder="Email" />
      <input name="phone_number" value={data.phone_number} onChange={handleChange} placeholder="Phone Number" />
      <button type="submit">Add Passenger</button>
    </form>
  );
}
