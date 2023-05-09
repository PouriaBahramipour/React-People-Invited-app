import React, { useState } from "react";
import { IState } from "./interfaces";
import "./App.css";
import PeopleList from "./components/PeopleList";
import AddToList from "./components/AddToList";

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "pourya",
      age: 32,
      url: "https://i.ytimg.com/vi/GRIfm826bnw/maxresdefault.jpg",
      note: "aaa",
    },
  ]);

  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <PeopleList people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
