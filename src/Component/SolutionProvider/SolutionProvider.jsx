import React, { useEffect, useState } from 'react';
import './SolutionProvider.css';

const SolutionProvider = () => {
    const [activeTab, setActiveTab] = useState(1);
    const [servicesIndustries, setServicesIndustries] = useState({
        title: "",
        desc: "",
        tabs: { first: '', second: '', third: '', fourth: '', fifth: '', sixth: '' },
        tabsdesc: { first: '', second: '', third: '', fourth: '', fifth: '', sixth: '' }
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
                        desc: "SSTech's expertise extends from crafting robust digital ecosystems to tailoring bespoke digital solutions and offering comprehensive consulting services. Explore our eBook services to elevate your digital presence and engage your audience effectively.",
                        tabs: { first: 'Ecommerce', second: '', third: '', fourth: '', fifth: '', sixth: '' },
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
                            third: 'Ropstam offers specialized fintech web application development services for banking, trading, lending, and insurance clients. Our finance web apps provide robust security, real-time data, complex calculations, and compliance with regulations. Our proven expertise in building web platforms for stockbrokers, forex brokers, peer-to-peer lenders, and crypto exchanges differentiates us.',
                            fourth: 'Optimizing supply chain workflows is what we excel at. Ropstam’s logistics web apps track orders, manage freight, enable dispatching, and provide real-time visibility into the entire distribution cycle. Our logistics clients rely on warehouse integration, vehicle routing, barcode scanning, and other supply chain-focused features we bake into our logistics web app solutions.',
                            fifth: 'Ropstam has contributed to the evolution of online learning and campus management in the education sector. From LMS platforms to online course marketplaces, Ropstam develops innovative ed-tech web applications to facilitate digital learning. We have developed e-learning platforms, student management systems, and communication tools for educational institutions. Our web app solutions enhance the learning experience by providing educators and students with the tools they need to collaborate and succeed.',
                            sixth: 'The sports industry demands real-time engagement and interaction with fans. Ropstam has created web applications for sports teams, leagues, and organizations that enable live score updates, fan engagement, and ticketing solutions. We help sports entities connect with their audiences on a deeper level, fostering loyalty and enthusiasm among fans.'
                        }
                    });
                    break;
                case "seo-services":
                    setServicesIndustries({
                        title: "SEO",
                        desc: "We provide complete SEO solutions, spanning from initial strategy development and keyword research to on-page optimization, content creation, and performance tracking. Our core SEO services include:",
                        tabs: { first: 'Ecommerce', second: '', third: '', fourth: '', fifth: '', sixth: '' },
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
                            fifth: 'Ropstam has partnered with logistics companies to design seamless UI/UX for dispatch, delivery tracking and fleet management solutions used daily by drivers.',
                            sixth: 'We have delivered user experience and user interface designs, and website development services for marketing SaaS platforms, campaign managers, social media tools and more. Our design maximizes marketer experience and productivity.'
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
                            first: 'In the ever-evolving landscape of education, a dynamic online presence is essential. Ropstam’s custom WordPress developers understand the unique challenges faced by educational institutions. We specialize in crafting WordPress solutions tailored to meet the needs of schools, colleges, and e-learning platforms. From interactive course catalogues to intuitive learning management systems, we empower educators to deliver quality content and engage with students effectively.',
                            second: 'In the healthcare sector, security, accessibility, and user-friendliness are paramount. Our WordPress development solutions for healthcare organizations prioritize patient confidentiality and flawless user experiences. Whether you need a patient portal, appointment scheduling system, or a medical blog, we create WordPress websites that builds trust and ensure easy access to vital health information.',
                            third: 'Trust and reliability are at the core of the financial industry. Ropstam’s expert WordPress developers excel in crafting secure, responsive, and compliant websites for financial institutions. We understand the importance of data protection and provide robust solutions for online banking, investment platforms, and financial advisory services. Rest assured, your clients’ financial information is in safe hands.',
                            fourth: 'In the competitive world of real estate, a captivating online presence can make all the difference. Our WordPress design and development services for real estate agencies and property management companies include interactive property listings, virtual tours, and lead generation tools. With our WordPress web development solutions, we help you showcase your properties effectively, attract potential buyers or renters, and streamline your business operations.',
                            fifth: 'For retail and e-Commerce businesses, the online store-front is the heart of the operation. Ropstam’s experienced team of WordPress website developers specialize in creating stunning, high-performing e-Commerce websites. We integrate secure payment gateways, optimize for mobile shopping, and enhance the user experience to drive sales and growth. With our services, your e-Commerce business can thrive in the digital marketplace.',
                            sixth: 'In the fast-paced world of media and publishing, a dynamic online presence is vital. Ropstam’s talented WordPress developers create visually engaging and content-rich websites for media outlets, magazines, and publishers. We prioritize mobile responsiveness, content distribution, and audience engagement, helping you reach a wider readership and stay at the forefront of digital media trends.'
                        }
                    });
                    break;
                case "social-media-marketing-services":
                    setServicesIndustries({
                        title: "Social Media Marketing",
                        desc: "Rely on SSTech for bespoke Social Media Marketing solutions aimed at creating high-engagement online presence. With extensive experience in crafting effective social media strategies, our team of experts specializes in the following services:",
                        tabs: { first: 'Ecommerce', second: '', third: '', fourth: '', fifth: '', sixth: '' },
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
                case "3d-animation-services":
                    setServicesIndustries({
                        title: "3D Animation",
                        desc: "At SSTech, we offer a comprehensive array of 3D animation services to bring vibrancy to your innovative concepts. Our team of adept animators specializes in 3D animation development, ensuring seamless execution and captivating visuals for your project.",
                        tabs: { first: 'Ecommerce', second: '', third: '', fourth: '', fifth: '', sixth: '' },
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
                default:
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
                {/* Shapatar image*/}
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
                        {/* <span onClick={() => handleTabClick(7)} className={activeTab === 7 ? 'active-tabsp' : 'tabsp'}>{servicesIndustries.tabs.first}</span> */}
                    </div>
                    <div className="tabsp-content">
                        {activeTab === 1 && <h3 className='spdesc'>{servicesIndustries.tabsdesc.first}</h3>}
                        {activeTab === 2 && <h3 className='spdesc'>{servicesIndustries.tabsdesc.second}</h3>}
                        {activeTab === 3 && <h3 className='spdesc'>{servicesIndustries.tabsdesc.third}</h3>}
                        {activeTab === 4 && <h3 className='spdesc'>{servicesIndustries.tabsdesc.fourth}</h3>}
                        {activeTab === 5 && <h3 className='spdesc'>{servicesIndustries.tabsdesc.fifth}</h3>}
                        {activeTab === 6 && <h3 className='spdesc'>{servicesIndustries.tabsdesc.sixth}</h3>}
                        {/* {activeTab === 7 && <h3 className='togetherpara'>Let’s Start a New {servicesIndustries.title} Project Together for Tab 7</h3>} */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SolutionProvider;
