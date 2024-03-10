import React, { useState } from "react";
import data from "../../data";
import "./accordion.css";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const handleClickSelection = (currentId) => {
    setSelected(currentId === selected ? null : currentId);
  };
  return (
    <div>
      <h1>Accordion</h1>
      {data.length > 0 ? (
        data.map((item) => (
          <div key={item.id} className="accordion-item">
            <div
              className="question"
              onClick={() => handleClickSelection(item.id)}
            >
              <h3>{item.question}</h3>
              <span>{selected === item.id ? "-" : "+"}</span>
            </div>
            <div>
              {selected === item.id ? (
                <p className="answer">{item.answer}</p>
              ) : null}
            </div>
          </div>
        ))
      ) : (
        <div>No data found!</div>
      )}
    </div>
  );
};

export default Accordion;
