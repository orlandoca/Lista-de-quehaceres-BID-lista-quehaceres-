import React from "react";
import { useState } from "react";

export default function Task({ name, deletetask }) {
  const [hide, setHide] = useState(false);
  const [taskActive, setTaskActive] = useState(true);
  if (taskActive) {
    return (
      <div className="task">
        <h2 style={{ textDecoration: hide ? "line-through" : "" }}>
          {name}{" "}
          <input
            type="checkbox"
            checked={hide}
            onChange={() => setHide(!hide)}
          />
        </h2>{" "}
        <button onClick={() => setTaskActive(false)}>Delete</button>
      </div>
    );
  } else {
    return <div></div>;
  }
}
