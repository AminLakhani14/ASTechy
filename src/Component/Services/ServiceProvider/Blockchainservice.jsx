import React, { useEffect, useState } from "react";
import "./ServiceProvider.css";
import { ServiceCardList } from "../ServiceChildCards/ServiceChildCards";
import TechnologyStack from "../../Technologies/OurTechStack";
import Heading from "../../../Global/Heading";
import DevelopmentProcess from "../../DevelopmentProcess/DevelopmentProcess";
import Accordion from "../../../Global/FAQ";
import HireUs from "../../HireUs/HireUs";
import ProjectPartner from "../../ProjectPartner/ProjectPartner";
import Feedback from "../../../Global/Feedback";
import OurClient from "../../Our Client/OurClient";
import SolutionProvider from "../../SolutionProvider/SolutionProvider";
import hiring from '../../Assets/icons8-hire-me-50.png'

export const BlockchainPage = ({ route }) => {
  const [servicesCardsDesc, setServicesCardsDesc] = useState({
    title: "",
    desc: "",
    partnerTitle: '',
    partnerDesc: '',
  });

  useEffect(() => {
    getHeadingDesc();
    getHeadingDescforservice();
  }, [route]);
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");
  const PageRoute = window.location.pathname.replace(/^\//, "");
  const getHeadingDesc = () => {
    const route = window.location.pathname.replace(/^\//, "");
    const validRoutes = [
      "graphics-development-services",
      "web-application-development-services",
      "seo-services",
      "ui-ux-design-services",
      "wordpress-development-services",
      "social-media-marketing-services",
      "3d-animation-services",
      "services",
    ];
    if (validRoutes.includes(route)) {
      switch (route) {
        case "graphics-development-services":
          setTitle("Graphics Designing Services");
          setDesc(
            "Welcome to 'Elevating Digital Presence,' a graphics design initiative by SSTech. As a leading provider of bespoke graphic design solutions, SSTech is committed to empowering businesses with captivating visual experiences. In this campaign, we delve into the realm of graphic innovation, exploring emerging trends, strategies, and best practices to drive growth and success in the digital age. From transformative graphic techniques to actionable design insights, 'Elevating Digital Presence' serves as your guide to harnessing the full potential of visual communication with SSTech as your trusted partner.",
          );
          break;
        case "web-application-development-services":
          setTitle("Web App Development Services");
          setDesc(
            "At Ropstam, we are a leading custom web application development company dedicated to creating innovative web apps that solve real business problems. With years of experience designing, building and launching complex web applications, we have the proven expertise to handle any web app project."
          );
          break;
        case "seo-services":
          setTitle("SEO Services");
          setDesc(
            "At SSTech, we provide end-to-end SEO services to drive digital transformation and achieve your business objectives through tailored SEO strategies. With a decade-long track record of optimizing websites for startups, enterprises, and industry leaders, we stand as your reliable SEO partner, ensuring enhanced online visibility and sustainable growth."
          );
          break;
        case "ui-ux-design-services":
          setTitle("UI/UX Designing Services");
          setDesc(
            "Unlock the potential of exceptional UI/UX design services at Ropstam. Elevate your digital presence with our holistic approach, latest technology stack, and industry-specific solutions. Discover why we’re the best UI/UX design company for your brand’s success."
          );
          break;
        case "wordpress-development-services":
          setTitle("WordPress Development Services");
          setDesc(
            "Our custom WordPress development services can be the one-stop solution for all your design and development needs. At Ropstam, we’re not just WordPress experts; we’re your trusted partners in crafting exceptional online experiences. Explore our comprehensive range of services for your business."
          );
          break;
        case "social-media-marketing-services":
          setTitle("Social Media Marketing Services");
          setDesc(
            "Unlock your brand's potential with SSTech's tailored Social Media Marketing services. Elevate your online presence with expertly crafted social media strategies and campaign management. Partner with us to cultivate a captivating, professional, and high-performing social media profile."
          );
          break;
        case "3d-animation-services":
          setTitle("3D Animation Services");
          setDesc(
            "Ropstam is a premier 3D animation studio, offering comprehensive MVP animation services to bring your minimum viable product (MVP) to life. With a wealth of experience in delivering successful 3D animations for startups and enterprises alike, we are your ultimate technology partner for MVP animation development."
          );
          break;
        case "services":
          setTitle("Our Services");
          setDesc(
            "Boosting Your Success through Advanced Technology and Client-Centric Solutions At Ropstam, we combine innovative service-driven architecture and state-of-the-art technology to create unparalleled digital products tailored to our clients’ requirements. Our unwavering commitment to customer satisfaction sets us apart in the industry."
          );
          break;
        default:
          setTitle("");
          setDesc("");
          break;
      }
    } else {
      setTitle("");
      setDesc("");
    }
  };
  const getHeadingDescforservice = () => {
    const route = window.location.pathname.replace(/^\//, "");
    const validRoutes = [
      "graphics-development-services",
      "web-application-development-services",
      "seo-services",
      "ui-ux-design-services",
      "wordpress-development-services",
      "social-media-marketing-services",
      "3d-animation-services",
      "services",
    ];
    if (validRoutes.includes(route)) {
      switch (route) {
        case "graphics-development-services":
          setServicesCardsDesc({
            title: "Custom Graphics Designing",
            desc: "SSTech's expertise extends from crafting robust digital ecosystems to tailoring bespoke digital solutions and offering comprehensive consulting services. Explore our eBook services to elevate your digital presence and engage your audience effectively.",
            partnerTitle: 'Graphics Designing',
            partnerDesc: "At SSTech, we go beyond conventional eBook development services; we emerge as your dedicated digital publishing partners, committed to amplifying your brand's visibility in the digital realm. Here's why you should trust us with your eBook needs:"
          });
          break;
        case "web-application-development-services":
          setServicesCardsDesc({
            title: "Custom Web App",
            desc: "We offer full-cycle custom web application development services, from conceptualization and UX design to front- end development, back - end programming, testing and launch.Our key web app development services include:",
            partnerTitle: 'Web App',
            partnerDesc: 'Don’t settle for an average web app – get a custom solution tailored to your needs with Ropstam. With Ropstam as your web app development partner, you get:'
          });
          break;
        case "seo-services":
          setServicesCardsDesc({
            title: "Custom SEO",
            desc: "We provide complete SEO solutions, spanning from initial strategy development and keyword research to on-page optimization, content creation, and performance tracking. Our core SEO services include:",
            partnerTitle: 'SEO',
            partnerDesc: 'When selecting a partner for SEO services, experience, expertise, and a proven track record of success are paramount. We stand out as the premier choice for SEO solutions because:'
          });
          break;
        case "ui-ux-design-services":
          setServicesCardsDesc({
            title: "Custom UI/UX Designing",
            desc: "Ropstam offers cutting-edge UI/UX design services to create intuitive, engaging digital experiences. With an expert team of designers and researchers, we help companies craft user-focused products that delight customers.",
            partnerTitle: 'UI/UX Designing',
            partnerDesc: 'At Ropstam, we are more than just a UI/UX design company; we are your dedicated design allies, committed to elevating your brand in the digital landscape. Here’s why you should entrust your design needs to us:'
          });
          break;
        case "wordpress-development-services":
          setServicesCardsDesc({
            title: "Custom WordPress",
            desc: "From WordPress theme customization and plugin development to complex WordPress integrations, Ropstam provides end-to-end WordPress website design and development, speed optimization, content implementation, security and maintenance, allowing you to focus on your business.",
            partnerTitle: 'WordPress',
            partnerDesc: 'With over a decade of WordPress experience, Ropstam is your trusted partner for custom WordPress services. Here’s why you should choose us:'
          });
          break;
        case "social-media-marketing-services":
          setServicesCardsDesc({
            title: "Custom Social Media Marketing",
            desc: "Rely on SSTech for bespoke Social Media Marketing solutions aimed at creating high-engagement online presence. With extensive experience in crafting effective social media strategies, our team of experts specializes in the following services:",
            partnerTitle: 'Social Media Marketing',
            partnerDesc: 'SSTech emerges as the preferred option for customized social media marketing solutions, backed by a track record of successful campaigns. This establishes us as the ideal partner to transform your social media presence into a dynamic and impactful marketing tool.'
          });
          break;
        case "3d-animation-services":
          setServicesCardsDesc({
            title: "Custom 3D Animation",
            desc: "At SSTech, we offer a comprehensive array of 3D animation services to bring vibrancy to your innovative concepts. Our team of adept animators specializes in 3D animation development, ensuring seamless execution and captivating visuals for your project.",
            partnerTitle: '3D Animation',
            partnerDesc: "As a leading 3D animation studio, we take pride in our track record of success. We're not just a provider of bespoke 3D animation services; we're your partner in innovation. Here's why you should choose us for 3D animation development:"
          });
          break;
        default:
          setServicesCardsDesc({ title: "", desc: "", partnerTitle: '', partnerDesc: '' });
          break;
      }
    } else {
      setServicesCardsDesc({ title: "", desc: "", partnerTitle: '', partnerDesc: '' });
    }
  };

  const panels = [
    {
      label: "Seriously, Don't Use Icon Fonts",
      content:
        'Icons are everywhere. These "little miracle workers" (as John Hicks described them) help us reinforce meaning in the interfaces we design and build. Their popularity in web design has never been greater; the conciseness and versatility of pictograms in particular make them a lovely fit for displays large and small. But icons on the web have had their fair share of challenges.',
    },
    {
      label: "Screen Readers Actually Read That Stuff",
      content:
        'Most assistive devices will read aloud text inserted via CSS, and many of the Unicode characters icon fonts depend on are no exception. Best-case scenario, your "favorite" icon gets read aloud as "black favorite star." Worse-case scenario, it\'s read as "unpronounceable" or skipped entirely.',
    },
    {
      label: "They Fail Poorly and Often",
      content:
        'When your icon font fails, the browser treats it like any other font and replaces it with a fallback. Best-case scenario, you\'ve chosen your fallback characters carefully and something weird-looking but communicative still loads. Worse-case scenario (and far more often), the user sees something completely incongruous, usually the dreaded "missing character" glyph.',
    },
    {
      label: "They're a Nightmare if You're Dyslexic",
      content:
        "Many dyslexic people find it helpful to swap out a website's typeface for something like OpenDyslexic. But icon fonts get replaced as well, which makes for a frustratingly broken experience.",
    },
    {
      label: "There's Already a Better Way",
      content:
        "SVG is awesome for icons! It's a vector image format with optional support for CSS, JavaScript, reusability, accessibility and a bunch more. It was made for this sort of thing.",
    },
  ];

  const serviceCardList = [
    {
      icon: <img src={hiring} height={'30px'} width={'30px'} alt='' />,
      title: "Smart Contract Development",
      description:
        "Developing optimized smart contracts to automate processes and power blockchain solutions.",
    },
    {
      icon: <img src={hiring} height={'30px'} width={'30px'} alt='' />,
      title: "Metaverse Development",
      description:
        "Building immersive metaverse, virtual worlds and blockchain-based digital experiences.",
    },
  ];
  const serviceCardList1 = [
    {
      icon: <img src={hiring} height={'30px'} width={'30px'} alt='' />,
      title: "NFT Marketplace Development",
      description:
        "Building feature-rich NFT (Non-Fungible Token) marketplaces for digital collectibles and assets.",
    },
    {
      icon: <img src={hiring} height={'30px'} width={'30px'} alt='' />,
      title: "DeFi Development",
      description:
        "Designing DeFi protocols, ecosystems, and applications including exchanges, lending platforms, and more.",
    },
    {
      icon: <img src={hiring} height={'30px'} width={'30px'} alt='' />,
      title: "Web 3.0 Development",
      description:
        "Integrating blockchain with web technologies for decentralized applications.",
    },
    {
      icon: <img src={hiring} height={'30px'} width={'30px'} alt='' />,
      title: "Blockchain Consultancy",
      description:
        "Providing strategic advisory and identifying appropriate blockchain use cases.",
    },
  ];
  // const serviceCardList2 = [
  //   {
  //     icon: { undefined },
  //     title: "dApps Development",
  //     description:
  //       "Building innovative decentralized applications for engagement, automation and new revenue.",
  //   },
  //   {
  //     icon: { undefined },
  //     title: "IEO & ICO Development",
  //     description:
  //       "End-to-end planning, launch and marketing services for IEO and ICO fundraising.",
  //   },
  //   {
  //     icon: { undefined },
  //     title: "Crypto Exchanage Development",
  //     description:
  //       "Developing secure, scalable digital currency exchanges with trading tools.",
  //   },
  //   {
  //     icon: { undefined },
  //     title: "Blockchain Security",
  //     description:
  //       "Conducting comprehensive audits and testing to ensure blockchain solution security.",
  //   },
  // ];

  return (
    <>
      <div className="">
        <Heading
          workBtn={PageRoute == 'services' ? true : false}
          visible={false}
          startedbtn={PageRoute == 'services' ? false : true}
          text={title}
          paragraph={description}
          feedbackvisible={true}
        />
      </div>
      <div className="margintop row justify-content-center align-items-center">
        <div className="col-lg-5">
          {PageRoute == 'services' ? <>
            <h1 className="heading4034">Join us on the journey towards excellence!</h1>
            <p>Partner with our experts to bring your ideas to life and enhance your digital transformation with our comprehensive digital solutions and expert support.</p>
          </> : <>

            <h1 className="heading4034">
              Our <span className="changecolor">{servicesCardsDesc.title}</span>{" "}
              {(PageRoute === 'graphics-development-services') || (PageRoute === 'ui-ux-design-services') ? '' : 'Development'} Services
            </h1>
            <p>{servicesCardsDesc.desc}</p>
          </>}
        </div>
        {PageRoute == 'services' ? <></> :
          <div className="col-lg-5">
            <ServiceCardList ServiceCardList={serviceCardList} />
          </div>}
      </div>
      {PageRoute == 'services' ? <></> :
        <div className="mt-5 d-flex justify-content-center ">
          <div style={{ width: "86%" }}>
            <ServiceCardList ServiceCardList={serviceCardList1} />
          </div>
        </div>}
      {/* {PageRoute == 'services' ? <></> :
        <div className="mt-5 d-flex justify-content-center ">
          <div style={{ width: "86%" }}>
            <ServiceCardList ServiceCardList={serviceCardList2} />
          </div>
        </div>} */}
      {PageRoute == 'services' ? <></> : <div>
        <DevelopmentProcess />
      </div>}
      {PageRoute == 'services' ? <></> : <div>
        <ProjectPartner mainText={servicesCardsDesc.partnerTitle} subText={servicesCardsDesc.partnerDesc}
          buttonText={servicesCardsDesc.partnerTitle} />
      </div>}
      {PageRoute == 'services' ? <></> : <div>
        <SolutionProvider />
      </div>}
      {PageRoute == 'services' ? <></> : <div>
        <HireUs />
      </div>}
      {PageRoute == 'services' ? <></> : <div>
        <OurClient />
      </div>}
      {PageRoute == 'services' ? <></> : <div className="">
        <Accordion panels={panels} />
      </div>}
      <div className="">
        <TechnologyStack />
      </div>
      {PageRoute == 'services' ? <></> : <div className="mt-5">
        <Feedback />
      </div>}
    </>
  );
};

export default BlockchainPage;
