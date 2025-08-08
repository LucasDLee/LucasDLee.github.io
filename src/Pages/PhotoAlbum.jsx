import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import PhotoSection from "../components/PhotoSection"
import { countries } from "../constants"
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function PhotoAlbum() {
	const location = useLocation();

	useEffect(() => {
		if (location.hash) {
			const id = location.hash.substring(1);
			setTimeout(() => {
			const el = document.getElementById(id);
			if (el) {
				const yOffset = -100; // Adjust this to match your header height
				const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
				window.scrollTo({ top: y, behavior: 'smooth' });
			}
			}, 0);
		}
		}, [location]);

	return (
		<div>
			<NavBar />
			<main>
				<h1>Photo Album</h1>
				{
					Object.keys(countries).map((code, i) => (
						<PhotoSection key={i} code={code} />
					))
				}
			</main>
			<Footer />
		</div>
	)
}