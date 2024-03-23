import { useEffect, useState } from "react";
import "./AboutUs.css"

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
  }, []);
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if(tab === "Teams") {
      setTeamTab("All")
    }else{
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
            <div className="img3 ml-10"></div>
          </div>
          <div className="col-lg-3">
            <div className="img3 ml-10"></div>
          </div>
          <div className="col-lg-3"> <div className="img3 ml-10"></div></div>
          <div className="col-lg-3"> <div className="img3 ml-10"></div></div>

        </div>
      )
    }
  }

  return (
    <div>
      <div className="pt-5 HeadingBackground" style={{ justifyContent: "left" }}>
        <div className="w-50">
          <div className="col-lg-3"></div>
          <div style={{ marginLeft: "20%" }}>
            <h1 style={
              windowWidth <= 500
                ? { fontSize: "24px" }
                : { fontSize: "55px" }
            } className="mb-4">
              <b>
                About Us
              </b>
            </h1>
            <p>
              Ropstam is a leading Canadian IT solutions company staffed by a team of skilled professionals in web development, mobile app development, UI/UX design, and blockchain development. We specialize in providing comprehensive software solutions and services, expertly handling complex projects to deliver outstanding results for our clients.
            </p>
            <div>
              <button data-aos="fade-up" className="HeaderButton">
                Let's Get Started
              </button>
              <button className="headerMenuButton mx-5">
                <b>Explore Services</b>
              </button>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className="row">
        <div className="col-lg-1"></div>
        <div className="col-lg-5 col-md-5">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div>
                <p className="year">2009</p>
                <p className="contentTitle">For 13+ years</p>
                <p className="contentText">Ropstam has been a leading innovator in software development, delivering solutions to complex challenges.</p>
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

          <div className="row">
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
        <div className="col-lg-5 col-md-5">
          <div className="video-container">
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
      <div className="row">
        <div className="col-lg-1"></div>
        <div className="col-lg-5">
          <div className="h1">Crafting digital beauty, one project at a time.</div>
          <p className="contentText">
            Ropstam delivers top-notch digital products with a focus on quality, innovation, and customer satisfaction. Our team of experts have over 10 years of experience in web and mobile development, ensuring your ideas are transformed into successful online businesses that stand out from the competition.
          </p>
        </div>
        <div className="col-lg-1 d-flex justify-content-center">
          <div style={{ border: "1px solid black" }}></div>
        </div>
        <div className="col-lg-4">
          <p className="textHeading">
            Unlock the potential of your online presence with Ropstam’s proven track record of delivering top-notch web solutions to over 500 clients worldwide.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-1"></div>
        <div className="col-lg-5">
          <div>
            <div className="img1"></div>
            <h5>Our Perspective</h5>
            <p className="contentText">
              We stay ahead of the curve by keeping up with the latest trends in design and development. Our commitment to delivering high-quality digital products sets us apart and ensures your project’s success.
            </p>

          </div>
        </div>
        <div className="col-lg-5">
          <div>
            <div className="img2"></div>
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
      <div className="row HeadingBackground">
        <div className="col-lg-1"></div>
        <div className="col-lg-6">
          <p className="h1">Wali Hassan</p>
          <p className="h4">CEO, Ropstam Solutions</p>
          <p className="contentText mt-5">
            “For the past ten years, I have devoted myself wholeheartedly to building and expanding this company. It brings me great pride to see the fantastic team we have built, the outstanding work they produce, and the supportive atmosphere we’ve created for our clients to bring their ideas to life. Our team’s commitment to excellence and client satisfaction has been our guiding principle, driving us to deliver top-notch services that meet and exceed expectations. I am humbled and honored to have led this organization to where it stands today, and I look forward to continuing our journey of growth and success.”
          </p>
        </div>
        <div className="col-lg-5">
          <div className="img3"></div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="row">
        <div className="col-lg-1"></div>
        <div className="col-lg-10">
          <div className="row">
            <div className="col-lg-12">
              <h1>Some of our 100+ People</h1>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-lg-12">
              <p className="h5">Success is a team effort, not a solo endeavor.</p>
            </div>
          </div>
          <br />
          <div className="row">
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
                  <div className="img4 ml-10"></div>
                </div>
                <div className="col-lg-3">
                  <div className="img4 ml-10"></div>
                </div>
                <div className="col-lg-3"> <div className="img4 ml-10"></div></div>
                <div className="col-lg-3"> <div className="img4 ml-10"></div></div>

              </div>)
            : (
              <div className="row">
                <div className="col-lg-12">
                  <div className="tabs d-flex justify-content-lg-start" style={{ gap: "30px" }}>
                    <span className={teamTab === 'All' ? 'active' : ''} onClick={() => handleTeamTabClick('All')}>
                      All
                    </span>
                    <span className={teamTab === 'Data Research' ? 'active' : ''} onClick={() => handleTeamTabClick('Data Research')}>
                      Data Research
                    </span>
                    <span className={teamTab === 'Full Stack' ? 'active' : ''} onClick={() => handleTeamTabClick('Full Stack')}>
                      Full Stack
                    </span>
                    <span className={teamTab === 'Gaming' ? 'active' : ''} onClick={() => handleTeamTabClick('Gaming')}>
                      Gaming
                    </span>
                    <span className={teamTab === 'HR' ? 'active' : ''} onClick={() => handleTeamTabClick('HR')}>
                      HR
                    </span>
                    <span className={teamTab === 'Mobile Apps' ? 'active' : ''} onClick={() => handleTeamTabClick('Mobile Apps')}>
                      Mobile Apps
                    </span>
                    <span className={teamTab === 'Social Media' ? 'active' : ''} onClick={() => handleTeamTabClick('Social Media')}>
                      Social Media
                    </span>
                    <span className={teamTab === 'SQA' ? 'active' : ''} onClick={() => handleTeamTabClick('SQA')}>
                      SQA
                    </span>
                    <span className={teamTab === 'UI/UX' ? 'active' : ''} onClick={() => handleTeamTabClick('UI/UX')}>
                      UI/UX
                    </span>
                    <span className={teamTab === 'WordPress/Shopify' ? 'active' : ''} onClick={() => handleTeamTabClick('WordPress/Shopify')}>
                      WordPress/Shopify
                    </span>
                  </div>
                </div>
              </div>
              // teamTabHtml()
          )
          }
          {teamTabHtml()}

        </div>
        <div className="col-lg-1"></div>
      </div>


    </div>
  );
}

export default AboutUs;
