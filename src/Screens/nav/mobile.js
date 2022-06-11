import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import './style.css'
export const MobileBar = () => {

	const [open, setOpen] = useState('open')
	function openMenu(){
		open === 'open' ? setOpen('close') : setOpen('open')
	}

	return (
		<nav className='mobile'>
			<ul>
				<li><strong>Ismoil</strong></li>
			</ul>
			<ul>
				<li onClick={ openMenu }><FaBars /></li>
				<li>
					<ul className={open}>
						<li><a href="#home">Home</a></li>
						<li><a href="#about">About</a></li>
						<li><a href="#services">Services</a></li>
						<li><a href="#contact">Contact</a></li>
					</ul>
				</li>
			</ul>


		</nav>
	)
}

