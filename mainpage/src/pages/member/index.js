import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Member = () => {
  useEffect(() => {
    takeData();
  }, []);

  const [data, setData] = useState([]);

  const takeData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const res = await data.json();
    //console.log(res)
    setData(res);
  };
  return (
    <div>
      <h1>Member</h1>
      {data.map((i) => {
        return (
          <div key={i.id}>
            <h3>
              <Link to={`/about/${i.email }`}>
              {i.name}
              </Link>
            </h3>
          </div>
        );
      })}
    </div>
  );
};

export default Member;
