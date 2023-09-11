import React from "react";
import Card from "./Component/Card";
import { data } from "./data/data";
import "./App.css";

const App = () => {
  console.log(data);
  return (
    <div className="App">
      <div className="navbar">
        <div className="logo-container">
          <h1 className="logo">EDYODA</h1>
          <p>stories</p>
        </div>
        <div className="category">
          <p>Explore categories</p>
          <img
            src="https://static.thenounproject.com/png/2022881-200.png"
            alt=""
          />
        </div>
      </div>
      <section className="tools">
        <div className="post">Latest Posts</div>
        <div className="filter-icon">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/010/155/655/small/filter-icon-sign-symbol-design-free-png.png "
            alt=""
          />
          <div className="text">Filter by category </div>
        </div>

        <div className="filter">
          <p className="filter-optons">All</p>
          <p className="filter-optons">Artificial Intellegence</p>
          <p className="filter-optons">Cloud Computing</p>
          <p className="filter-optons">DevOps</p>
          <p className="filter-optons">Programming Languages</p>
          <p className="filter-optons">Mobile Application Development</p>
          <p className="filter-optons">Technology and Tools</p>
          <p className="filter-optons">Get a Job in a Tech Company</p>
          <p className="filter-optons">Others</p>
        </div>
      </section>

      <div className="card-container">
        {data.map((data, index) => (
          <Card key={index} data={data} />
        ))}
      </div>

      <footer className="footer">
        <div ></div>
      </footer>
    </div>
  );
};

export default App;
