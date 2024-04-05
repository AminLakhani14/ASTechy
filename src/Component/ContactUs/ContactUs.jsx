import Heading from '../../Global/Heading';

export const ContactUs = () => {

    return (
        <div style={{ overflow: 'hidden' }}>
            <Heading workBtn={true} visible={false} startedbtn={false} text="Contact Us"
                paragraph={'At ASTECHY, we specialize in delivering exceptional digital experiences. From web development to design and maintenance, our experts are here to help. Contact us today to learn more about how we can achieve your software development goals.'}
                feedbackvisible={true} />
        </div>
    );
};

export default ContactUs;
