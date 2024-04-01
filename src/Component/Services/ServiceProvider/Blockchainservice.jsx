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
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import BrandingWatermarkIcon from "@mui/icons-material/BrandingWatermark";
import DrawIcon from "@mui/icons-material/Draw";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import BrandingWatermarkTwoToneIcon from "@mui/icons-material/BrandingWatermarkTwoTone";
import BrushTwoToneIcon from "@mui/icons-material/BrushTwoTone";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import WebAssetTwoToneIcon from "@mui/icons-material/WebAssetTwoTone";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import SupportIcon from "@mui/icons-material/Support";
import BiotechIcon from "@mui/icons-material/Biotech";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import LayersIcon from "@mui/icons-material/Layers";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import LayersClearIcon from "@mui/icons-material/LayersClear";
import BugReportIcon from "@mui/icons-material/BugReport";
import TagIcon from "@mui/icons-material/Tag";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import PeopleIcon from "@mui/icons-material/People";
import PaidIcon from "@mui/icons-material/Paid";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CommitIcon from "@mui/icons-material/Commit";
import AodIcon from "@mui/icons-material/Aod";
import CodeIcon from "@mui/icons-material/Code";
import InventoryIcon from "@mui/icons-material/Inventory";
import GamepadIcon from "@mui/icons-material/Gamepad";
import ContrastIcon from "@mui/icons-material/Contrast";
import PowerIcon from "@mui/icons-material/Power";
import SecurityIcon from "@mui/icons-material/Security";
import SpeedIcon from "@mui/icons-material/Speed";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import ThreeDRotationIcon from "@mui/icons-material/ThreeDRotation";
import FilterHdrIcon from "@mui/icons-material/FilterHdr";
import AnimationIcon from "@mui/icons-material/Animation";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import picture from "../../../Images/WikiWork.jpg";

