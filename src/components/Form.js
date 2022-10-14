import React, { useState, useEffect } from "react";
import axios from "axios";

const Form = ({ getPosts }) => {
  const [postData, setPostData] = useState({
    title: "",
    message: "",
    name: "",
    age: "",
  });

  useEffect(() => {
    getPosts();
  }, [postData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/posts", postData);
    clear();
  };

  const clear = () => {
    setPostData({
      title: "",
      message: "",
      name: "",
      age: "",
    });
  };

  return (
    <form autoComplete="off" noValidate onSubmit={handleSubmit}>
      <input
        placeholder="Title"
        name="title"
        label="Title"
        value={postData.title}
        onChange={(e) => setPostData({ ...postData, title: e.target.value })}
      />
      <input
        placeholder="Message"
        name="message"
        label="Message"
        value={postData.message}
        onChange={(e) => setPostData({ ...postData, message: e.target.value })}
      />
      <input
        placeholder="Name"
        name="name"
        label="Name"
        value={postData.name}
        onChange={(e) => setPostData({ ...postData, name: e.target.value })}
      />
      <input
        placeholder="age"
        name="age"
        label="Age"
        value={postData.age}
        onChange={(e) => setPostData({ ...postData, age: e.target.value })}
      />

      <button type="submit" fullWidth>
        Submit
      </button>

      <button onClick={clear}>Clear</button>
    </form>
  );
};

export default Form;
