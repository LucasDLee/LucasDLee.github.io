import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import PhotoSection from "../components/PhotoSection"

let test = [{
	src: "images/profile-pic.webp",
	width: 100,
	height: 100
}]

export default function PhotoAlbum() {
	return (
		<div>
			<NavBar />
			<main>
				<h1>Photo Album</h1>
				<PhotoSection photos={test} />
			</main>
			<Footer />
		</div>
	)
}