export const BlockchainPage = ({ route }) => {
  const [servicesCardsDesc, setServicesCardsDesc] = useState({
    title: "",
    desc: "",
    partnerTitle: "",
    partnerDesc: "",
  });

  useEffect(() => {
    getHeadingDesc();
    getHeadingDescforservice();
  }, [window.location.pathname]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    // Function t update the windowWidth state when the resize event occurs
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");
  const [cards, setCards] = useState({
    title1: "",
    Desc1: "",
    title2: "",
    Desc2: "",
    title3: "",
    Desc3: "",
    title4: "",
    Desc4: "",
    title5: "",
    Desc5: "",
    title6: "",
    Desc6: "",
  });
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
            "Welcome to 'Elevating Digital Presence,' a graphics design initiative by ASTECHY. As a leading provider of bespoke graphic design solutions, ASTECHY is committed to empowering businesses with captivating visual experiences. In this campaign, we delve into the realm of graphic innovation, exploring emerging trends, strategies, and best practices to drive growth and success in the digital age. From transformative graphic techniques to actionable design insights, 'Elevating Digital Presence' serves as your guide to harnessing the full potential of visual communication with ASTECHY as your trusted partner."
          );
          setCards({
            title1: {
              title: "Graphic Design Solutions",
              icon: <EmojiObjectsIcon fontSize="large" />,
            },
            Desc1:
              "We provide innovative and visually stunning graphic design solutions tailored to your brand and target audience.",
            title2: {
              title: "Logo Design",
              icon: <BrandingWatermarkIcon fontSize="large" />,
            },
            Desc2:
              "We specialize in creating unique and memorable logos that effectively represent your brand identity.",
            title3: {
              title: "Print Design",
              icon: <DrawIcon fontSize="large" />,
            },
            Desc3:
              "We offer creative print design services including brochures, flyers, business cards, and more to elevate your marketing materials.",
            title4: {
              title: "UI/UX Design",
              icon: <AdminPanelSettingsIcon fontSize="large" />,
            },
            Desc4:
              "Our UI/UX design expertise ensures intuitive and engaging user experiences across various digital platforms.",
            title5: {
              title: "Branding Design",
              icon: <BrandingWatermarkTwoToneIcon fontSize="large" />,
            },
            Desc5:
              "We develop cohesive branding strategies and design elements to establish a strong and consistent brand image for your business.",
            title6: {
              title: "Graphic Design Consultation",
              icon: <BrushTwoToneIcon fontSize="large" />,
            },
            Desc6:
              "We provide expert consultation to understand your design needs and offer tailored solutions to achieve your objectives.",
          });
          break;
        case "web-application-development-services":
          setTitle("Web App Development Services");
          setDesc(
            "At ASTECHY, we are a leading custom web application development company dedicated to creating innovative web apps that solve real business problems. With years of experience designing, building and launching complex web applications, we have the proven expertise to handle any web app project."
          );
          setCards({
            title1: {
              title: "Web App Design",
              icon: <LaptopMacIcon fontSize="large" />,
            },
            Desc1:
              "We craft visually appealing and user-centric designs tailored to your brand and users.",
            title2: {
              title: "E-commerce Web App Development",
              icon: <ShoppingCartIcon fontSize="large" />,
            },
            Desc2:
              "We build secure, feature-rich custom e-commerce platforms to support your online business.",
            title3: {
              title: "CMS Development",
              icon: <WorkspacePremiumIcon fontSize="large" />,
            },
            Desc3:
              "We develop flexible, scalable content management systems to organize & manage content.",
            title4: {
              title: "Web App Testing",
              icon: <WebAssetTwoToneIcon fontSize="large" />,
            },
            Desc4:
              "We thoroughly test your web app for functionality, UI/UX, security and performance issues.",
            title5: {
              title: "Custom Website Development",
              icon: <DashboardCustomizeIcon fontSize="large" />,
            },
            Desc5:
              "We develop custom websites optimized for your unique business needs & brand identity.",
            title6: {
              title: "Support & Maintenance",
              icon: <SupportIcon fontSize="large" />,
            },
            Desc6:
              "We offer ongoing support and maintenance to keep your web app optimized post-launch.",
          });
          break;
        case "seo-services":
          setTitle("SEO Services");
          setDesc(
            "At ASTECHY, we provide end-to-end SEO services to drive digital transformation and achieve your business objectives through tailored SEO strategies. With a decade-long track record of optimizing websites for startups, enterprises, and industry leaders, we stand as your reliable SEO partner, ensuring enhanced online visibility and sustainable growth."
          );
          setCards({
            title1: {
              title: "Keyword Research",
              icon: <BiotechIcon fontSize="large" />,
            },
            Desc1:
              "We conduct comprehensive keyword research to identify the most relevant and high-performing keywords for your website.",
            title2: {
              title: "On-Page Optimization",
              icon: <ManageAccountsIcon fontSize="large" />,
            },
            Desc2:
              "We optimize on-page elements including meta tags, headings, and content to improve your website's search engine visibility.",
            title3: {
              title: "Off-Page",
              icon: <LayersIcon fontSize="large" />,
            },
            Desc3:
              "We implement off-page SEO strategies such as link building and social media promotion to enhance your website's authority and ranking.",
            title4: {
              title: "Technical SEO",
              icon: <SyncAltIcon fontSize="large" />,
            },
            Desc4:
              "We analyze and optimize technical aspects of your website such as site speed, mobile-friendliness, and site architecture for better search engine performance.",
            title5: {
              title: "Local SEO",
              icon: <LocalActivityIcon fontSize="large" />,
            },
            Desc5:
              "We optimize your website for local search results, helping you attract more customers from your target geographical area.",
            title6: {
              title: "SEO Reporting",
              icon: <BugReportIcon fontSize="large" />,
            },
            Desc6:
              "We provide regular reports and analysis of your website's SEO performance, along with actionable insights to drive continuous improvement.",
          });
          break;
        case "ui-ux-design-services":
          setTitle("UI/UX Designing Services");
          setDesc(
            "Unlock the potential of exceptional UI/UX design services at ASTECHY. Elevate your digital presence with our holistic approach, latest technology stack, and industry-specific solutions. Discover why we’re the best UI/UX design company for your brand’s success."
          );
          setCards({
            title1: {
              title: "Website UI/UX Design",
              icon: <LaptopMacIcon fontSize="large" />,
            },
            Desc1:
              "We craft immersive website experiences optimized for user engagement and conversion.",
            title2: {
              title: "Mobile UI/UX Design",
              icon: <AodIcon fontSize="large" />,
            },
            Desc2:
              "Our mobile app designs and user interfaces provide intuitive navigation and flows for flawless mobile interactions.",
            title3: {
              title: "SaaS Product Design",
              icon: <CodeIcon fontSize="large" />,
            },
            Desc3:
              "We design flawless SaaS product experiences that solve customer pain points.",
            title4: {
              title: "Wireframing & Prototyping",
              icon: <InventoryIcon fontSize="large" />,
            },
            Desc4:
              "We rapidly test concepts through low-fi wireframes and hi-fi interactive prototypes.",
            title5: {
              title: "NFT Design",
              icon: <GamepadIcon fontSize="large" />,
            },
            Desc5:
              "We design captivating NFTs combining visual design, metadata, and smart contracts.",
            title6: {
              title: "Interaction Design",
              icon: <LayersClearIcon fontSize="large" />,
            },
            Desc6:
              "We architect innovative interactive experiences based on cognition & perception principles.",
          });
          break;
        case "wordpress-development-services":
          setTitle("WordPress Development Services");
          setDesc(
            "Our custom WordPress development services can be the one-stop solution for all your design and development needs. At ASTECHY, we’re not just WordPress experts; we’re your trusted partners in crafting exceptional online experiences. Explore our comprehensive range of services for your business."
          );
          setCards({
            title1: {
              title: "WordPress Theme Customization",
              icon: <ContrastIcon fontSize="large" />,
            },
            Desc1:
              "Developing custom themes to make your website stand out and align with your brand identity.",
            title2: {
              title: "WordPress Design Services",
              icon: <LaptopMacIcon fontSize="large" />,
            },
            Desc2:
              "Creating visually stunning, user-centric WordPress designs that captivate and convert visitors.",
            title3: {
              title: "WordPress Plugin Development",
              icon: <PowerIcon fontSize="large" />,
            },
            Desc3:
              "Building custom plugins to enhance your website’s functionality and user experience.",
            title4: {
              title: "WordPress Security Services",
              icon: <SecurityIcon fontSize="large" />,
            },
            Desc4:
              "Protecting your website from threats and vulnerabilities with robust security measures.",
            title5: {
              title: "WordPress Support",
              icon: <SupportIcon fontSize="large" />,
            },
            Desc5:
              "Providing ongoing support and maintenance to keep your WordPress website up-to-date.",
            title6: {
              title: "WordPress Speed Optimization",
              icon: <SpeedIcon fontSize="large" />,
            },
            Desc6:
              "Ensuring lightning-fast loading times for improved search engine rankings.",
          });
          break;
        case "social-media-marketing-services":
          setTitle("Social Media Marketing Services");
          setDesc(
            "Unlock your brand's potential with ASTECHY's tailored Social Media Marketing services. Elevate your online presence with expertly crafted social media strategies and campaign management. Partner with us to cultivate a captivating, professional, and high-performing social media profile."
          );
          setCards({
            title1: {
              title: "Social Media Strategy",
              icon: <TagIcon fontSize="large" />,
            },
            Desc1:
              "We develop customized social media strategies tailored to your business goals and target audience.",
            title2: {
              title: "Content Creation",
              icon: <ContentPasteIcon fontSize="large" />,
            },
            Desc2:
              "We create engaging and visually appealing content, including graphics, videos, and posts, optimized for various social media platforms.",
            title3: {
              title: "Community Management",
              icon: <PeopleIcon fontSize="large" />,
            },
            Desc3:
              "We manage your online community by engaging with followers, responding to comments, and fostering positive interactions.",
            title4: {
              title: "Paid Advertising",
              icon: <PaidIcon fontSize="large" />,
            },
            Desc4:
              "We run targeted paid advertising campaigns on social media platforms to increase reach, engagement, and conversions for your business.",
            title5: {
              title: "Influencer Marketing",
              icon: <AccountCircleIcon fontSize="large" />,
            },
            Desc5:
              "We collaborate with influencers and industry experts to amplify your brand message and reach a wider audience.",
            title6: {
              title: "Performance Analytics",
              icon: <CommitIcon fontSize="large" />,
            },
            Desc6:
              "We track and analyze key performance metrics to measure the effectiveness of your social media campaigns.",
          });
          break;
        case "3d-animation-services":
          setTitle("3D Animation Services");
          setDesc(
            "ASTECHY is a premier 3D animation studio, offering comprehensive MVP animation services to bring your minimum viable product (MVP) to life. With a wealth of experience in delivering successful 3D animations for startups and enterprises alike, we are your ultimate technology partner for MVP animation development."
          );
          setCards({
            title1: {
              title: "3D Modeling",
              icon: <ThreeDRotationIcon fontSize="large" />,
            },
            Desc1:
              "We specialize in creating high-quality 3D models of objects, characters, and environments for various industries and applications.",
            title2: {
              title: "Animation Production",
              icon: <ViewInArIcon fontSize="large" />,
            },
            Desc2:
              "Our expert animators bring your ideas to life through captivating 3D animations, including character animation, product demos etc.",
            title3: {
              title: "Visual Effects (VFX)",
              icon: <FilterHdrIcon fontSize="large" />,
            },
            Desc3:
              "We integrate stunning visual effects into your projects to enhance realism and create immersive storytelling experiences.",
            title4: {
              title: "Motion Graphics",
              icon: <AnimationIcon fontSize="large" />,
            },
            Desc4:
              "We design dynamic motion graphics and animated visuals to convey complex information and captivate audiences across different media platforms.",
            title5: {
              title: "3D Rendering",
              icon: <SentimentSatisfiedIcon fontSize="large" />,
            },
            Desc5:
              "We provide high-quality 3D rendering services to showcase your designs and concepts with realistic lighting, textures, and shadows.",
            title6: {
              title: "Storyboarding",
              icon: <AutoStoriesIcon fontSize="large" />,
            },
            Desc6:
              "We assist in developing compelling storyboards and scripts to outline the narrative and visual sequence of your 3D animation projects.",
          });
          break;
        case "services":
          setTitle("Our Services");
          setDesc(
            "At ASTECHY, we combine innovative service-driven architecture and state-of-the-art technology to create unparalleled digital products tailored to our clients’ requirements. Our unwavering commitment to customer satisfaction sets us apart in the industry."
          );
          break;
        default:
          setTitle("");
          setDesc("");
          setCards({
            title1: "",
            Desc1: "",
            title2: "",
            Desc2: "",
            title3: "",
            Desc3: "",
            title4: "",
            Desc4: "",
            title5: "",
            Desc5: "",
            title6: "",
            Desc6: "",
          });
          break;
      }
    } else {
      setTitle("");
      setDesc("");
      setCards({
        title1: "",
        Desc1: "",
        title2: "",
        Desc2: "",
        title3: "",
        Desc3: "",
        title4: "",
        Desc4: "",
        title5: "",
        Desc5: "",
        title6: "",
        Desc6: "",
      });
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
            desc: "ASTECHY's expertise extends from crafting robust digital ecosystems to tailoring bespoke digital solutions and offering comprehensive consulting services. Explore our eBook services to elevate your digital presence and engage your audience effectively.",
            partnerTitle: "Graphics Designing",
            partnerDesc:
              "At ASTECHY, we go beyond conventional eBook development services; we emerge as your dedicated digital publishing partners, committed to amplifying your brand's visibility in the digital realm. Here's why you should trust us with your eBook needs:",
          });
          break;
        case "web-application-development-services":
          setServicesCardsDesc({
            title: "Custom Web App",
            desc: "We offer full-cycle custom web application development services, from conceptualization and UX design to front- end development, back - end programming, testing and launch.Our key web app development services include:",
            partnerTitle: "Web App",
            partnerDesc:
              "Don’t settle for an average web app – get a custom solution tailored to your needs with ASTECHY. With ASTECHY as your web app development partner, you get:",
          });
          break;
        case "seo-services":
          setServicesCardsDesc({
            title: "Custom SEO",
            desc: "We provide complete SEO solutions, spanning from initial strategy development and keyword research to on-page optimization, content creation, and performance tracking. Our core SEO services include:",
            partnerTitle: "SEO",
            partnerDesc:
              "When selecting a partner for SEO services, experience, expertise, and a proven track record of success are paramount. We stand out as the premier choice for SEO solutions because:",
          });
          break;
        case "ui-ux-design-services":
          setServicesCardsDesc({
            title: "Custom UI/UX Designing",
            desc: "ASTECHY offers cutting-edge UI/UX design services to create intuitive, engaging digital experiences. With an expert team of designers and researchers, we help companies craft user-focused products that delight customers.",
            partnerTitle: "UI/UX Designing",
            partnerDesc:
              "At ASTECHY, we are more than just a UI/UX design company; we are your dedicated design allies, committed to elevating your brand in the digital landscape. Here’s why you should entrust your design needs to us:",
          });
          break;
        case "wordpress-development-services":
          setServicesCardsDesc({
            title: "Custom WordPress",
            desc: "From WordPress theme customization and plugin development to complex WordPress integrations, ASTECHY provides end-to-end WordPress website design and development, speed optimization, content implementation, security and maintenance, allowing you to focus on your business.",
            partnerTitle: "WordPress",
            partnerDesc:
              "With over a decade of WordPress experience, ASTECHY is your trusted partner for custom WordPress services. Here’s why you should choose us:",
          });
          break;
        case "social-media-marketing-services":
          setServicesCardsDesc({
            title: "Custom Social Media Marketing",
            desc: "Rely on ASTECHY for bespoke Social Media Marketing solutions aimed at creating high-engagement online presence. With extensive experience in crafting effective social media strategies, our team of experts specializes in the following services:",
            partnerTitle: "Social Media Marketing",
            partnerDesc:
              "ASTECHY emerges as the preferred option for customized social media marketing solutions, backed by a track record of successful campaigns. This establishes us as the ideal partner to transform your social media presence into a dynamic and impactful marketing tool.",
          });
          break;
        case "3d-animation-services":
          setServicesCardsDesc({
            title: "Custom 3D Animation",
            desc: "At ASTECHY, we offer a comprehensive array of 3D animation services to bring vibrancy to your innovative concepts. Our team of adept animators specializes in 3D animation development, ensuring seamless execution and captivating visuals for your project.",
            partnerTitle: "3D Animation",
            partnerDesc:
              "As a leading 3D animation studio, we take pride in our track record of success. We're not just a provider of bespoke 3D animation services; we're your partner in innovation. Here's why you should choose us for 3D animation development:",
          });
          break;
        default:
          setServicesCardsDesc({
            title: "",
            desc: "",
            partnerTitle: "",
            partnerDesc: "",
          });
          break;
      }
    } else {
      setServicesCardsDesc({
        title: "",
        desc: "",
        partnerTitle: "",
        partnerDesc: "",
      });
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
      icon: cards.title1.icon,
      title: cards.title1.title,
      description: cards.Desc1,
    },
    {
      icon: cards.title2.icon,
      title: cards.title2.title,
      description: cards.Desc2,
    },
  ];
  const serviceCardList1 = [
    {
      icon: cards.title3.icon,
      title: cards.title3.title,
      description: cards.Desc3,
    },
    {
      icon: cards.title4.icon,
      title: cards.title4.title,
      description: cards.Desc4,
    },
    {
      icon: cards.title5.icon,
      title: cards.title5.title,
      description: cards.Desc5,
    },
    {
      icon: cards.title6.icon,
      title: cards.title6.title,
      description: cards.Desc6,
    },
  ];

  return (
    <div style={{overflow:'hidden'}}>
      <div >
        <Heading
          workBtn={PageRoute == "services" ? true : false}
          visible={false}
          startedbtn={PageRoute == "services" ? false : true}
          text={title}
          paragraph={description}
          feedbackvisible={true}
        />
      </div>
      <div className="margintop row mt-5 " style={windowWidth <=1024?{display:"flex",flexDirection:"column",alignItems:"center"}:{}}>
        <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center px-5 ">
          {PageRoute == "services" ? (
            <>
              <h1 className="heading4034">
                Join us on the journey towards excellence!
              </h1>
              <p>
                Partner with our experts to bring your ideas to life and enhance
                your digital transformation with our comprehensive digital
                solutions and expert support.
              </p>
            </>
          ) : (
            <>
              <h1 className="heading4034" style={windowWidth <=1024?{width:'100%',textAlign:"center"}:{width:'75%'}}>
                Our{" "}
                <span className="changecolor">{servicesCardsDesc.title}</span>{" "}
                {PageRoute === "graphics-development-services" ||
                  PageRoute === "ui-ux-design-services"
                  ? ""
                  : "Development"}{" "}
                Services
              </h1>
              <p style={windowWidth <=1024?{width:'100%',textAlign:"center"}:{width:'75%',fontSize:'20px',fontWeight:"500"}}>{servicesCardsDesc.desc}</p>
            </>
          )}
        </div>
        {PageRoute == "services" ? (
          <>
            <div
              className={windowWidth < 500 ? "d-flex" : "row"}
              style={
                windowWidth <= 500
                  ? { flexDirection: "column" }
                  : { marginTop: "90px" }
              }
            >
              <div className="col-sm-1 col-md-1"></div>

              <div
                className="col-sm-5 col-md-5 my-5 leftsideExplore"
                data-aos="fade-right"
              >
                <h1 className="heading">01</h1>
                <h1 className="leftsideExploreHeading">
                  <strong style={{ color: "#2693fa" }}>Social Media </strong>
                  <strong style={{ color: "#ededed" }}>Marketing Services</strong>
                </h1>
                <p className="subheading">
                  Amplify Your Brand Reach with Social Media Marketing
                </p>
                <p className="sub-subheading">
                  Harness the power of social media to connect with your audience and
                  drive business growth with ASTECHY's comprehensive social media
                  marketing services. Our experienced team develops tailored
                  strategies to engage your target audience across various platforms,
                  creating compelling content and driving meaningful interactions.
                  From content creation to community management, we help you build a
                  strong presence and achieve your marketing goals.
                </p>
                <p className="subheading mt-5">
                  Explore ASTECHY’s Social Media Marketing Services:
                </p>
                <ul className="bulletpoint">
                  <li>Social Media Strategy</li>
                  <li>Content Creation</li>
                  <li>Community Management</li>
                  <li>Social Media Advertising</li>
                  <li>Influencer Marketing</li>
                  <li>Analytics and Reporting</li>
                </ul>
                <p className="sub-subheading mt-5">
                  Elevate your brand's social media presence with ASTECHY's expertise!
                </p>
                <div className="my-5 leftsideExploreButton">
                  <button className="learnmoreButoon mx-2">
                    <b>Learn More</b>
                  </button>
                </div>
              </div>
              <div className="col-sm-6 col-md-6" data-aos="fade-left">
                <a href="/" className="ExploreImage">
                  <img
                    className="imageSetting"
                    src={picture}
                    alt="profile picture"
                  />
                </a>
              </div>
            </div>
            <div
              className={windowWidth < 1024 ? "d-flex ExploreMoreForm" : "row"}
              style={windowWidth <= 1024 ? {} : { marginTop: "90px" }}
            >
              <div
                className="col-sm-6 col-md-5 col-order-2 "
                data-aos="fade-right"
              >
                <a href="/">
                  <img
                    className="imageSetting"
                    src={picture}
                    alt="profile picture"
                  />
                </a>
              </div>
              <div
                className="col-sm-5 col-md-5 col-order-1 my-5"
                data-aos="fade-left"
              >
                <h1 className="heading">02</h1>
                <h1 className="leftsideExploreHeading">
                  <strong style={{ color: "#2693fa" }}>Web </strong>
                  <strong style={{ color: "#ededed" }}>Application</strong>
                </h1>
                <p className="subheading">
                  Transform Your Digital Presence with Web Apps
                </p>
                <p className="sub-subheading">
                  Harness ASTECHY’s extensive tech expertise and
                  customer-centric web development approach to accelerate your
                  digital transformation. With over a decade of experience and a
                  talent-driven methodology, we create tailored solutions with
                  exceptional skill, delivering results that propel your
                  success.
                </p>
                <p className="subheading mt-5">
                  Discover ASTECHY’s Comprehensive Web App Services:
                </p>
                <ul className="bulletpoint">
                  <li>Full Stack Development</li>
                  <li>eCommerce Solutions</li>
                  <li>Custom Web App Design & Development</li>
                  <li>Content Management System (CMS) Development</li>
                  <li>Static Web Development</li>
                  <li>Python Web Development</li>
                  <li>PHP Web Development</li>
                  <li>WordPress Web Development</li>
                  <li>Shopify Web Development</li>
                </ul>
                <p className="sub-subheading mt-5">
                  Empower your digital strategy with ASTECHY today!
                </p>
                <div className="my-5 leftsideExploreButton">
                  <button className="learnmoreButoon mx-2">
                    <b>Learn More</b>
                  </button>
                </div>
              </div>
              <div className="col-sm-1 col-md-1 my-5"></div>
            </div>
            <div
              className={windowWidth < 500 ? "d-flex" : "row"}
              style={
                windowWidth <= 500
                  ? { flexDirection: "column" }
                  : { marginTop: "90px" }
              }
            >
              <div className="col-sm-1 col-md-1"></div>

              <div
                className="col-sm-5 col-md-5 my-5 leftsideExplore"
                data-aos="fade-right"
              >
                <h1 className="heading">03</h1>
                <h1 className="leftsideExploreHeading">
                  <strong style={{ color: "#2693fa" }}>UI/UX </strong>
                  <strong style={{ color: "#ededed" }}>
                    Designing Services
                  </strong>
                </h1>
                <p className="subheading">
                  Transform Your Digital Experience with UI/UX Design Services
                </p>
                <p className="sub-subheading">
                  Elevate your digital presence with ASTECHY’s exceptional UI/UX
                  design services. Our expert team harnesses the latest
                  technology to craft purpose-driven designs that streamline
                  navigation, boost on-site engagement, and provide an
                  outstanding user experience. Prepare to simplify your
                  interface complexity and captivate users like never before.
                </p>
                <p className="subheading mt-5">
                  Explore ASTECHY’s Comprehensive UI/UX Services:
                </p>
                <ul className="bulletpoint">
                  <li>Product Design</li>
                  <li>Website Design</li>
                  <li>Mobile App Design</li>
                  <li>UX Testing</li>
                  <li>Blockchain/NFT Design</li>
                  <li>Agile UX Design</li>
                </ul>
                <p className="sub-subheading mt-5">
                  Enhance your user experience with ASTECHY today!
                </p>
                <div className="my-5 leftsideExploreButton">
                  <button className="learnmoreButoon mx-2">
                    <b>Learn More</b>
                  </button>
                </div>
              </div>
              <div className="col-sm-6 col-md-6" data-aos="fade-left">
                <a href="/" className="ExploreImage">
                  <img
                    className="imageSetting"
                    src={picture}
                    alt="profile picture"
                  />
                </a>
              </div>
            </div>
            <div
              className={windowWidth < 1024 ? "d-flex ExploreMoreForm" : "row"}
              style={windowWidth <= 1024 ? {} : { marginTop: "90px" }}
            >
              <div
                className="col-sm-6 col-md-5 col-order-2 "
                data-aos="fade-right"
              >
                <a href="/">
                  <img
                    className="imageSetting"
                    src={picture}
                    alt="profile picture"
                  />
                </a>
              </div>
              <div
                className="col-sm-5 col-md-5 col-order-1 my-5"
                data-aos="fade-left"
              >
                <h1 className="heading">04</h1>
                <h1 className="leftsideExploreHeading">
                  <strong style={{ color: "#2693fa" }}>WordPress </strong>
                  <strong style={{ color: "#ededed" }}>Development</strong>
                </h1>
                <p className="subheading">
                  Experience Unmatched Success with WordPress Development
                </p>
                <p className="sub-subheading">
                  Unlock the full potential of your business with a custom,
                  scalable, and user-friendly website expertly crafted by our
                  team of WordPress Development professionals. With over 13
                  years of experience, we have the skills and expertise to build
                  a website that will take your online presence to the next
                  level.
                </p>
                <p className="subheading mt-5">
                  Explore ASTECHY’s Expertise in WordPress Development:
                </p>
                <ul className="bulletpoint">
                  <li>WordPress Theme Customization:</li>
                  <li>Responsive Layouts</li>
                  <li>Custom Plugin Development</li>
                  <li>Secure WordPress Development</li>
                  <li>WordPress Website Maintenance</li>
                  <li>Speed Optimization</li>
                </ul>
                <p className="sub-subheading mt-5">
                  Grow your business with ASTECHY today!
                </p>
                <div className="my-5 leftsideExploreButton">
                  <button className="learnmoreButoon mx-2">
                    <b>Learn More</b>
                  </button>
                </div>
              </div>
              <div className="col-sm-1 col-md-1 my-5"></div>
            </div>
            <div
              className={windowWidth < 500 ? "d-flex" : "row"}
              style={
                windowWidth <= 500
                  ? { flexDirection: "column" }
                  : { marginTop: "90px" }
              }
            >
              <div className="col-sm-1 col-md-1"></div>

              <div
                className="col-sm-5 col-md-5 my-5 leftsideExplore"
                data-aos="fade-right"
              >
                <h1 className="heading">05</h1>
                <h1 className="leftsideExploreHeading">
                  <strong style={{ color: "#2693fa" }}>SEO </strong>
                  <strong style={{ color: "#ededed" }}>Services</strong>
                </h1>
                <p className="subheading">
                  Boost Your Online Presence with SEO Services
                </p>
                <p className="sub-subheading">
                  Maximize your online visibility and reach your target audience
                  effectively with ASTECHY’s top-notch SEO services. Our expert
                  team employs advanced strategies and techniques to optimize
                  your website for search engines, driving organic traffic and
                  ensuring higher rankings. Experience enhanced online
                  performance and stay ahead of the competition with our
                  comprehensive SEO solutions.
                </p>
                <p className="subheading mt-5">
                  Discover ASTECHY’s SEO Services:
                </p>
                <ul className="bulletpoint">
                  <li>On-Page SEO</li>
                  <li>Off-Page SEO</li>
                  <li>Local SEO</li>
                  <li>SEO Audits</li>
                  <li>Link Building</li>
                  <li>SEO Consulting</li>
                </ul>
                <p className="sub-subheading mt-5">
                  Elevate your online presence with ASTECHY's SEO expertise!
                </p>
                <div className="my-5 leftsideExploreButton">
                  <button className="learnmoreButoon mx-2">
                    <b>Learn More</b>
                  </button>
                </div>
              </div>
              <div className="col-sm-6 col-md-6" data-aos="fade-left">
                <a href="/" className="ExploreImage">
                  <img
                    className="imageSetting"
                    src={picture}
                    alt="profile picture"
                  />
                </a>
              </div>
            </div>
            <div
              className={windowWidth < 1024 ? "d-flex ExploreMoreForm" : "row"}
              style={windowWidth <= 1024 ? {} : { marginTop: "90px" }}
            >
              <div
                className="col-sm-6 col-md-5 col-order-2 "
                data-aos="fade-right"
              >
                <a href="/">
                  <img
                    className="imageSetting"
                    src={picture}
                    alt="profile picture"
                  />
                </a>
              </div>
              <div
                className="col-sm-5 col-md-5 col-order-1 my-5"
                data-aos="fade-left"
              >
                <h1 className="heading">06</h1>
                <h1 className="leftsideExploreHeading">
                  <strong style={{ color: "#2693fa" }}>Graphics </strong>
                  <strong style={{ color: "#ededed" }}>
                    Designing Services
                  </strong>
                </h1>
                <p className="subheading">
                  Elevate Your Brand with Stunning Graphics Designing
                </p>
                <p className="sub-subheading">
                  Stand out from the crowd and leave a lasting impression with
                  ASTECHY's exceptional graphics designing services. Our
                  talented designers create visually appealing graphics that
                  communicate your brand message effectively. From logos and
                  branding to marketing materials and social media assets, we
                  deliver high-quality designs that resonate with your target
                  audience.
                </p>
                <p className="subheading mt-5">
                  Explore ASTECHY’s Graphics Designing Services:
                </p>
                <ul className="bulletpoint">
                  <li>Logo Design</li>
                  <li>Branding</li>
                  <li>Print Design</li>
                  <li>Web Graphics</li>
                  <li>Social Media Graphics</li>
                  <li>Illustrations</li>
                </ul>
                <p className="sub-subheading mt-5">
                  Transform your brand's visual identity with ASTECHY today!
                </p>
                <div className="my-5 leftsideExploreButton">
                  <button className="learnmoreButoon mx-2">
                    <b>Learn More</b>
                  </button>
                </div>
              </div>
              <div className="col-sm-1 col-md-1 my-5"></div>
            </div>
            <div
              className={windowWidth < 500 ? "d-flex" : "row"}
              style={
                windowWidth <= 500
                  ? { flexDirection: "column" }
                  : { marginTop: "90px" }
              }
            >
              <div className="col-sm-1 col-md-1"></div>

              <div
                className="col-sm-5 col-md-5 my-5 leftsideExplore"
                data-aos="fade-right"
              >
                <h1 className="heading">07</h1>
                <h1 className="leftsideExploreHeading">
                  <strong style={{ color: "#2693fa" }}>3D Animation </strong>
                  <strong style={{ color: "#ededed" }}>
                    Designing Services
                  </strong>
                </h1>
                <p className="subheading">
                  Bring Your Imagination to Life with 3D Animation
                </p>
                <p className="sub-subheading">
                  Unlock the power of visual storytelling with ASTECHY's
                  captivating 3D animation services. Our skilled animators
                  breathe life into your ideas, creating immersive and engaging
                  animations that leave a lasting impact on your audience. From
                  product demonstrations to architectural visualization, we
                  bring your concepts to life with stunning 3D animations.
                </p>
                <p className="subheading mt-5">
                  Explore ASTECHY’s 3D Animation Services:
                </p>
                <ul className="bulletpoint">
                  <li>Product Animation</li>
                  <li>Architectural Visualization</li>
                  <li>Character Animation</li>
                  <li>Medical Animation</li>
                  <li>Visual Effects</li>
                  <li>Virtual Reality</li>
                </ul>
                <p className="sub-subheading mt-5">
                  Let your imagination soar with ASTECHY's 3D animation
                  expertise!
                </p>
                <div className="my-5 leftsideExploreButton">
                  <button className="learnmoreButoon mx-2">
                    <b>Learn More</b>
                  </button>
                </div>
              </div>
              <div className="col-sm-6 col-md-6" data-aos="fade-left">
                <a href="/" className="ExploreImage">
                  <img
                    className="imageSetting"
                    src={picture}
                    alt="profile picture"
                  />
                </a>
              </div>
            </div>
          </>
        ) : (
          <div className="col-lg-5 mt-5 mx-3 px-0" style={windowWidth <=1024?{width:"86vw" ,display:"flex",justifyContent:"center"}:{}}>
            <ServiceCardList ServiceCardList={serviceCardList} />
          </div>
        )}
      </div>
      {PageRoute == "services" ? (
        <></>
      ) : (
        <div className={windowWidth <=1024?"mt-4 d-flex justify-content-center ":"mt-5 d-flex justify-content-center "}>
          <div style={{ width: "86vw" }}>
            <ServiceCardList ServiceCardList={serviceCardList1} />
          </div>
        </div>
      )}
      {PageRoute == "services" ? (
        <></>
      ) : (
        <div>
          <DevelopmentProcess />
        </div>
      )}
      {PageRoute == "services" ? (
        <></>
      ) : (
        <div>
          <ProjectPartner
            mainText={servicesCardsDesc.partnerTitle}
            subText={servicesCardsDesc.partnerDesc}
            buttonText={servicesCardsDesc.partnerTitle}
          />
        </div>
      )}
      {PageRoute == "services" ? (
        <></>
      ) : (
        <div>
          <SolutionProvider />
        </div>
      )}
      {PageRoute == "services" ? (
        <></>
      ) : (
        <div>
          <HireUs />
        </div>
      )}
      {PageRoute == "services" ? (
        <></>
      ) : (
        <div>
          <OurClient />
        </div>
      )}
      {PageRoute == "services" ? (
        <></>
      ) : (
        <div className="">
          <Accordion panels={panels} />
        </div>
      )}
      <div className="">
        <TechnologyStack />
      </div>
      {PageRoute == "services" ? (
        <></>
      ) : (
        <div className="mt-5">
          <Feedback />
        </div>
      )}
    </div>
  );
};

export default BlockchainPage;
