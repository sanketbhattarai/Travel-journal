import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <img src={`./images/${props.item.image}`} alt="" className="card-image" />
      <div className="card-stats">
        <i class="fa-sharp fa-solid fa-location-dot"></i>
        <span className="card-location">
          {props.item.location}
          <span>
            <a href="{props.item.Url}" className="card-url">
              View in Google Map
            </a>
          </span>
        </span>
        <h3 className="card-name">{props.item.title}</h3>
        <span className="card-date">
          {props.item.startDate} - {props.item.endDate}
        </span>
        <p className="card-description">{props.item.description}</p>
      </div>
    </div>
  );
}
