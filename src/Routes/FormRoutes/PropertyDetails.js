import React from "react";
import "../Styles/InfoHeader.css";
import Navbar from "./Navbar";
import "../Styles/PropertyDetails.css";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ProppertyDetails(){

const [data,setData]=useState({
    length: "",
    breadth: "",
    total_area: "",
    area_unit: "",
    no_of_bhk: "",
    no_of_floors: "",
    attached: "",
    western_toilet: "",
    furnished: "",
    car_parking: "",
    lift: "",
    electricity: "",
    facing: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("PROPERTY_DETAILS", JSON.stringify(data));
    navigate("/generalinfo");
    console.log(data);
  };

return(
    <>
    <div id="container">
    <div className="navbar">
    <div className="navheading">
      <h1>Add New Property</h1>
    </div>
    <div className="sections">
      <span id="bi">
        <div style={{ marginTop: "10px", color: "white" }}>
          <span
            className="numbers">
            1
          </span>{" "}
          Basic Info
        </div>
      </span>

      <span id="pd">
        <div style={{ marginTop: "10px" }}>
          <span className="numbers"
          style={{
            borderRadius: "10px",
            backgroundColor: "white",
            color: "black",
            padding: "0px 6px 0px 6px",
          }}
          >2</span> Property Detail
        </div>
      </span>

      <span id="gi">
        <div style={{ marginTop: "10px" }}>
          <span className="numbers">3</span> General Info
        </div>
      </span>

      <span id="li">
        <div style={{ marginTop: "10px" }}>
          <span className="numbers">4</span> Location Info
        </div>
      </span>
    </div>
  </div>
    </div>
    </>
)

}
