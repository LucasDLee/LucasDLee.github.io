import { useState, useEffect } from "react";
import { MasonryPhotoAlbum } from "react-photo-album";
import { countries } from "../constants"
import "react-photo-album/masonry.css";
import "./scss/photoSection.scss"

const PhotoSection = ({ code }) => {

	// Change number of columns based on window width
	const [size, setSize] = useState({
		width: window.innerWidth,
		height: window.innerHeight
	});

	useEffect(() => {
		const handleResize = () => {
			setSize({
				width: window.innerWidth,
				height: window.innerHeight
			});
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	let columnCount = 3
	
	if (size.width < 400)
		columnCount = 1
	else if (size.width < 650)
		columnCount = 2
	else
		columnCount = 3
	
	// Generate images
	const country = countries[code];
	let album = country.pictures;

	if (!album) {
		// console.warn(`Country code '${code}' not found.`);
		return null; // or return some fallback UI
	}

	if (Array.isArray(album)) {
		album = album.map((img) => {
			let imgName = String(img.fileName).charAt(0).toUpperCase() + String(img.fileName).slice(1)

			return {
				alt: img.description || imgName,
				src: `images/countries/${code}/${img.fileName}.webp`,
				title: img.description || imgName,
				height: img.height,
				width: img.width
			}
		});
	} else {
		album = [];
	}
	
	return (
		<section className="photos-separator" id={code}>
			<div className="photos">
				<h2>{ country.name }</h2>
				<h3>{country.cities.join(" · ")}</h3>
				<MasonryPhotoAlbum
					photos={album}
					columns={columnCount}
					spacing={2.5}
					padding={0} />
			</div>
		</section>
	)
}

export default PhotoSection