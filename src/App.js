import "./App.css";
import Form from "./components/Form";
import Posts from "./components/Posts";
import axios from "axios";
import { useState } from "react";

//import Grid from "@mui/material/Grid";

function App() {
  const [posts, setPosts] = useState("");
  const getPosts = async () => {
    const allPosts = await axios.get("http://localhost:5000/posts");
    setPosts(allPosts);
  };

  return (
    <div
      style={{
        padding: "30px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridGap: "20px",
      }}
    >
      <div>
        <Posts posts={posts} getPosts={getPosts} />
      </div>
      <div>
        <Form getPosts={getPosts} />
      </div>
    </div>
  );
}

export default App;
