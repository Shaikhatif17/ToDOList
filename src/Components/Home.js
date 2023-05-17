import React , {useState} from "react";


const Home = () => {
    const [inputValue, setInputValue]= useState(0);

const increment=()=>{
setInputValue(inputValue + 1);
};
const decrement=()=>{
    setInputValue( inputValue - 1);
}

    const btnStyle={
        padding :"20px",
        border: "none",
        backgroundColor:"#f1f1f1",
        margin:"10px"
        
    }


  return (
    <div>
      <input
        style={{ padding: 20, border: "1px solid rgba(0,0,0,0.4)" }}
        type="number"
        placeholder="enter something"
        value={inputValue}
        readOnly

      
        
      />
      <button style={btnStyle} onClick={increment}>+</button>
      <button style={btnStyle} onClick={decrement}>-</button>
    </div>
  );
};

export default Home;
