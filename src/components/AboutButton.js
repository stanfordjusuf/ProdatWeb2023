import React from "react";
import { Link } from "react-router-dom";

export default function AboutButton() {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url("https://i.ibb.co/yBK1q0h/pexels-stanley-morales-1454360.jpg")` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Who Are We? 😎</h1>
          <p className="mb-5">
            Prodat is a student led organisation with the vision of 
            becoming a game changer in the education industry by providing
            a learning and social media platform built by students for students.
          </p>
          <Link to="/about">
          <button className="btn btn-primary">Learn More About Us</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
