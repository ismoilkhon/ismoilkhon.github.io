import './style.css'
import { Divider } from '@chakra-ui/react';
export const Education = () => {
    return (
        <div className="edu">
            <h4>My education</h4>
            <h4>My experience</h4>

            <div className='innerEdu'>
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
            </div>
        </div>
    );
}