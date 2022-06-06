import './App.css';
import { Home } from './Screens/home';
import { About } from './Screens/about';
import { Services } from './Screens/servis';
import { Contact } from './Screens/contact';
import { NavBar } from './Screens/nav';
import { MobileBar } from './Screens/nav/mobile';

function App() {

	return (
		<div className="App">
			{ window.innerWidth > 500 ? <NavBar /> : <MobileBar /> }
			<Home />
			<About />
			<Services />
			<Contact />
		</div>
	);
}

export default App;
