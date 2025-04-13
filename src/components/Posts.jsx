import React from "react";
import posts from "../mock/posts";
import { Link, useNavigate } from "react-router-dom";

const Posts = ()=> {

 
    const navgiate = useNavigate();
    return (
      <>
        {posts.map((item) => {
          return (
            <>
              {" "}
              <div key={item.id}>
                <ul>
                  <li>{item.id}</li>
                  <li>{item.tittle}</li>
                  <li>{item.text}</li>
                </ul>
              </div>
              <button onClick={()=>navgiate("/")}>GO TO Home</button>
            </>
          );
        })}
      </>
    );
  
}

export default Posts;
