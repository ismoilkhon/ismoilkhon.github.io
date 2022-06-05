import './style.css'
import { FaBook, FaDatabase, FaUsers } from 'react-icons/fa'
export const About = () => {
    return (
        <div className="container" >
            <div className="aboutInfo">
                <h4>About myself</h4>
                <p>As a student, I have been studying at the Tashkent University of Information Technologies for over two years. While my university years, I have learned many skills that every front-end software engineer needs. These include HTML, CSS, Javascript, and React.</p>
                <div className="outerDiv">
                    <div className="innerDiv">
                        <FaDatabase className='icon' />
                        <h4>$2.5M</h4>
                        <p>Total Donation</p>
                    </div>
                    <div className="innerDiv">
                        <FaBook className='icon' />
                        <h4>1465</h4>
                        <p>Total Ptojects</p>
                    </div>
                    <div className="innerDiv">
                        <FaUsers className='icon' />
                        <h4>3965</h4>
                        <p>Total Volunteers</p>
                    </div>
                </div>
            </div>

            <div className="skills">
                <div className='skill'>
                    <h4>HTML 90%</h4>
                    <div className='progresBorder'>
                        <div className='progres'>
                            <div style={{width: '90%'}} className='progresBar'>

                            </div>
                        </div>
                    </div>
                </div>

                <div className='skill'>
                    <h4>CSS 90%</h4>
                    <div className='progresBorder'>
                        <div className='progres'>
                            <div style={{width: '90%'}} className='progresBar'>

                            </div>
                        </div>
                    </div>
                </div>

                <div className='skill'>
                    <h4>JAVASCRIPT 80%</h4>
                    <div className='progresBorder'>
                        <div className='progres'>
                            <div style={{width: '80%'}} className='progresBar'>

                            </div>
                        </div>
                    </div>
                </div>

                <div className='skill'>
                    <h4>REACT 80%</h4>
                    <div className='progresBorder'>
                        <div className='progres'>
                            <div style={{width: '80%'}} className='progresBar'>

                            </div>
                        </div>
                    </div>
                </div>

                <div className='skill'>
                    <h4>C 75%</h4>
                    <div className='progresBorder'>
                        <div className='progres'>
                            <div style={{width: '75%'}} className='progresBar'>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}