import React, { useState } from "react";
import data from "../../data";
import "./accordion.css";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const singleSelection = (currentId) => {
    setSelected(currentId === selected ? null : currentId);
  };

  const multiSelection = (currentId) => {
    let copyMultiple = [...multiple];
    let findIndexOfCurrentId = copyMultiple.indexOf(currentId);

    if (findIndexOfCurrentId === -1) {
      copyMultiple.push(currentId);
    } else {
      copyMultiple.splice(findIndexOfCurrentId, 1);
    }
    setMultiple(copyMultiple);
  };
  //   console.log(multiple);

  return (
    <div>
      <h1>Accordion</h1>
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        {enableMultiSelection
          ? "Disable Multi-Selection"
          : "Enable Multi-Selection"}
      </button>
      {data.length > 0 ? (
        data.map((item) => (
          <div key={item.id} className="accordion-item">
            <div
              className="question"
              onClick={() =>
                enableMultiSelection
                  ? multiSelection(item.id)
                  : singleSelection(item.id)
              }
            >
              <h3>{item.question}</h3>
              <span>{selected === item.id ? "-" : "+"}</span>
            </div>
            <div>
              {enableMultiSelection
                ? multiple.indexOf(item.id) !== -1 && (
                    <p className="answer">{item.answer}</p>
                  )
                : selected === item.id && (
                    <p className="answer">{item.answer}</p>
                  )}
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
