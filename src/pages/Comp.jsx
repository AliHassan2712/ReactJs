import { use, useState } from "react";
import Header from "../components/Header";

const Comp = () => {
 
  return (
    <>
      <Header />
      <h2>Comp Page</h2>
    
    </>
  );
};

export default Comp;









// const [state, setState] = useState("ALI");
// const [counter, setCounter] = useState(0);

// const handleChane = () => {
//   setState("hassan");
// };

// const handleIncrement = () => {
//   setCounter((counter) => counter + 1);
//   setCounter((counter) => counter + 1);
// };



// {state}
// <button onClick={handleChane}>click</button>
// <button onClick={handleIncrement}>Increment</button>
// {counter}