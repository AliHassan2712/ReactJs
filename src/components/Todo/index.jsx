import React from "react";
import ListView from "../ListView"
class Todo extends React.Component {
  render() {
    const myData = [
      {
        id: 1,
        tittle: "alihassan1",
      },
      {
        id: 2,
        tittle: "alihassan2",
      },

      {
        id: 3,
        tittle: "alihassan3",
      },
      {
        id: 4,
        tittle: "alihassan4",
      },
    ];



    return <>
    
    {myData.map((todo)=>{
       return <ListView todo={todo} key={todo.id}/>
    })}
    
    </>;
  }
}

export default Todo;
