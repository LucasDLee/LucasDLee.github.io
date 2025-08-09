import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import PhotoSection from "../components/PhotoSection"
import { countries } from "../constants"
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./scss/photo-album.scss"

export default function PhotoAlbum() {
	const location = useLocation();

	const [chosenCountry, setCountry] = useState("at");

	useEffect(() => {
		let id;

		// Decide which country to set
		if (location.state?.chosenCountry) {
			id = location.state.chosenCountry;
		} else if (location.hash) {
			id = location.hash.substring(1);
		}

		// Ensure country tag exists
		if (id && id in countries) {
			setCountry(id);

			// Smooth scroll to the element if it exists
			setTimeout(() => {
				const el = document.getElementById(id);
				if (el) {
					const yOffset = -100; // Adjust to match header height
					const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
					window.scrollTo({ top: y, behavior: 'smooth' });
				}
			}, 0);
		}
	}, [location]);

	const namesArray = Object.entries(countries)
		.filter(([_, country]) => country.pictures)
		.map(([code, country], i, arr) => (
			<span key={code} id={code}>
				<Link
					to={`/photoalbum#${code}`}
					className="countryLink emulateH2"
					onClick={() => setCountry(code)}
				>
					{country.name}
				</Link>
			<span className="emulateH2">
			{i < arr.length - 1 && <span> · </span>}</span>
			</span>
		)
	);

	return (
		<div>
			<NavBar />
			<main>
				<h1>Photo Album</h1>
				<section className="photos-separator">
					<div className="photos">
						<p>{namesArray}</p>
					</div>
				</section>
				<PhotoSection code={chosenCountry} />
			</main>
			<Footer />
		</div>
	)
}