import './style.css'
import { useState } from 'react';


export const NavBar = () => {
    const [appBar, setAppBar] = useState('main')

    window.addEventListener('scroll', e => {
        window.scrollY > 130 ? setAppBar('appBar') : setAppBar('main')
    })
    
    return ( 
        <nav className={appBar}>
			<ul><strong>ISMOIL</strong></ul>
			<ul>
				<li><a href="#home">HOME</a></li>
				<li><a href="#about">ABOUT</a></li>
				<li><a href="#services">SERVICES</a></li>
				<li><a href="#contact">CONTACT</a></li>
			</ul>
		</nav>
     );
}
 


