import React, { useState } from "react";
import "./App.css";
import Form from "./Form";

const App = () => {
  const [state, setState] = useState({
    ideas: [
      {
        id: 1,
        title: "Defeat the Tiger King",
        description: "He deserves it",
      },
      {
        id: 2,
        title: "Find Carole's husband",
        description: "WHERE IS HE?!",
      },
    ],
  });

  const submitIdea = (idea) => {
    const allIdeas = [...state.ideas, idea];
    setState({ ideas: allIdeas });
  };

  return (
    <div className="app">
      <header className="app-header">
        <Form submitIdea={submitIdea} />
      </header>
    </div>
  );
};

export default App;
