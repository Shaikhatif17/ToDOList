import React from "react";

const Home = () => {
  return (
    <div className="container">
      <h1>Daily Goals</h1>
      <form>
        {" "}
        <input type="text" placeholder="Title" />
        <textarea placeholder="Decription"></textarea>
        <button type="submit">ADD</button>
      </form>
    </div>
  );
};

export default Home;