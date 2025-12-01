import { render } from 'preact';
import Router from 'preact-router' 
import Navbar  from './components/NavBar/Navbar';
import './style.css';
import Home from './pages/Home/Home';
import Gallery from './pages/Gallery/Gallery';
export function App() {
	return (
		<div>
			<Navbar.Navbar></Navbar.Navbar>
		<Router>
		<Home path={Navbar.Route.home}/>
		<Gallery path={Navbar.Route.gallery}/>
		</Router>
</div>
	);
}



render(<App />, document.getElementById('app'));
