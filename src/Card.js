import React from "react";
import location from "./images/location.png";

export default function Card(props) {
  return (
    <div className="card">
      <img className="card-thumbnail" src={props.imageUrl} />
      <div className="data">
        <div className="location">
          <img src={location} />
          <span> {props.location}</span>
          <a href={props.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h1>{props.title}</h1>
        <p className="date">{`${props.startDate + " - " + props.endDate}`}</p>
        <p className="description"> {props.description}</p>
      </div>
    </div>
  );
}
