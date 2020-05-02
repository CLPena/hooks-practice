import React, { useState } from "react";
import "./App.css";
import Form from "./Form";
import IdeasContainer from "./IdeasContainer";

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
      {
        id: 3,
        title: "Set the Tigers Free",
        description: "Make sure you're not covered in sardine oil first",
      }
    ],
  });

  const submitIdea = (idea) => {
    const allIdeas = [...state.ideas, idea];
    setState({ ideas: allIdeas });
  };

  const deleteIdea = (id) => {
    const filteredIdeas = state.ideas.filter((idea) => idea.id !== id);
    setState({ ideas: filteredIdeas });
  };

  return (
    <main>
      <header className="app-header">
        <h1>PENNY FOR YOUR THOUGHTS? </h1>
        <Form
          submitIdea={submitIdea}
        />
      </header>

      <IdeasContainer
        ideas={state.ideas}
        deleteIdea={deleteIdea}
      />
    </main>
  );
};

export default App;
