import React from "react";

function Combatant(props) {
  return (
    <div className="Combatant">
      <h1>{props.name}</h1>
      <h2>initiative: {props.initiative}</h2>
      <h2>category: {props.category}</h2>
    </div>
  );
}

export default Combatant;
