import React from "react";

const Idea = ({ key, title, description, id, deleteIdea }) => {
  return (
    <div className="idea-card" id={id}>
      <h3>{title}</h3>
      <p>{description}</p>
      <button id={id} onClick={() => deleteIdea(id)}>
        DELETE
      </button>
    </div>
  );
};

export default Idea;
