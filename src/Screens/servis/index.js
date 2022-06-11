import './style.css'
import { FaBuilding, FaServicestack } from "react-icons/fa";

export const Services = () => {
	return (
		<div className="service" id='services' >
			<h2>Offerings to my clients</h2>
			<p>If you are looking at blank cassettes on the web, you may be very confused at the difference in<br /> price. You may see some for as low as $.17 each.</p>
			<div className="serviceCont">
				<div className="serviceItem">
					<article className='round'></article>
					<h4><FaBuilding className='sIcon' /> Architecture</h4>
					<p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $.17 each.</p>
				</div>
				<div className="serviceItem">
					<article className='round'></article>
					<h4> <FaBuilding className='sIcon' /> Interior design</h4>
					<p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $.17 each.</p>
				</div>
				<div className="serviceItem">
					<article className='round'></article>
					<h4><FaServicestack className='sIcon' /> Concept design</h4>
					<p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $.17 each.</p>
				</div>
			</div>
		</div>
	);
}