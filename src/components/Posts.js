import React, { useState, useEffect } from "react";
import axios from "axios";

//materila UI

const Posts = ({ posts, getPosts }) => {
  useEffect(() => {
    getPosts();
  }, []);

  console.log(posts.data);
  return (
    <div>
      {posts?.data?.map((post) => {
        return (
          <div style={{ display: "inline-block" }}>
            <div
              style={{
                width: "200px",
                border: "1px solid gray",
                borderRadius: "0% 0% 0% 0% / 0% 0% 0% 0%",
                boxShadow: "10px 10px rgba(0,0,0,.15)",
                margin: "15px",
                padding: "5px",
                textAlign: "center",
              }}
            >
              <div>
                <p>{post.age}</p>
                <p>{post.title}</p>
                <p>{post.message}</p>
                <p>{post.name}</p>
              </div>
              <div>
                <button>Learn More</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
