import { MasonryPhotoAlbum } from "react-photo-album";
import { countries } from "../constants"
import "react-photo-album/masonry.css";
import "./scss/photoSection.scss"

const PhotoSection = ({ code }) => {
	const country = countries[code];

	if (!country) {
		console.warn(`Country code '${code}' not found.`);
		return null; // or return some fallback UI
	}

	let album = country.pictures;

	if (Array.isArray(album)) {
		album = album.map((img) => {
			let imgName = String(img.name).charAt(0).toUpperCase() + String(img.name).slice(1)

			return {
				alt: imgName,
				src: `images/countries/${code}/${img.name}.JPEG`,
				title: imgName,
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
					columns={3}
					spacing={10}
					padding={0} />
			</div>
		</section>
	)
}

export default PhotoSection