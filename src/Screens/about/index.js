import './style.css'
import { FaBook, FaDatabase, FaUsers } from 'react-icons/fa'
export const About = () => {
	return (
		<div className="aboutCont">
			<div className="container" id='about'>
				<div className="aboutInfo">
					<h6>About myself</h6>
					<p>As a student, I have been studying at the Tashkent University of Information Technologies for over two years. While my university years, I have learned many skills that every front-end software engineer needs. These include HTML, CSS, Javascript, and React.</p>
					<div className="grid">
						<article className="innerDiv">
							<FaDatabase className='icon' />
							<h6>$2.5M</h6>
							<p>Total Donation</p>
						</article>
						<article className="innerDiv">
							<FaBook className='icon' />
							<h6>1465</h6>
							<p>Total Ptojects</p>
						</article>
						<article className="innerDiv">
							<FaUsers className='icon' />
							<h6>3965</h6>
							<p>Total Volunteers</p>
						</article>
					</div>
				</div>

				<div className="skills">
					<div className='skill'>
						<h6>HTML 90%</h6>
						<div className='progresBorder'>
							<div className='progres'>
								<div style={{ width: '90%' }} className='progresBar'>

								</div>
							</div>
						</div>
					</div>

					<div className='skill'>
						<h6>CSS 90%</h6>
						<div className='progresBorder'>
							<div className='progres'>
								<div style={{ width: '90%' }} className='progresBar'>

								</div>
							</div>
						</div>
					</div>

					<div className='skill'>
						<h6>JAVASCRIPT 80%</h6>
						<div className='progresBorder'>
							<div className='progres'>
								<div style={{ width: '80%' }} className='progresBar'>

								</div>
							</div>
						</div>
					</div>

					<div className='skill'>
						<h6>REACT 80%</h6>
						<div className='progresBorder'>
							<div className='progres'>
								<div style={{ width: '80%' }} className='progresBar'>

								</div>
							</div>
						</div>
					</div>

					<div className='skill'>
						<h6>C 75%</h6>
						<div className='progresBorder'>
							<div className='progres'>
								<div style={{ width: '75%' }} className='progresBar'>

								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
	);
}