import "../CSS/style.css"

function Heading(props) {
    return (
      <div className=" HeadingBackground ">
        <div className="row  w-50">
          <div className="col-lg-3"></div>
          <div className="col-lg-9 justify-content-center d-flex flex-column">
          <h1 style={{ fontSize: "40px" }}><b>{props.text}</b></h1>
          <p style={{ fontSize: "24px" }}>{props.paragraph}</p>
          <button onClick={props.Handler} className="HeaderButton">Let's Get Started</button>
          </div>
          </div>
      </div>
    );
  }
  
  export default Heading;
  