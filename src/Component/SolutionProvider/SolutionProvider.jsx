import React, { useEffect, useState } from 'react';
import './SolutionProvider.css';
import graphics from '../Assets/computer-screen-with-colorful-paint-it-generative-ai_97167-1066.avif';
import uiux from '../Assets/uiux.avif';
import webdev from '../Assets/web dev.avif';
import seo from '../Assets/seo.avif';
import wordpress from '../Assets/wordpress.png';
import animation from '../Assets/3d-animation-banner.jpg';
import socialmedia from '../Assets/social-media-marketing-guide.webp';

const SolutionProvider = () => {
    const [activeTab, setActiveTab] = useState(1);
    const [servicesIndustries, setServicesIndustries] = useState({
        title: "",
        desc: "",
        tabs: { first: '', second: '', third: '', fourth: '', fifth: '', sixth: '' },
        tabsdesc: { first: '', second: '', third: '', fourth: '', fifth: '', sixth: '', image: undefined },
    });

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    useEffect(() => {
        getHeadingDescforIndustries();
    }, []);
    const getHeadingDescforIndustries = () => {
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
                    setServicesIndustries({
                        title: "Graphics Designing",
                        desc: "We acknowledge the distinctive demands of each industry. Hence, our custom Graphics Designing services are tailored to meet the specific requirements of your industry. By harnessing innovative design techniques, we elevate the visual appeal of your brand, ensuring it stands out amidst competition. Our expertise in Graphics Designing enhances aesthetics, usability, and brand identity, delivering impactful solutions that resonate with your target audience.",
                        tabs: {
                            first: 'Healthcare',
                            second: 'Travel',
                            third: 'Finance',
                            fourth: 'Logistics',
                            fifth: 'Education',
                            sixth: 'Sports'
                        },
                        tabsdesc: {
                            first: 'SSTech has revolutionized patient care and medical operations through innovative graphics designing solutions in the healthcare industry. We have created visually appealing and intuitive designs for healthcare providers, facilitating patient management, telemedicine, electronic health records (EHR), and more. Our designs empower healthcare organizations to streamline processes, enhance patient engagement, and deliver better outcomes.',
                            second: 'From captivating website designs to immersive user interfaces, we specialize in crafting visually stunning graphics for travel companies. Our designs enable travel providers to offer seamless online booking experiences, itinerary management, and real-time updates to travelers. With a focus on agile design methodologies and integration of travel-specific features, our solutions enhance efficiency for travel providers and elevate the travel experience for customers.',
                            third: 'SSTech offers specialized graphics designing services for fintech web applications catering to banking, trading, lending, and insurance clients. Our finance designs prioritize robust security, real-time data visualization, and compliance with regulatory standards. With expertise in user-centric design principles, we create intuitive interfaces that facilitate complex financial transactions and provide a seamless user experience.',
                            fourth: 'Our graphics designing solutions optimize supply chain workflows by creating visually appealing interfaces for logistics web applications. From order tracking to freight management, our designs offer real-time visibility into the entire distribution cycle. With a focus on user-friendly design and integration of supply chain-focused features, our solutions empower logistics clients to enhance operational efficiency and improve decision-making.',
                            fifth: 'SSTech has contributed to the evolution of online learning with visually engaging graphics designing solutions for educational web applications. From designing intuitive learning management systems (LMS) to online course marketplaces, our designs facilitate digital learning experiences. With a focus on enhancing user engagement and collaboration, our designs empower educators and students to succeed in the digital learning environment.',
                            sixth: 'The sports industry demands dynamic and engaging graphics for web applications that connect with fans. SSTech specializes in creating visually striking designs for sports teams, leagues, and organizations. Our designs enable live score updates, fan engagement, and ticketing solutions, fostering loyalty and enthusiasm among fans. With a focus on real-time interaction and visual appeal, our designs elevate the sports viewing experience.',
                            image: graphics
                        },
                    });
                    break;
                case "web-application-development-services":
                    setServicesIndustries({
                        title: "Web Application Development",
                        desc: "Our seasoned team provides web app development solutions tailored to your specific industry needs. Our customized approach results in web apps that solve real business problems and create value for your organization.",
                        tabs: {
                            first: 'Healthcare',
                            second: 'Travel',
                            third: 'Finance',
                            fourth: 'Logistics',
                            fifth: 'Education',
                            sixth: 'Sports'
                        },
                        tabsdesc: {
                            first: 'SSTech has played a pivotal role in revolutionizing patient care and medical operations through innovative web app development solutions in the healthcare industry. We have created secure and user-friendly platforms for healthcare providers, facilitating patient management, telemedicine, electronic health records (EHR), and more. Our solutions empower healthcare organizations to streamline processes, enhance patient engagement, and deliver better outcomes.',
                            second: 'From flight booking engines to hotel reservation systems, we have developed web applications that enable travel companies to offer online booking, itinerary management, and real-time updates to travelers. Our travel industry clients benefit from our agile approach, rapid prototyping, and expertise in integrating payment gateways, maps, calendars, and other travel-specific APIs. Our solutions not only boost efficiency for travel providers but also enhance the travel experience for customers, ensuring memorable journeys.',
                            third: 'SSTech offers specialized fintech web application development services for banking, trading, lending, and insurance clients. Our finance web apps provide robust security, real-time data, complex calculations, and compliance with regulations. Our proven expertise in building web platforms for stockbrokers, forex brokers, peer-to-peer lenders, and crypto exchanges differentiates us.',
                            fourth: 'Optimizing supply chain workflows is what we excel at. SSTech’s logistics web apps track orders, manage freight, enable dispatching, and provide real-time visibility into the entire distribution cycle. Our logistics clients rely on warehouse integration, vehicle routing, barcode scanning, and other supply chain-focused features we bake into our logistics web app solutions.',
                            fifth: 'SSTech has contributed to the evolution of online learning and campus management in the education sector. From LMS platforms to online course marketplaces, SSTech develops innovative ed-tech web applications to facilitate digital learning. We have developed e-learning platforms, student management systems, and communication tools for educational institutions. Our web app solutions enhance the learning experience by providing educators and students with the tools they need to collaborate and succeed.',
                            sixth: 'The sports industry demands real-time engagement and interaction with fans. SSTech has created web applications for sports teams, leagues, and organizations that enable live score updates, fan engagement, and ticketing solutions. We help sports entities connect with their audiences on a deeper level, fostering loyalty and enthusiasm among fans.',
                            image: webdev
                        }
                    });
                    break;
                case "seo-services":
                    setServicesIndustries({
                        title: "SEO",
                        desc: "We provide complete SEO solutions, spanning from initial strategy development and keyword research to on-page optimization, content creation, and performance tracking. Our core SEO services include:",
                        tabs: {
                            first: 'Ecommerce',
                            second: 'Real Estate',
                            third: 'Finance',
                            fourth: 'Logistics',
                            fifth: 'Education',
                            sixth: 'Travel'
                        },
                        tabsdesc: {
                            first: 'Maximize your online sales with our comprehensive SEO services tailored for e-commerce websites. Our SEO strategies focus on optimizing product pages, improving website navigation, and implementing schema markup to enhance search engine visibility. From keyword research to on-page optimization and technical SEO audits, our e-commerce SEO solutions drive targeted traffic, increase conversions, and boost revenue for online stores.',
                            second: 'Elevate your real estate business with our specialized SEO services designed for real estate websites. Our SEO strategies target local search optimization, including optimizing property listings, enhancing Google My Business profiles, and building citations to improve visibility in local search results. With a focus on targeting relevant keywords and optimizing for local intent, our real estate SEO solutions attract more qualified leads and drive property sales.',
                            third: 'SSTech provides specialized SEO services for finance-related websites, including banking, trading, lending, and insurance platforms. Our SEO strategies focus on optimizing financial content, improving website performance, and enhancing user experience to increase organic traffic and conversions. With a data-driven approach and industry-specific expertise, we help finance companies rank higher in search engine results and gain a competitive edge.',
                            fourth: 'Our SEO services for logistics companies are tailored to improve online visibility and drive targeted traffic to logistics websites. We optimize logistics-related content, including shipment tracking, freight management, and supply chain solutions, to improve search engine rankings and attract potential customers. With strategic keyword targeting and technical SEO optimization, we help logistics businesses expand their online presence and generate more leads.',
                            fifth: 'SSTech specializes in SEO services for educational institutions, including schools, colleges, and e-learning platforms. Our SEO strategies focus on optimizing educational content, improving website structure, and increasing organic visibility in search engine results. From optimizing course descriptions to enhancing website speed and mobile-friendliness, our SEO solutions help educational organizations attract more students and boost enrollment.',
                            sixth: 'Elevate your travel business with our comprehensive SEO services designed for the travel industry. Our SEO strategies encompass keyword research, content optimization, and link building to improve search engine rankings for travel websites. We optimize travel-related content, including destination guides, hotel listings, and travel itineraries, ensuring increased visibility and attracting more travelers to your platform.',
                            image: seo
                        }
                    });
                    break;
                case "ui-ux-design-services":
                    setServicesIndustries({
                        title: "UI/UX Designing",
                        desc: "Our designers have created award-winning solutions across a diverse range of industries. This extensive experience allows us to craft customized UI/UX that aligns perfectly to your specific market context and end-users.",
                        tabs: {
                            first: 'Ecommerce',
                            second: 'Real Estate',
                            third: 'Finance',
                            fourth: 'Education',
                            fifth: 'Logistics',
                            sixth: 'Marketing'
                        
                        },
                        tabsdesc: {
                            first: 'Our designers have created award-winning solutions across a diverse range of industries. This extensive experience allows us to craft customized UI/UX that aligns perfectly to your specific market context and end-users.',
                            second: 'SSTech offers specialized real estate UI/UX design services. We design property search, listings, brokerage and property management interfaces that connect effectively with real estate users and their journey.',
                            third: 'Our financial services expertise has enabled us to design stellar UI/UX of custom software developed for fintech startups and leading financial institutions. We craft intuitive, simple, secure financial product interfaces catering to complex user needs.',
                            fourth: 'Our edtech UI/UX design experience spans learning management systems, online classrooms, education apps and more. We create engaging student and educator interfaces focused on learning outcomes.',
                            fifth: 'SSTech has partnered with logistics companies to design seamless UI/UX for dispatch, delivery tracking and fleet management solutions used daily by drivers.',
                            sixth: 'We have delivered user experience and user interface designs, and website development services for marketing SaaS platforms, campaign managers, social media tools and more. Our design maximizes marketer experience and productivity.',
                            image: uiux
                        }
                    });
                    break;
                case "wordpress-development-services":
                    setServicesIndustries({
                        title: "WordPress Website Development",
                        desc: "We understand that every industry has unique demands. That’s why we provide custom WordPress website development services that cater to your industry’s specific requirements. Whether you need a marketing site, e-commerce store, CMS, or community portal, we’ve built it before.",
                        tabs: {
                            first: 'Education',
                            second: 'Healthcare',
                            third: 'Finance',
                            fourth: 'Real Estate',
                            fifth: 'E-Commerce',
                            sixth: 'Media'
                        },
                        tabsdesc: {
                            first: 'In the ever-evolving landscape of education, a dynamic online presence is essential. SSTech’s custom WordPress developers understand the unique challenges faced by educational institutions. We specialize in crafting WordPress solutions tailored to meet the needs of schools, colleges, and e-learning platforms. From interactive course catalogues to intuitive learning management systems, we empower educators to deliver quality content and engage with students effectively.',
                            second: 'In the healthcare sector, security, accessibility, and user-friendliness are paramount. Our WordPress development solutions for healthcare organizations prioritize patient confidentiality and flawless user experiences. Whether you need a patient portal, appointment scheduling system, or a medical blog, we create WordPress websites that builds trust and ensure easy access to vital health information.',
                            third: 'Trust and reliability are at the core of the financial industry. SSTech’s expert WordPress developers excel in crafting secure, responsive, and compliant websites for financial institutions. We understand the importance of data protection and provide robust solutions for online banking, investment platforms, and financial advisory services. Rest assured, your clients’ financial information is in safe hands.',
                            fourth: 'In the competitive world of real estate, a captivating online presence can make all the difference. Our WordPress design and development services for real estate agencies and property management companies include interactive property listings, virtual tours, and lead generation tools. With our WordPress web development solutions, we help you showcase your properties effectively, attract potential buyers or renters, and streamline your business operations.',
                            fifth: 'For retail and e-Commerce businesses, the online store-front is the heart of the operation. SSTech’s experienced team of WordPress website developers specialize in creating stunning, high-performing e-Commerce websites. We integrate secure payment gateways, optimize for mobile shopping, and enhance the user experience to drive sales and growth. With our services, your e-Commerce business can thrive in the digital marketplace.',
                            sixth: 'In the fast-paced world of media and publishing, a dynamic online presence is vital. SSTech’s talented WordPress developers create visually engaging and content-rich websites for media outlets, magazines, and publishers. We prioritize mobile responsiveness, content distribution, and audience engagement, helping you reach a wider readership and stay at the forefront of digital media trends.',
                            image: wordpress
                        }
                    });
                    break;
                case "social-media-marketing-services":
                    setServicesIndustries({
                        title: "Social Media Marketing",
                        desc: "Rely on SSTech for bespoke Social Media Marketing solutions aimed at creating high-engagement online presence. With extensive experience in crafting effective social media strategies, our team of experts specializes in the following services:",
                        tabs: {
                            first: 'Strategy',
                            second: 'Analysis',
                            third: 'Optimization',
                            fourth: 'Interaction',
                            fifth: 'Planning',
                            sixth: 'Partnerships'
                        },
                        tabsdesc: {
                            first: "Develop a comprehensive content strategy tailored for social media platforms to engage your target audience effectively. This includes creating diverse content formats such as images, videos, and infographics to captivate users' attention.",
                            second: 'Conduct thorough audience analysis to understand your target demographics, interests, and behaviors. Utilize social media analytics tools to gather insights and tailor your content to resonate with your audience.',
                            third: 'Choose the most relevant social media platforms based on your target audience and industry. Optimize your profiles with compelling visuals, informative descriptions, and relevant keywords to enhance visibility and attract followers.',
                            fourth: 'Foster a sense of community on social media by actively engaging with your audience through comments, messages, and discussions. Respond promptly to inquiries, address feedback, and encourage user-generated content to build brand loyalty.',
                            fifth: 'Develop a content calendar to schedule and organize your social media posts effectively. Plan content themes, campaigns, and promotions in advance to maintain consistency and maximize engagement.',
                            sixth: "Collaborate with influencers and industry experts to amplify your brand's reach and credibility on social media. Identify relevant influencers in your niche and establish authentic partnerships to leverage their audience and boost brand awareness.",
                            image: socialmedia
                        }
                    });
                    break;
                case "3d-animation-services":
                    setServicesIndustries({
                        title: "3D Animation",
                        desc: "At SSTech, we offer a comprehensive array of 3D animation services to bring vibrancy to your innovative concepts. Our team of adept animators specializes in 3D animation development, ensuring seamless execution and captivating visuals for your project.",
                        tabs: {
                            first: 'Animation',
                            second: 'Visualization',
                            third: 'Graphics',
                            fourth: 'VR',
                            fifth: 'Advertising',
                            sixth: 'Product Visualize'
                        },
                        tabsdesc: {
                            first: 'Bring characters to life through dynamic 3D animation, imbuing them with personality, emotion, and fluid movement for engaging storytelling.',
                            second: 'Create lifelike 3D animations of architectural designs and environments, enabling clients to visualize spaces, layouts, and construction projects before implementation.',
                            third: 'Design stunning motion graphics and visual effects using 3D animation techniques, enhancing videos, presentations, and multimedia projects with dynamic visuals.',
                            fourth: 'Produce immersive VR and AR experiences with 3D animation, allowing users to interact with virtual environments and digital objects in real-world settings.',
                            fifth: 'Enhance advertising campaigns and promotional materials with attention-grabbing 3D animations, effectively communicating brand messages and attracting target audiences.',
                            sixth: 'Showcase products and prototypes with realistic 3D animations, allowing viewers to explore features, functionalities, and design details in a captivating manner.',
                            image: animation
                        }
                    });
                    break;
                default:
                    setServicesIndustries({
                        title: "", desc: "",
                        tabs: {
                            first: '',
                            second: '',
                            third: '',
                            fourth: '',
                            fifth: '',
                            sixth: ''
                        },
                        tabsdesc: {
                            first: '',
                            second: '',
                            third: '',
                            fourth: '',
                            fifth: '',
                            sixth: ''
                        }
                    });
                    break;
            }
        } else {
            setServicesIndustries({
                title: "", desc: "", tabs: { first: '', second: '', third: '', fourth: '', fifth: '', sixth: '' },
                tabsdesc: {
                    first: '',
                    second: '',
                    third: '',
                    fourth: '',
                    fifth: '',
                    sixth: ''
                }
            });
        }
    };

    return (
        <div className={"spcontainer mt-4"}>
            <div className="spleft-side">
                <div className='d-flex justify-content-end'>
                    <img src={servicesIndustries.tabsdesc.image} alt='' height={'400px'} width={'350px'} />
                </div>
            </div>
            <div className="spright-side">
                <div className="spcard-container">
                    <h2 className='partnerheading'><span className='changecolor'>{servicesIndustries.title}</span> Solution for Industries</h2>
                    <p className='sppara'>{servicesIndustries.desc}</p>
                    <div className="tabsp">
                        <span onClick={() => handleTabClick(1)} className={activeTab === 1 ? 'active-tabsp' : 'tabsp'}>{servicesIndustries.tabs.first}</span>
                        <span onClick={() => handleTabClick(2)} className={activeTab === 2 ? 'active-tabsp' : 'tabsp'}>{servicesIndustries.tabs.second}</span>
                        <span onClick={() => handleTabClick(3)} className={activeTab === 3 ? 'active-tabsp' : 'tabsp'}>{servicesIndustries.tabs.third}</span>
                        <span onClick={() => handleTabClick(4)} className={activeTab === 4 ? 'active-tabsp' : 'tabsp'}>{servicesIndustries.tabs.fourth}</span>
                        <span onClick={() => handleTabClick(5)} className={activeTab === 5 ? 'active-tabsp' : 'tabsp'}>{servicesIndustries.tabs.fifth}</span>
                        <span onClick={() => handleTabClick(6)} className={activeTab === 6 ? 'active-tabsp' : 'tabsp'}>{servicesIndustries.tabs.sixth}</span>
                    </div>
                    <div className="tabsp-content">
                        {activeTab === 1 && <h3 className='spdesc'>{servicesIndustries.tabsdesc.first}</h3>}
                        {activeTab === 2 && <h3 className='spdesc'>{servicesIndustries.tabsdesc.second}</h3>}
                        {activeTab === 3 && <h3 className='spdesc'>{servicesIndustries.tabsdesc.third}</h3>}
                        {activeTab === 4 && <h3 className='spdesc'>{servicesIndustries.tabsdesc.fourth}</h3>}
                        {activeTab === 5 && <h3 className='spdesc'>{servicesIndustries.tabsdesc.fifth}</h3>}
                        {activeTab === 6 && <h3 className='spdesc'>{servicesIndustries.tabsdesc.sixth}</h3>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SolutionProvider;
