import React, { useState, useEffect } from "react";
import "../CSS/FAQ.css";

const Panel = ({ label, content, activeTab, index, activateTab }) => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const el = document.querySelector(`#panel-${index} .panel__inner`);
      const newHeight = el ? el.scrollHeight : 0;
      setHeight(newHeight);
    }, 333);

    return () => clearTimeout(timeout);
  }, [index]);

  const isActive = activeTab === index;
  const innerStyle = {
    height: `${isActive ? height : 0}px`,
  };

  return (
    <div id={`panel-${index}`}>
      <div
        className="panel"
        role="tabpanel"
        aria-expanded={isActive}
        style={isActive ? { backgroundColor: "white", color: "white" } : { backgroundColor: "transparent", color: "white" }}
      >
        <button className="panel__label" role="tab" onClick={() => activateTab(index)}>
          {label}
        </button>
        <div className="panel__inner" style={innerStyle} aria-hidden={!isActive}>
          <p className="panel__content">{content}</p>
        </div>
      </div>
    </div>
  );
};

const Accordion = ({ panels }) => {
  const [activeTab, setActiveTab] = useState(0);

  const activateTab = (index) => {
    setActiveTab(prevActiveTab => prevActiveTab === index ? -1 : index);
  };

  return (
    <div style={{ backgroundColor: "#2693fa" }}>
      <div className="mb-4 text-center pt-5 text-light">
        <h1>FAQ's</h1>
      </div>
      <div className="d-flex justify-content-center">
        <div className="accordion" role="tablist">
          {panels.map((panel, index) => (
            <Panel
              key={index}
              activeTab={activeTab}
              index={index}
              {...panel}
              activateTab={activateTab}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
