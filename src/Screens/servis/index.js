import './style.css'
import { FaBuilding, FaServicestack } from "react-icons/fa";

export const Services = () => {
    return ( 
        <div className="service" >
            <h2>offerings to my clients</h2>
            <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in<br/> price. You may see some for as low as $.17 each.</p>
            <div className="serviceCont">
                <div className="serviceItem">
                    <FaBuilding  className='sIcon'/>
                    <h4>Architecture</h4>
                    <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $.17 each.</p>
                </div>
                <div className="serviceItem">
                    <FaBuilding className='sIcon'/>
                    <h4>Interior design</h4>
                    <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $.17 each.</p>
                </div>
                <div className="serviceItem">
                    <FaServicestack className='sIcon'/>
                    <h4>Concept design</h4>
                    <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $.17 each.</p>
                </div>
            </div>
        </div>
     );
}