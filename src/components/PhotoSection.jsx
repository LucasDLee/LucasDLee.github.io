import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";
import "./scss/photoSection.scss"

const PhotoSection = ({ country, photos }) => {
	return (
		<section className="photos">
			<h2>{ country }</h2>
			<MasonryPhotoAlbum photos={photos} columns={5} />
		</section>
	)
}

export default PhotoSection