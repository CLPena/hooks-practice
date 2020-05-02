import React from "react";
import Idea from "./Idea";

const IdeasContainer = ({ ideas, deleteIdea }) => {
  return (
    <div className="ideas-container">
      {ideas.map((idea) => (
        <Idea
          title={idea.title}
          description={idea.description}
          id={idea.id}
          key={idea.id}
          deleteIdea={deleteIdea}
        />
      ))}
    </div>
  );
};

export default IdeasContainer;
