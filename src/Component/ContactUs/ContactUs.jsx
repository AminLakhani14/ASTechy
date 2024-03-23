import Heading from '../../Global/Heading';
import SimpleSlider from '../../Global/DCSlider';

export const ContactUs = () => {

    return (
        <>
                <Heading workBtn={true} visible={false} startedbtn={false} text="Contact Us" paragraph={'At Ropstam, we specialize in delivering exceptional digital experiences. From web development to design and maintenance, our experts are here to help. Contact us today to learn more about how we can achieve your software development goals.'} feedbackvisible={true} />

                <SimpleSlider />

        </>
    );
};

export default ContactUs;