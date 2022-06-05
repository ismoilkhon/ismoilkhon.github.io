import './App.css';
import { About } from './Screens/about';
import { Home } from './Screens/home';
import { NavBar } from './Screens/nav';
import { Services } from './Screens/servis';
import { Contact } from './Screens/contact';

function App() {

	return (
		<div className="App">
			<NavBar />
			<Home />
			<About />
			<Services />
			<Contact />
		</div>
	);
}

export default App;
