import React, { createContext, useContext, useState, useEffect } from "react";

const MemberContext = createContext();

export const useMemberContext = () => useContext(MemberContext);

export const MemberProvider = ({ children }) => {
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
    <MemberContext.Provider value={data}>
      {children}
    </MemberContext.Provider>
  );
};
