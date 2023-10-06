import React, { useEffect } from "react";

const About = ({ match }) => {
  useEffect(() => {
    console.log(match);
  }, []);

  return (
    <div>
      <h2>{match.params.email}</h2>
    </div>
  );
};

export default About;
