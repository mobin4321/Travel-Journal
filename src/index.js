import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import Header from "./Header";
import Card from "./Card";
import data from "./data";

const Page = () => {
  const cards = data.map((item) => <Card key={item.key} {...item} />);
  return (
    <div className="container">
      <div className="window">
        <Header />
        <div className="cards">{cards}</div>
      </div>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page />);
