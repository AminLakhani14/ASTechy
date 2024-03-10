import "../CSS/style.css";

function Heading(props) {
  return (
    <div className="pt-5 HeadingBackground d-flex justify-content-center align-items-center">
      <div className="w-50">
        <div className="col-lg-3"></div>
        <div className=" justify-content-center d-flex flex-column">
          <h1 style={{ fontSize: "55px" }} className="mb-4">
            <b>{props.text}</b>
          </h1>
          <p style={{ fontSize: "20px", fontWeight: "400",color:"#ffffff" }}>
            {props.paragraph}
          </p>
          <div className="d-flex mt-4">
            <button onClick={props.Handler} className="HeaderButton">
              Let's Get Started
            </button>
            {props.visible == true ? (
              <button className="ExploreButton mx-3">Explore Services</button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className="w-25"></div>
    </div>
  );
}

export default Heading;
