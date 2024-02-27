import "../CSS/style.css"

function LeftSideExploreMore(props) {
    return (
        <div className="row m-3">
        <div className="col-sm-1"></div>

        <div className="col-sm-5 my-5">
        <h1>{props.heading}</h1>    
        <p>{props.subheading}</p>     
        <div className="my-5">
        <button onClick={props.handleController} className="primaryButton mx-2"><b>Explore More</b></button>
        <button className="SecondaryButton mx-2"><b>Google Play</b></button>
        </div>
        </div>
        <div className="col-sm-6">
        <a href="/" className="">
            <img className="imageSetting"  src={props.picture} alt="profile picture"/>
        </a>
        </div>
      </div>

    );
  }
  
  export default LeftSideExploreMore;
  