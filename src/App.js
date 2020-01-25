import React from 'react';
import './App.css';

import api from './services/api';
import './styles.css';
import Header from './components/Header';
import Main from './pages/main';
import Routes from './routes';

const App = () => (

	<div className="App">
		<Header />
		<Routes />
	</div>

);

export default App;
