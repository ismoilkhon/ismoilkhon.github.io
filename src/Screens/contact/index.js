import './style.css'
import { FaChevronRight, FaFacebook, FaInstagram, FaLinkedin, FaTelegramPlane } from 'react-icons/fa'

export const Contact = () => {
    return (
        <div className="contact" >
            <div className='contactItems' >
                <div className="contactItem">
                    <h3>About Me</h3>
                    <p>Do you want to be even more successful? Learn to love learning and <br /> growth. The more effort you put into improving your skills</p>
                    <p>Copyright ©<script>document.write(new Date().getFullYear());</script>2022 All rights reserved | This template is made  by <a href="/" target="_blank">Ismoil</a></p>
                </div>
                <div className="contactItem">
                    <h3>Newsletter</h3>
                    <p>Stay updated with our latest trends</p>
                    <div className='input'>
                        <input placeholder="Enter email address" required="" type="email" />
                        <button><FaChevronRight/></button>
                    </div>

                </div>
                <div className="contactItem">
                    <h3>Follow Me</h3>
                    <p>Let us be sicial</p>
                    <div className='iconGroup'>
                        <FaFacebook/>
                        <FaInstagram/>
                        <FaTelegramPlane/>
                        <FaLinkedin/>
                    </div>

                </div>
            </div>
        </div>
    );
}