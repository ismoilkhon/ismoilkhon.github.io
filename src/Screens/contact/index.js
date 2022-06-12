import './style.css'
import { FaChevronRight, FaFacebook, FaGithub, FaLinkedinIn, FaTelegram } from 'react-icons/fa'

export const Contact = () => {
	return (
		<div className="contact" id='contact' >
			<div className='contactItems' >
				<div className="contactItem">
					<h3>About Me</h3>
					<p>Do you want to be even more successful? Learn to love learning and <br /> growth. The more effort you put into improving your skills</p>
				</div>
				<div className="contactItem">
					<h3>Newsletter</h3>
					<p>Stay updated with our latest trends</p>
					<div className='input'>
						<input placeholder="Enter email address" required="" type="email" />
						<button><FaChevronRight /></button>
					</div>

				</div>
				<div className="contactItem">
					<h3>Follow Me</h3>
					<p>Let us be sicial</p>
					<div className='iconGroup'>
						<a href='https://www.facebook.com/12ghost28bi'><FaFacebook /></a>
						<a href='https://github.com/ismoilkhon'><FaGithub /></a>
						<a href='https://www.linkedin.com/in/ismoilkhon-bakhromov-b5b248224'><FaLinkedinIn /></a>
						<a href='https://t.me/Ghostman_12_28'><FaTelegram /></a>
					</div>
				</div>
			</div>
			<span>Copyright ©<script>document.write(new Date().getFullYear());</script>2022 All rights reserved | This template is made  by <a href="/" target="_blank">Ismoil</a></span>
		</div>
	);
}