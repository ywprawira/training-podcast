import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { MyProvider } from './Data';
import Content from './components/Content';
import Header from './components/Header';
import{ BrowserRouter as Router } from 'react-router-dom';

class App extends React.Component {
  	render() {
	    return (
	      <>
	        <MyProvider>
	        	<Router>
		         	<Content />
		        </Router>
	        </MyProvider>
	      </>
	    )
  	}
}

export default App;