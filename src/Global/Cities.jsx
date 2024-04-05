import { Link } from "react-router-dom";
import "../CSS/style.css";
// import Islamabad from "../Images/Islamabad.png";
// import canada from "../Images/canada.png";
// import tajmahal from "../Images/tajmahal.png";
// import lahore from "../Images/lahore.png";
import liberty from "../Images/liberty.svg";
import mazarequaidtomb from "../Images/mazarequaidtomb.svg";




function Cities(props) {
  return (
    <div className="d-flex citiesBackground justify-content-center align-content-center" >
      <div className="w-25">
        <div className="investNowCard">
          <img
            src={mazarequaidtomb}
            className="citiesLogo"
          ></img>
          <label className="stageTextColor">
            Karachi
          </label>
          <label className="secondaryLabelColor">
           Karachi, Sindh, Pakistan
          </label>
        </div>
      </div>
      <div className="w-25">
        <div className="investNowCard">
          <img src={liberty} className="citiesLogo"></img>
          <label className="stageTextColor">
            Headquarter
          </label>
          <label className="secondaryLabelColor">
          milwaukee, Wisconsin, USA
          </label>
        </div>
      </div>
    </div>
  );
}

export default Cities;
