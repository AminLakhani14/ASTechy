import React from 'react'
import './Footer.css';
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
const Footer = (props) => {
    return (
        <div className="app__newsletter">
            <div style={{ width: '100%', display: 'flex' }}>
                <div className='' style={{ width: '20%' }}>
                    <p style={{ color: '#fff' }}>Have a query?</p>
                    <p style={{ color: '#fff' }}>+1 (866) 631-8767</p>
                </div>
                <div className=' text-center' style={{ width: '60%' }}>
                    {/* <h1 className="" >Subscribe To our NewsLetter</h1> */}
                    <FaInstagram style={{ width: '20px', height: '20px', color: '#fff' }} />
                    <FaLinkedinIn style={{ width: '20px', height: '20px', margin: '0px 4px', color: '#fff' }} />
                    <FaFacebookF style={{ width: '16px', height: '16px', color: '#fff' }} />
                    <RiTwitterXFill style={{ width: '20px', height: '20px', margin: '0px 4px', color: '#fff' }} />
                    <p className="" style={{ color: '#fff' }}>Terms of Use – Privacy Policy.</p>
                </div>
                <div className='' style={{ width: '20%' }}>
                    <p style={{ color: '#fff' }}>Email us at</p>
                    <p style={{ color: '#fff' }}>info@ropstam.com</p>
                </div>
            </div>

            <div className="text-center">
                <p className="" style={{ color: '#fff' }}>© 2024 Ropstam Solutions Inc. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer
