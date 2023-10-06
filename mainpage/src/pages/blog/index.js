import React from 'react'

const Blog = ({ name, email, id },) => {

  
  return (
    <div>
      <h1>Information Page</h1>
      <h2>Name:{name}</h2>
      <h3>Email:{email}</h3>
      <p>Member Number:{id}</p>
    </div>
  );
};


export default Blog
