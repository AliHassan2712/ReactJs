import React, { Component } from "react";
import axios from "axios";

import Container from "../components/Container"

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoadding: false,
    };
  }

  // componentDidMount(){
  //   this.setState({isLoadding : true})
  //   fetch('https://jsonplaceholder.typicode.com/todos')
  //   .then(response => response.json())
  //    .then(data => this.setState({data})).catch((e)=>{
  //     console.log(e)
  //    }).finally(()=>{
  //     this.setState({isLoadding : false})
  //    })
  // }

  async componentDidMount() {
    this.setState({ isLoadding: true });
    const newpost = {
      
    }
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      
      this.setState({ data, isLoadding: false });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoadding: false });
    }
  }

  render() {
    const { data, isLoadding } = this.state;

    return (
      <>
        {isLoadding ? (
          "loading.........."
        ) : (
          <Container>
            {" "}
            <div>
              <h1>Todos</h1>

              {data.map((item) => (
                <div key={item.id}>
                  <h3>{item.title}</h3>
                  <p>ID: {item.id}</p>
                  <p>Completed: {item.completed ? "Yes" : "No"}</p>
                </div>
              ))}
            </div>
          </Container>
        )}
      </>
    );
  }
}

export default Todo;
