import React, { useState, useEffect } from "react";
import "../../App.css"
import Blog from "../blog";

const Member = () => {
  const [data, setData] = useState([]);
  

  useEffect(() => {
    takeData();
  }, []);

  const takeData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setData(data);
  };

  return (
    <div>
      <h1>Member List</h1>
      <div className="data-map">
        {data.map((i) => (
          <Blog key={i.id} name={i.name} email={i.email} id={i.id} 
          />
        ))}
      </div>
    </div>
  );
};

export default Member;
