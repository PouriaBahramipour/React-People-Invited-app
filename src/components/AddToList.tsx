import React, { useState } from "react";
import { IState as Props } from "../interfaces";

interface IProps {
  people: Props["people"];
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    url: "",
    note: "",
  });

  const changeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const handleClick = (): void => {
    if (!input.name || !input.age) return;
    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        url: input.url,
        note: input.note,
      },
    ]);

    setInput({
      name: "",
      age: "",
      url: "",
      note: "",
    });
  };

  return (
    <div className="AddToList">
      <input
        type="text"
        className="AddToList-input"
        name="name"
        placeholder="Name"
        onChange={changeHandler}
        value={input.name}
      />
      <input
        type="number"
        className="AddToList-input"
        name="age"
        placeholder="Age"
        onChange={changeHandler}
        value={input.age}
      />
      <input
        type="text"
        className="AddToList-input"
        name="url"
        placeholder="Image Url"
        onChange={changeHandler}
        value={input.url}
      />
      <textarea
        className="AddToList-input"
        name="note"
        placeholder="Note"
        onChange={changeHandler}
        value={input.note}
      />
      <button className="AddToList-btn" onClick={handleClick}>
        Add to List
      </button>
    </div>
  );
};

export default AddToList;
