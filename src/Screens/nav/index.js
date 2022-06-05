import { useState } from 'react';
import './style.css'


export const NavBar = () => {
    const [appBar, setAppBar] = useState('main')

    window.addEventListener('scroll', e => {
        window.scrollY > 130 ? setAppBar('appBar') : setAppBar('main')
    })
    
    return ( 
        <div className={appBar}>
            <h1>ISMOILKHON</h1>
            <ul>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>SERVICES</li>
                <li>CONTACT</li>
            </ul>

        </div>
     );
}
 
