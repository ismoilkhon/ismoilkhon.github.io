import './style.css'
import { Image } from '@chakra-ui/react'
import avtar1 from '../../images/avatar1.jpg'
import { FaFacebook, FaLinkedinIn, FaGithub, FaTelegram } from 'react-icons/fa'
import { PhoneIcon, CalendarIcon, EmailIcon, InfoIcon } from '@chakra-ui/icons';


export const Home = () => {

	return (
			<main className='cont' id='home'>
				<article className='img-cont'>
					<Image className='img' src={avtar1} />
				</article>

				<main className='second'>
					<h5>Hello everybody! <br/> I am</h5>
					<h3>Ismoil Baxromov</h3>
					<h5>Frontend Web Developer</h5>
					<p>Student of Tashkent University of Information Technologies with the ability to acquire new skills and expertise in given areas extremely fast. With excellent communication and problem-solving skills, energetic, self-motivated, and hard- working, would like to obtain a position as an important member of the company</p>
					<ul className='info' >
						<li><CalendarIcon /> <a>  28th December, 1998</a></li>
						<li><PhoneIcon /> <a> (+998) 99 977 79 28</a></li>
						<li><EmailIcon /> <a> ismoilkhon.bakhromov@mail.ru</a></li>
						<li><InfoIcon />  <a>Namangan, Uzbekistan</a></li>
					</ul>

					<ul className='links'>
						<li> <a href='https://www.facebook.com/12ghost28bi'><FaFacebook /></a> </li>
						<li> <a href='https://github.com/ismoilkhon'><FaGithub /></a> </li>
						<li> <a href='https://www.linkedin.com/in/ismoilkhon-bakhromov-b5b248224'><FaLinkedinIn /></a> </li>
						<li> <a href='https://t.me/Ghostman_12_28'><FaTelegram /></a> </li>
					</ul>

				</main>
			</main>
	);
}
