import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./pages/Home";

import "./assets/main.scss";
import "./index.css";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
