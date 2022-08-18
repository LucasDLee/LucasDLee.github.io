import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './Body/Header.js'
import Footer from './Body/Footer.js'
import Nav from './Body/Nav.js'
import About_Me from './Sections/About_Me'
import Projects from './Sections/Projects'
import Work_Experience from './Sections/Work_Experience'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Nav />
		<Header />
		<main>
			<About_Me />
			<Projects />
			<Work_Experience />  
		</main>
		<Footer />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
