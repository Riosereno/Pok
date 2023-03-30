import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Contact = () => {
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data sended");
    // Redireccionar al usuario al Home
    navigate("/");
  };

  return (
    <>
      <Navbar />
      <h1>Contact</h1>
      <form onSubmit={handleSubmit}>
        <h2>Dejanos tu correo</h2>
        <input type="email" />
        <br />
        <button type="submit">Send data</button>
      </form>
    </>
  );
};

export default Contact;
