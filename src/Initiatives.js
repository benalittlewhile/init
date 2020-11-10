import React from "react";
import Combatant from "./Combatant.js";
import "./App.css";

function Initiatives() {
  const mockCombatant = [
    {
      name: "",
      initiative: undefined,
      category: "",
    },
  ];
  const [combatants, setCombatants] = React.useState([]);
  const [newCombatantName, setNewCombatantName] = React.useState();
  const [newCombatantInitiative, setNewCombatantInitiative] = React.useState();
  const [newCombatantCategory, setNewCombatantCategory] = React.useState();

  let addCombatant = () => {
    let newCombatant = {
      name: newCombatantName,
      initiative: newCombatantInitiative,
      category: newCombatantCategory,
    };

    let newCombatantList = [...combatants, newCombatant];
    newCombatantList = newCombatantList.sort((a, b) => {
      return a.initiative < b.initiative ? 1 : -1;
    });

    setCombatants(newCombatantList);
  };
  return (
    <div className="InitiativeWrapper">
      <div className="Initiatives">
        {combatants.length > 0 &&
          combatants.map((thisCombatant) => (
            <div className="Combatant">
              <Combatant
                name={thisCombatant.name}
                initiative={thisCombatant.initiative}
                category={thisCombatant.category}
              />
            </div>
          ))}
      </div>
      <div className="newCombatantBar">
        <input
          type="text"
          label="new name"
          defaultValue="new name"
          onChange={(event) => setNewCombatantName(event.target.value)}
        ></input>
        <input
          type="text"
          label="new initiative"
          defaultValue="new initiative"
          onChange={(event) => setNewCombatantInitiative(+event.target.value)}
        ></input>
        <input
          type="text"
          label="new category"
          defaultValue="new category"
          onChange={(event) => setNewCombatantCategory(event.target.value)}
        ></input>
        <button
          onClick={() => {
            addCombatant();
          }}
        >
          add new boi
        </button>
      </div>
    </div>
  );
}

export default Initiatives;
