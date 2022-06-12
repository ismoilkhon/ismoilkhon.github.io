import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import './style.css'
export const MobileBar = () => {

	const [open, setOpen] = useState('open')
	function openMenu() {
		open === 'open' ? setOpen('close') : setOpen('open')
	}

	return (
		<nav className='mobile'>
			<ul>
				<li><strong>Ismoil</strong></li>
			</ul>
			<ul>
				<li onClick={openMenu}><FaBars /></li>
				<li>
					<ul className={open}>
						<li onClick={openMenu}><h1><FaTimes /></h1></li>
						<li>
						<h2 onClick={openMenu}><a href="#home">Home</a></h2>
						<h2 onClick={openMenu}><a href="#about">About</a></h2>
						<h2 onClick={openMenu}><a href="#services">Services</a></h2>
						<h2 onClick={openMenu}><a href="#contact">Contact</a></h2>
						</li>
					</ul>
				</li>
			</ul>


		</nav>
	)
}

