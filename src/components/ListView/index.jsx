import React from "react";
class Todo extends React.Component {
  render() {
    const { todo } = this.props;
    return (
      <>
        <p>id :{todo.id}</p>
        <p>tittle :{todo.tittle}</p>
      </>
    );
  }
}

export default Todo;
