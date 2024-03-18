import React, { useEffect, useState } from "react";
import "./ServiceProvider.css";
import { ServiceCardList } from "../ServiceChildCards/ServiceChildCards";
import TechnologyStack from "../../Technologies/OurTechStack";
import Heading from "../../../Global/Heading";
import DevelopmentProcess from "../../DevelopmentProcess/DevelopmentProcess";
import Accordion from "../../../Global/FAQ";
import HireUs from "../../HireUs/HireUs";
import ProjectPartner from "../../ProjectPartner/ProjectPartner";

export const BlockchainPage = ({ route }) => {
  const [servicesCardsDesc, setServicesCardsDesc] = useState({
    title: "",
    desc: "",
  });

  useEffect(() => {
    getHeadingDesc();
    getHeadingDescforservice();
  }, [route]);
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");
  const getHeadingDesc = () => {
    const route = window.location.pathname.replace(/^\//, "");
    const validRoutes = [
      "blockchain-development-services",
      "web-application-development-services",
      "mobile-app-development-services",
      "ui-ux-design-services",
      "wordpress-development-services",
      "shopify-development-services",
      "mvp-development-services",
      "services",
    ];
    if (validRoutes.includes(route)) {
      switch (route) {
        case "blockchain-development-services":
          setTitle("Blockchain Development Services");
          setDesc(
            "Ropstam offers future-proof custom blockchain development services including private, public, and hybrid blockchain solutions, cryptocurrencies, smart contracts, dApps, tokenization, and more. Our blockchain experts design and build decentralized networks and applications on Ethereum, Hyperledger, Corda, and other platforms."
          );
          break;
        case "web-application-development-services":
          setTitle("Web App Development Services");
          setDesc(
            "At Ropstam, we are a leading custom web application development company dedicated to creating innovative web apps that solve real business problems. With years of experience designing, building and launching complex web applications, we have the proven expertise to handle any web app project."
          );
          break;
        case "mobile-app-development-services":
          setTitle("Mobile App Development Services");
          setDesc(
            "At Ropstam, we offer full-cycle mobile app development services to help businesses digitally transform and meet their goals through custom mobile apps. With over 10 years of experience building successful apps for startups, enterprises and leaders across industries, we are your trusted mobile app development partner."
          );
          break;
        case "ui-ux-design-services":
          setTitle("UI/UX Development Services");
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
        case "shopify-development-services":
          setTitle("Shopify Development Services");
          setDesc(
            "Unlock your e-commerce potential with Ropstam’s custom Shopify development services. Elevate your online business with expert Shopify web design and development. Partner with us to create a stunning, professional, and high-performing Shopify store."
          );
          break;
        case "mvp-development-services":
          setTitle("MVP Development Services");
          setDesc(
            "Ropstam is a leading MVP software development company providing end-to-end mvp development services to build your minimum viable product (MVP). With years of experience delivering successful MVP software for startups and enterprises, we are your ideal technology partner for MVP development."
          );
          break;
        case "services":
          setTitle("Our Services");
          setDesc(
            "Boosting Your Success through Advanced Technology and Client-Centric Solutions <br /> At Ropstam, we combine innovative service-driven architecture and state-of-the-art technology to create unparalleled digital products tailored to our clients’ requirements. Our unwavering commitment to customer satisfaction sets us apart in the industry."
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
      "blockchain-development-services",
      "web-application-development-services",
      "mobile-app-development-services",
      "ui-ux-design-services",
      "wordpress-development-services",
      "shopify-development-services",
      "mvp-development-services",
      "services",
    ];
    if (validRoutes.includes(route)) {
      switch (route) {
        case "blockchain-development-services":
          setServicesCardsDesc({
            title: "Custom Blockchain",
            desc: "Ropstam’s expertise spans from creating blockchain networks and nodes to developing custom blockchain solutions and providing blockchain consulting services. Explore our blockchain development services for your business.",
          });
          break;
        case "web-application-development-services":
          setServicesCardsDesc({
            title: "Custom Web App",
            desc: "We offer full-cycle custom web application development services, from conceptualization and UX design to front- end development, back - end programming, testing and launch.Our key web app development services include:",
          });
          break;
        case "mobile-app-development-services":
          setServicesCardsDesc({
            title: "Custom Mobile App",
            desc: "We offer end-to-end mobile app development services, from conceptualization and user experience design to development, testing and launch. Our core services include:",
          });
          break;
        case "ui-ux-design-services":
          setServicesCardsDesc({
            title: "Custom Mobile App",
            desc: "We offer end-to-end mobile app development services, from conceptualization and user experience design to development, testing and launch. Our core services include:",
          });
          break;
        case "wordpress-development-services":
          setServicesCardsDesc({
            title: "Custom WordPress",
            desc: "From WordPress theme customization and plugin development to complex WordPress integrations, Ropstam provides end-to-end WordPress website design and development, speed optimization, content implementation, security and maintenance, allowing you to focus on your business.",
          });
          break;
        case "shopify-development-services":
          setServicesCardsDesc({
            title: "Custom Shopify",
            desc: "Trust Ropstam for custom Shopify development services to create high-converting online stores. With years of experience building ecommerce solutions on the Shopify platform, our team of experts specialize in the following services:",
          });
          break;
        case "mvp-development-services":
          setServicesCardsDesc({
            title: "Custom MVP",
            desc: "At Ropstam, we offer a comprehensive suite of MVP development services to bring your innovative ideas to life. Our team of skilled developers specializes in MVP app development, MVP software development, and MVP project management.",
          });
          break;
        // case 'services':
        // setServicesCardsDesc({
        //   title: 'Our Custom Mobile App Development Services',
        //   desc: 'We offer end-to-end mobile app development services, from conceptualization and user experience design to development, testing and launch. Our core services include:'
        // });
        // break;
        default:
          setServicesCardsDesc({ title: "", desc: "" });
          break;
      }
    } else {
      setServicesCardsDesc({ title: "", desc: "" });
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
      icon: { undefined },
      title: "Smart Contract Development",
      description:
        "Developing optimized smart contracts to automate processes and power blockchain solutions.",
    },
    {
      icon: { undefined },
      title: "Metaverse Development",
      description:
        "Building immersive metaverse, virtual worlds and blockchain-based digital experiences.",
    },
  ];
  const serviceCardList1 = [
    {
      icon: { undefined },
      title: "NFT Marketplace Development",
      description:
        "Building feature-rich NFT (Non-Fungible Token) marketplaces for digital collectibles and assets.",
    },
    {
      icon: { undefined },
      title: "DeFi Development",
      description:
        "Designing DeFi protocols, ecosystems, and applications including exchanges, lending platforms, and more.",
    },
    {
      icon: { undefined },
      title: "Web 3.0 Development",
      description:
        "Integrating blockchain with web technologies for decentralized applications.",
    },
    {
      icon: { undefined },
      title: "Blockchain Consultancy",
      description:
        "Providing strategic advisory and identifying appropriate blockchain use cases.",
    },
  ];
  const serviceCardList2 = [
    {
      icon: { undefined },
      title: "dApps Development",
      description:
        "Building innovative decentralized applications for engagement, automation and new revenue.",
    },
    {
      icon: { undefined },
      title: "IEO & ICO Development",
      description:
        "End-to-end planning, launch and marketing services for IEO and ICO fundraising.",
    },
    {
      icon: { undefined },
      title: "Crypto Exchanage Development",
      description:
        "Developing secure, scalable digital currency exchanges with trading tools.",
    },
    {
      icon: { undefined },
      title: "Blockchain Security",
      description:
        "Conducting comprehensive audits and testing to ensure blockchain solution security.",
    },
  ];

  return (
    <>
      <div className="">
        <Heading
          workBtn={false}
          visible={false}
          startedbtn={true}
          text={title}
          paragraph={description}
          feedbackvisible={true}
        />
      </div>
      <div className="margintop row justify-content-center align-items-center">
        <div className="col-lg-5">
          <h1 className="heading4034">
            Our <span className="changecolor">{servicesCardsDesc.title}</span>{" "}
            Development Services
          </h1>
          <p>{servicesCardsDesc.desc}</p>
        </div>
        <div className="col-lg-5">
          <ServiceCardList ServiceCardList={serviceCardList} />
        </div>
      </div>
      <div className="mt-5 d-flex justify-content-center ">
        <div style={{ width: "86%" }}>
          <ServiceCardList ServiceCardList={serviceCardList1} />
        </div>
      </div>
      <div className="mt-5 d-flex justify-content-center ">
        <div style={{ width: "86%" }}>
          <ServiceCardList ServiceCardList={serviceCardList2} />
        </div>
      </div>
      <div>
        <DevelopmentProcess />
      </div>
      <div>
        <ProjectPartner mainText={'UI/UX Design'} subText={'At Ropstam, we are more than just a UI/UX design company; we are your dedicated design allies, committed to elevating your brand in the digital landscape. Here’s why you should entrust your design needs to us:'}
         buttonText={'UI/UX Design'} />
      </div>
      <div>
        <HireUs />
      </div>
      <div className="">
        <Accordion panels={panels} />
      </div>
      <div className="">
        <TechnologyStack />
      </div>
      <div className="mt-5">
        <Heading
          workBtn={false}
          visible={false}
          startedbtn={false}
          paragraph={
            "Ready to discuss your Cross-Platform App development project? Get in touch today to get started."
          }
          feedbackvisible={true}
        />
      </div>
    </>
  );
};

export default BlockchainPage;
