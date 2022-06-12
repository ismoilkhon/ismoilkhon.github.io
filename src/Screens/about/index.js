import './style.css'
import { FaBook, FaDatabase, FaUsers } from 'react-icons/fa'
export const About = () => {
	return (
		<div className="aboutCont">
			<div className="container" id='about'>
				<div className="aboutInfo">
					<h4>About myself</h4>
					<p>As a student, I have been studying at the Tashkent University of Information Technologies for over two years. While my university years, I have learned many skills that every front-end software engineer needs. These include HTML, CSS, Javascript, and React.</p>
					<div className="grid">
						<article className="innerDiv">
							<article className="round1" />
							<article className="round2" />
							<article className="round3" />
							<h1>$2.5M</h1>
							<h5><FaDatabase className='icon' /> Total Donation</h5>
						</article>
						<article className="innerDiv">
							<article className="round1" />
							<article className="round2" />
							<article className="round3" />
							<h1>1465</h1>
							<h5><FaBook className='icon' /> Total Ptojects</h5>
						</article>
						<article className="innerDiv">
							<article className="round1" />
							<article className="round2" />
							<article className="round3" />
							<h1>3965</h1>
							<h5><FaUsers className='icon' /> Total Volunteers</h5>
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