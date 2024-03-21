import React, { useEffect, useState } from 'react';
import './SolutionProvider.css';

const SolutionProvider = () => {
    const [activeTab, setActiveTab] = useState(1);
    const [servicesIndustries, setServicesIndustries] = useState({
        title: "",
        desc: "",
    });

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    useEffect(()=>{
        getHeadingDescforIndustries();
    },[]);
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
                        partnerTitle: 'Graphics Designing',
                        partnerDesc: "At SSTech, we go beyond conventional eBook development services; we emerge as your dedicated digital publishing partners, committed to amplifying your brand's visibility in the digital realm. Here's why you should trust us with your eBook needs:"
                    });
                    break;
                case "web-application-development-services":
                    setServicesIndustries({
                        title: "Web Application Development",
                        desc: "We offer full-cycle custom web application development services, from conceptualization and UX design to front- end development, back - end programming, testing and launch.Our key web app development services include:",
                        partnerTitle: 'Web App',
                        partnerDesc: 'Don’t settle for an average web app – get a custom solution tailored to your needs with Ropstam. With Ropstam as your web app development partner, you get:'
                    });
                    break;
                case "seo-services":
                    setServicesIndustries({
                        title: "SEO",
                        desc: "We provide complete SEO solutions, spanning from initial strategy development and keyword research to on-page optimization, content creation, and performance tracking. Our core SEO services include:",
                        partnerTitle: 'SEO',
                        partnerDesc: 'When selecting a partner for SEO services, experience, expertise, and a proven track record of success are paramount. We stand out as the premier choice for SEO solutions because:'
                    });
                    break;
                case "ui-ux-design-services":
                    setServicesIndustries({
                        title: "UI/UX Designing",
                        desc: "Ropstam offers cutting-edge UI/UX design services to create intuitive, engaging digital experiences. With an expert team of designers and researchers, we help companies craft user-focused products that delight customers.",
                        partnerTitle: 'UI/UX Designing',
                        partnerDesc: 'At Ropstam, we are more than just a UI/UX design company; we are your dedicated design allies, committed to elevating your brand in the digital landscape. Here’s why you should entrust your design needs to us:'
                    });
                    break;
                case "wordpress-development-services":
                    setServicesIndustries({
                        title: "WordPress",
                        desc: "From WordPress theme customization and plugin development to complex WordPress integrations, Ropstam provides end-to-end WordPress website design and development, speed optimization, content implementation, security and maintenance, allowing you to focus on your business.",
                        partnerTitle: 'WordPress',
                        partnerDesc: 'With over a decade of WordPress experience, Ropstam is your trusted partner for custom WordPress services. Here’s why you should choose us:'
                    });
                    break;
                case "social-media-marketing-services":
                    setServicesIndustries({
                        title: "Social Media Marketing",
                        desc: "Rely on SSTech for bespoke Social Media Marketing solutions aimed at creating high-engagement online presence. With extensive experience in crafting effective social media strategies, our team of experts specializes in the following services:",
                        partnerTitle: 'Social Media Marketing',
                        partnerDesc: 'SSTech emerges as the preferred option for customized social media marketing solutions, backed by a track record of successful campaigns. This establishes us as the ideal partner to transform your social media presence into a dynamic and impactful marketing tool.'
                    });
                    break;
                case "3d-animation-services":
                    setServicesIndustries({
                        title: "3D Animation",
                        desc: "At SSTech, we offer a comprehensive array of 3D animation services to bring vibrancy to your innovative concepts. Our team of adept animators specializes in 3D animation development, ensuring seamless execution and captivating visuals for your project.",
                        partnerTitle: '3D Animation',
                        partnerDesc: "As a leading 3D animation studio, we take pride in our track record of success. We're not just a provider of bespoke 3D animation services; we're your partner in innovation. Here's why you should choose us for 3D animation development:"
                    });
                    break;
                default:
                    setServicesIndustries({ title: "", desc: "", partnerTitle: '', partnerDesc: '' });
                    break;
            }
        } else {
            setServicesIndustries({ title: "", desc: "", partnerTitle: '', partnerDesc: '' });
        }
    };

    return (
        <div className={"spcontainer mt-4"}>
            <div className="spleft-side" style={{ backgroundColor: 'blue', padding: '11% 0%', flex: '1' }}>
                {/* Shapatar image*/}
            </div>
            <div className="spright-side" style={{ flex: '1', padding: '20px' }}>
                <div className="spcard-container">
                    <h2 className='partnerheading'><span className='changecolor'>{servicesIndustries.title}</span> Services for Industries</h2>
                    <p className='partnerpara'>{servicesIndustries.desc}</p>
                    <div className="tabsp">
                        <span onClick={() => handleTabClick(1)} className={activeTab === 1 ? 'active-tabsp' : 'tabsp'}>Tab 1</span>
                        <span onClick={() => handleTabClick(2)} className={activeTab === 2 ? 'active-tabsp' : 'tabsp'}>Tab 2</span>
                        <span onClick={() => handleTabClick(3)} className={activeTab === 3 ? 'active-tabsp' : 'tabsp'}>Tab 3</span>
                        <span onClick={() => handleTabClick(4)} className={activeTab === 4 ? 'active-tabsp' : 'tabsp'}>Tab 4</span>
                        <span onClick={() => handleTabClick(5)} className={activeTab === 5 ? 'active-tabsp' : 'tabsp'}>Tab 5</span>
                        <span onClick={() => handleTabClick(6)} className={activeTab === 6 ? 'active-tabsp' : 'tabsp'}>Tab 6</span>
                        <span onClick={() => handleTabClick(7)} className={activeTab === 7 ? 'active-tabsp' : 'tabsp'}>Tab 7</span>
                    </div>
                    <div className="tabsp-content">
                        {activeTab === 1 && <h3 className='togetherpara'>Let’s Start a New {servicesIndustries.title} Project Together for Tab 1</h3>}
                        {activeTab === 2 && <h3 className='togetherpara'>Let’s Start a New {servicesIndustries.title} Project Together for Tab 2</h3>}
                        {activeTab === 3 && <h3 className='togetherpara'>Let’s Start a New {servicesIndustries.title} Project Together for Tab 3</h3>}
                        {activeTab === 4 && <h3 className='togetherpara'>Let’s Start a New {servicesIndustries.title} Project Together for Tab 4</h3>}
                        {activeTab === 5 && <h3 className='togetherpara'>Let’s Start a New {servicesIndustries.title} Project Together for Tab 5</h3>}
                        {activeTab === 6 && <h3 className='togetherpara'>Let’s Start a New {servicesIndustries.title} Project Together for Tab 6</h3>}
                        {activeTab === 7 && <h3 className='togetherpara'>Let’s Start a New {servicesIndustries.title} Project Together for Tab 7</h3>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SolutionProvider;
