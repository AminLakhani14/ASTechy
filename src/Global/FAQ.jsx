import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "../CSS/FAQ.css";
import backGroundImages from "../Images/FAQBackground.png";
class Panel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      height: 0,
    };
  }

  componentDidMount() {
    window.setTimeout(() => {
      const el = ReactDOM.findDOMNode(this);
      const height = el.querySelector(".panel__inner").scrollHeight;
      this.setState({
        height,
      });
    }, 333);
  }

  render() {
    const { label, content, activeTab, index, activateTab } = this.props;
    const { height } = this.state;
    const isActive = activeTab === index;
    const innerStyle = {
      height: `${isActive ? height : 0}px`,
    };

    return (
      <div>
        <div className="panel" role="tabpanel" aria-expanded={isActive} style={isActive?{backgroundColor:'white',color:'white'}:{backgroundColor:'transparent',color:'white'}}>
          <button className="panel__label" role="tab" onClick={activateTab}>
            {label}
          </button>
          <div
            className="panel__inner"
            style={innerStyle}
            aria-hidden={!isActive}
          >
            <p className="panel__content">{content}</p>
          </div>
        </div>
      </div>
    );
  }
}

export class Accordion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 0,
    };

    this.activateTab = this.activateTab.bind(this);
  }

  activateTab(index) {
    this.setState((prev) => ({
      activeTab: prev.activeTab === index ? -1 : index,
    }));
  }

  render() {
    const { panels } = this.props;

    const { activeTab } = this.state;
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
                activateTab={this.activateTab.bind(null, index)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
