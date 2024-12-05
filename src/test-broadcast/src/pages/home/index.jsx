import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./home.css";

const HomePage = () => {
  const routes = [
    { path: "/audio-reciever", title: "Audio Receiver" },
    { path: "/audio-sender", title: "Audio Sender" },
  ];
  return (
    <div>
      <div className="home-container">
      {routes.map((route, index) => (
        <Link key={index} to={route.path} className="route-card-link">
          <div className="route-card">
            <h2>{route.title}</h2>
            <div className="route-description">Go to {route.title}</div>
          </div>
        </Link>
      ))}
      </div>
    </div>
  );
};

export default HomePage;
