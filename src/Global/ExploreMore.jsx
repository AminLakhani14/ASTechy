import "../CSS/style.css"

function ExploreMore(props) {
    return (
        <div className="row ExploreMoreForm" style={{marginTop:"90px"}}>
        <div className="col-sm-6 col-order-2 ">
        <a href="/" className="ExploreImage">
            <img className="imageSetting"  src={props.picture} alt="profile picture"/>
        </a>
        </div>
        <div className="col-sm-5 col-order-1 my-5">
        <h1><strong style={{color:"#2693fa"}}>{props.heading}</strong><strong>{props.heading2}</strong></h1>    
        <p>{props.subheading}</p>     
        <div className="my-5 leftsideExploreButton">
        <button onClick={props.handleController} className="primaryButton mx-2"><b>Explore More</b></button>
        <button className="rightGenericButton mx-2"><b>{props.secondbutton}</b></button>
        {props.visible == true ? (
              <button className="rightGenericButton mx-2"><b>App Store</b></button>
            ) : (
              ""
            )}
        </div>
        </div>
        <div className="col-sm-1 my-5">
      </div>
      </div>

    );
  }
  
  export default ExploreMore;
  