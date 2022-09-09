import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dispensaries = () => {
  const user_data = localStorage.getItem("user_data");
  console.log(user_data);
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("X-Authorization-Token")) {
      navigate("/");
    }
  }, []);

  return (
    <div className="container my-4">
      <h2 className="my-4">Welcome, {user_data.name}</h2>
    </div>
  );
};

export default Dispensaries;
