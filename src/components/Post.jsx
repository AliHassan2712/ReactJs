import { useParams } from "react-router-dom";
import posts from "../mock/posts";

const Post = () => {
  const { id } = useParams();
  const post = posts.find((item) => item.id === Number(id));

  return (
    <>
      {post ? (
        <div>
          <p>{post.id}</p>
          <p>{post.tittle}</p>
          <p>{post.text}</p>
        </div>
      ) : (
        <p>Post not found!</p>
      )}
    </>
  );
};

export default Post;