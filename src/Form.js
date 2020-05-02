import React, { useState } from "react";

const Form = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addNewIdea = (e) => {
    e.preventDefault();
    const idea = {
      id: Date.now(),
      title: title,
      description: description,
    };
    props.submitIdea(idea);
    setTitle("");
    setDescription("");
  };

  return (
    <form>
      <label>TITLE:</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <label>DESCRIPTION:</label>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button className="submit" onClick={addNewIdea}>SUBMIT</button>
    </form>
  );
};

export default Form;
