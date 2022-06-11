import './style.css'

export const Education = () => {
    return (
        <article className="edu">
				<div className='grid'>
					<button role='button' >My education</button >
					<button role='button' >My experience</button >
				</div>
            <article className='innerEdu'>
                <ul>
                    <li>September 2004 to June 2013</li>
                    <li>September 2013 to June 2016</li>
                    <li>September 2019 to Present</li>
                </ul>
                <div className='divider'>
                    <div className='circl'/>
                    <div className='circl'/>
                    <div className='circl'/>
                </div>
                <ul >
                    <li>School <br/> Namangan, Uzbekistan</li>
                    <li>College <br/> Namangan, Uzbekistan</li>
                    <li>University <br/> Tashkent, Uzbekistan</li>
                </ul>
            </article>
        </article>
    );
}