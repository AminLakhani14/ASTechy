import { Link } from "react-router-dom";
import "../CSS/style.css";
import Islamabad from "../Images/Islamabad.png";
import canada from "../Images/canada.png";
import tajmahal from "../Images/tajmahal.png";
import lahore from "../Images/lahore.png";


function Cities(props) {
  return (
    <div className="row citiesBackground" style={{ justifyContent: "center" }}>
      <div className="col-lg-3">
        <div className="investNowCard">
          <img
            data-aos="fade-up"
            src={Islamabad}
            width="100"
            height="100"
          ></img>
          <label data-aos="fade-up" className="stageTextColor">
            Islamabad
          </label>
          <label data-aos="fade-up" className="secondaryLabelColor">
            DHA 2 , Main G.T Road, Islamabad, Pakistan Phone: 051-5411399
          </label>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="investNowCard">
          <img data-aos="fade-up" src={lahore} width="100" height="100"></img>
          <label data-aos="fade-up" className="stageTextColor">
            Lahore
          </label>
          <label data-aos="fade-up" className="secondaryLabelColor">
            955 Service Road, Block L, Johar Town, Lahore
          </label>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="investNowCard">
          <img data-aos="fade-up" src={tajmahal} width="100" height="100"></img>
          <label data-aos="fade-up" className="stageTextColor">
            Headquarter
          </label>
          <label data-aos="fade-up" className="secondaryLabelColor">
            Toronto, Ontario, CANADA
          </label>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="investNowCard">
          <img data-aos="fade-up" src={canada} width="100" height="100"></img>
          <label data-aos="fade-up" className="stageTextColor">
            India
          </label>
          <label data-aos="fade-up" className="secondaryLabelColor">
            2nd Floor Indraprastha Tower 6, Mahatma Gandhi Rd, Indore, MP,
            452007, India
          </label>
        </div>
      </div>
    </div>
  );
}

export default Cities;
