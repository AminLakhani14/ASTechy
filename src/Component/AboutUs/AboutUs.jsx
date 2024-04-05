import { useEffect, useState } from "react";
import "./AboutUs.css"
import Heading from "../../Global/Heading";
import "../../CSS/style.css";

function AboutUs() {
  const [activeTab, setActiveTab] = useState('Leaders');
  const [teamTab, setTeamTab] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    // Function to update the windowWidth state when the resize event occurs
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth]);
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === "Teams") {
      setTeamTab("All")
    } else {
      setTeamTab(null)
    }
  };
  const handleTeamTabClick = (tab) => {
    setTeamTab(tab);
  };

  const teamTabHtml = () => {
    if (teamTab) {
      return (
        <div className="row">
          <div className="col-lg-3">
            <div className="img4 ml-10"></div>
            <h4 className="text-center">Abdullah sheikh</h4>
          </div>
          <div className="col-lg-3">
            <div className="img4 ml-10"></div>
            <h4 className="text-center">Muhammad anas</h4>
          </div>

        </div>
      )
    }
  }

  return (
    <div style={{overflow:'hidden'}}>
        <Heading  
          workBtn={false}
          visible={true}
          startedbtn={true}
          text={'About Us'}
          paragraph={' ASTECHY is a leading Canadian IT solutions company staffed by a team of skilled professionals in web development, mobile app development, UI/UX design, and blockchain development. We specialize in providing comprehensive software solutions and services, expertly handling complex projects to deliver outstanding results for our clients.'}
          feedbackvisible={true}
        />
      <div className="row mt-5">
        <div className="col-lg-1"></div>
        <div className="col-lg-5 col-md-5">
          <div className={windowWidth <=1024?"d-flex justify-content-center flex-column mx-4":"row"} >
            <div className="col-lg-6 col-md-6">
              <div>
                <p className="year">2009</p>
                <p className="contentTitle">For 13+ years</p>
                <p className="contentText">ASTECHY has been a leading innovator in software development, delivering solutions to complex challenges.</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div>
                <p className="year">1500+</p>
                <p className="contentTitle">Projects Completed</p>
                <p className="contentText">Our team of industry experts will skillfully craft a personalized online presence that brings your unique vision to life.</p>
              </div>
            </div>
          </div>

          <div className={windowWidth <=1024?"d-flex justify-content-center flex-column mx-4":"row"} >
            <div className="col-lg-6 col-md-6">
              <div>
                <p className="year">100+</p>
                <p className="contentTitle">Talented Members</p>
                <p className="contentText">Our team includes seasoned IT professionals with over a decade of experience in the industry.</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div>
                <p className="year">500+</p>
                <p className="contentTitle">Happy Clients</p>
                <p className="contentText">At the heart of our successful business lies a commitment to putting customers’ requirements first.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-5 col-md-5 d-none">
          <div  className={windowWidth <=1024?"d-flex justify-content-center m-4 video-container":"video-container"} >
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/inJOaqTVEPw"
              title="YouTube video player"
              // frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className={windowWidth <=1024?"d-flex justify-content-center flex-column m-5 mb-0":"row"}>
        <div className="col-lg-1"></div>
        <div className="col-lg-5">
          <div className="crafting">Crafting digital beauty, one project at a time.</div>
          <p className="contentText">
            ASTECHY delivers top-notch digital products with a focus on quality, innovation, and customer satisfaction. Our team of experts have over 10 years of experience in web and mobile development, ensuring your ideas are transformed into successful online businesses that stand out from the competition.
          </p>
        </div>
        <div className="col-lg-1 d-flex justify-content-center">
          <div style={{ border: "1px solid black" }}></div>
        </div>
        <div className="col-lg-4">
          <p className="textHeading">
            Unlock the potential of your online presence with ASTECHY’s proven track record of delivering top-notch web solutions to over 500 clients worldwide.
          </p>
        </div>
      </div>

      <div className={windowWidth <=1024?"d-flex justify-content-center flex-column  m-4":"row"}>
        <div className="col-lg-1"></div>
        <div className="col-lg-5">
          <div>
            <div className="img1 d-none"></div>
            <h5>Our Perspective</h5>
            <p className="contentText">
              We stay ahead of the curve by keeping up with the latest trends in design and development. Our commitment to delivering high-quality digital products sets us apart and ensures your project’s success.
            </p>

          </div>
        </div>
        <div className="col-lg-5">
          <div>
            <div className="img2 d-none"></div>
            <h5>Our Purpose</h5>
            <p className="contentText">
              Our goal is to drive businesses toward competitiveness through the integration of digital innovation, exceptional design, and cutting-edge technologies through the development of smart applications.
            </p>

          </div>
        </div>
        <div className="col-lg-1"></div>
      </div>
      <br></br>
      <br></br>
      <br></br>
        <div className={windowWidth <=1024?"pt-5 mt-5 HeadingBackground":"HeadingBackground "}>
        <div className="col-lg-1"></div>
        <div className={windowWidth <=1024?"col-lg-6 m-4":"col-lg-6 "}>
          <p className="h1">Muhammad shareef, Shahruk sheikh</p>
          <p className="h4">CEO, ASTECHY</p>
          <p className="contentText mt-5">
            “For the past ten years, I have devoted myself wholeheartedly to building and expanding this company. It brings me great pride to see the fantastic team we have built, the outstanding work they produce, and the supportive atmosphere we’ve created for our clients to bring their ideas to life. Our team’s commitment to excellence and client satisfaction has been our guiding principle, driving us to deliver top-notch services that meet and exceed expectations. I am humbled and honored to have led this organization to where it stands today, and I look forward to continuing our journey of growth and success.”
          </p>
        </div>
        <div className="col-lg-5">
          {/* <div className="img3"></div> */}
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="row mb-0">
        <div className="col-lg-1"></div>
        <div className="col-lg-10">
          <div className={windowWidth <=1024?"d-flex m-3":"row"}>
            <div className="col-lg-12">
              <h1>Some of our 100+ People</h1>
            </div>
          </div>
          <br />
          <div className={windowWidth <=1024?"d-flex m-3":"row"}>
            <div className="col-lg-12">
              <p className="h5">Success is a team effort, not a solo endeavor.</p>
            </div>
          </div>
          <br />
          <div className={windowWidth <=1024?"d-flex m-3":"row"}>
            <div className="col-lg-12">
              <div className="tabs d-flex justify-content-lg-start" style={{ gap: "50px" }}>
                <span
                  className={activeTab === 'Leaders' ? 'active' : ''}
                  onClick={() => handleTabClick('Leaders')}
                >
                  Leaders
                </span>
                <span
                  className={activeTab === 'Teams' ? 'active' : ''}
                  onClick={() => handleTabClick('Teams')}
                >
                  Teams
                </span>
              </div>
            </div>
          </div>
          {activeTab === 'Leaders' ?
            (
              <div className="row">
                <div className="col-lg-3">
                  <div className="img4 ml-10">
                  </div>
                  <h4 className="text-center">Abdullah sheikh</h4>
                </div>
                <div className="col-lg-3">
                  <div className="img4 ml-10">
                  </div>
                  <h4 className="text-center">Muhammad anas</h4>
                </div>
              </div>)
            : (
              <div className={windowWidth <=1024?"d-flex justify-content-lg-start":"row"}>
                <div className="col-lg-12">
                  <div className="tabs d-flex justify-content-lg-start" style={{ gap: "30px" }}>
                  <span className={teamTab === ' Graphics Designing' ? 'active' : ''} onClick={() => handleTeamTabClick(' Graphics Designing')}>
                  <h6 className="font">Graphics Designing</h6>
                    </span>
                    <span className={teamTab === 'Web Development' ? 'active' : ''} onClick={() => handleTeamTabClick('Web Development')}>
                   <h6  className="font">Web Development</h6>  
                    </span>
                    <span className={teamTab === 'SEO' ? 'active' : ''} onClick={() => handleTeamTabClick('SEO')}>
                    <h6  className="font">SEO</h6>  
                    </span>
                    <span className={teamTab === 'UI/UX Designing' ? 'active' : ''} onClick={() => handleTeamTabClick('UI/UX Designing')}>
                    <h6  className="font"> UI/UX Designing</h6>  
                    </span>
                    <span className={teamTab === ' WordPress Development' ? 'active' : ''} onClick={() => handleTeamTabClick(' WordPress Development')}>
                     <h6 className="font">WordPress Development</h6> 
                    </span>
                    <span className={teamTab === 'Social Media Marketing' ? 'active' : ''} onClick={() => handleTeamTabClick('Social Media Marketing')}>
                    <h6 className="font">Social Media Marketing</h6> 
                    </span>
                  </div>
                </div>
              </div>
            )
          }
          {teamTabHtml()}

          {/* <div className="row">
            <div className="col-lg-6">
              <div>
                <div className="h1">Headquartered in <span style={{ color: "#2693fa" }}>Ontario, Canada</span></div>
                <p className="contentText">
                  ASTECHY boasts a proven track record of delivering top-notch custom software solutions to clients ranging from Fortune 500 companies to startups, including Walmart, SharkTank Rogers, PostMedia, Bell, Telus, Cafebonappetit, and Nescafe, since 2009.
                </p>
                <div className="row">
                  <div className="col-lg-12 img6"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 img5"></div>
          </div> */}

        </div>
        <div className="col-lg-1"></div>
      </div>


    </div>
  );
}

export default AboutUs;
