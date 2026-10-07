import "./scss/header.scss";

function Header() {
  return (
    <header id="home-header">
      <h1>
        Hello, I'm Lucas, <br></br>a software developer.
      </h1>
      <p>
        Here you'll find information about myself, the places I have visited, the projects I have worked on,
        and the organizations I have worked at.
      </p>
      <div className="arrow down-arrow down-animation"></div>
    </header>
  );
}

export default Header;
