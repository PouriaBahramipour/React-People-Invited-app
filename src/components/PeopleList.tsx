import React from "react";
import { IState } from "../interfaces";

const PeopleList: React.FC<IState> = ({ people }) => {
  const renderList = (): JSX.Element[] => {
    return people.map((person) => {
      return (
        <li className="List">
          <div className="List-header">
            <img src={person.url} className="List-img" />
            <h2>{person.name}</h2>
          </div>
          <p>{person.age} years old</p>
          <p className="List-note">{person.age}</p>
        </li>
      );
    });
  };

  return <ul>{renderList()}</ul>;
};

export default PeopleList;
