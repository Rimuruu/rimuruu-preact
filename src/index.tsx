import { render } from 'preact';
import {
	lazy,
	LocationProvider,
	ErrorBoundary,
	Router,
	Route
} from 'preact-iso';
import Navbar from './components/NavBar/Navbar';
import './style.css';
import Home from './pages/Home/Home';
import Gallery from './pages/Gallery/Gallery';

const HomePath: string = Navbar.Route.home.path;
const GalleryPath: string = Navbar.Route.gallery.path;

export function App() {
	return (
		<div id="body">
			<Navbar.Navbar></Navbar.Navbar>
			<div id="content">
			<LocationProvider>
				<ErrorBoundary>
					<Router>
						<Route path={HomePath} component={Home} />
						<Route path={GalleryPath} component={Gallery} />
					</Router></ErrorBoundary></LocationProvider>
</div>
		</div>
	);
}



render(<App />, document.getElementById('app'));
