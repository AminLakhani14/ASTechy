import { Link } from "react-router-dom";
import "../CSS/style.css";
import Islamabad from "../Images/Islamabad.png";
import canada from "../Images/canada.png";
import tajmahal from "../Images/tajmahal.png";
import lahore from "../Images/lahore.png";


function Cities(props) {
  return (
    <div className="d-flex citiesBackground justify-content-center align-content-center" >
      <div className="w-25">
        <div className="investNowCard">
          <img
            src={Islamabad}
            className="citiesLogo"
          ></img>
          <label className="stageTextColor">
            Islamabad
          </label>
          <label className="secondaryLabelColor">
            DHA 2 , Main G.T Road, Islamabad, Pakistan Phone: 051-5411399
          </label>
        </div>
      </div>
      <div className="w-25">
        <div className="investNowCard">
          <img src={lahore} className="citiesLogo"></img>
          <label className="stageTextColor">
            Lahore
          </label>
          <label className="secondaryLabelColor">
            955 Service Road, Block L, Johar Town, Lahore
          </label>
        </div>
      </div>
      <div className="w-25">
        <div className="investNowCard">
          <img src={tajmahal} className="citiesLogo"></img>
          <label className="stageTextColor">
            Headquarter
          </label>
          <label className="secondaryLabelColor">
            Toronto, Ontario, CANADA
          </label>
        </div>
      </div>
      <div className="w-25">
        <div className="investNowCard">
          <img src={canada} className="citiesLogo"></img>
          <label className="stageTextColor">
            India
          </label>
          <label className="secondaryLabelColor">
            2nd Floor Indraprastha Tower 6, Mahatma Gandhi Rd, Indore, MP,
            452007, India
          </label>
        </div>
      </div>
    </div>
  );
}

export default Cities;
