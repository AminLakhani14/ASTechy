import "../CSS/style.css"

function Heading(props) {
    return (
      <div className="HeadingBackground">
          <h1>{props.text}</h1>
      </div>
    );
  }
  
  export default Heading;
  