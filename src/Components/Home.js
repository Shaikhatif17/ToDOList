import React from "react";

const Home = () => {
    let inputValue;

  return (
    <div>
      <input
        style={{ padding: 20, border: "1px solid rgba(0,0,0,0.4)" }}
        type="text"
        placeholder="enter something"
        onChange={(e)=>{
          inputValue =e.target.value;
          console.log(inputValue);
        }}
      />
    </div>
  );
};

export default Home;
