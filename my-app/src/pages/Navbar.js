import Logo from '../images/logo.png';

function Navbar () {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark menu shadow fixed-top">
    <div className="container">
      <a className="navbar-brand" href="">
        <img src='' alt=""/>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item"><a className="nav-link active" aria-current="page" href="index.html">Home</a></li>
          <li className="nav-item"><a className="nav-link" href="#services">Início</a></li>
          <li className="nav-item"><a className="nav-link" href="#testimonials">Sobre</a></li>
          <li className="nav-item"><a className="nav-link" href="#portfolio">Portfólio</a></li>
          <li className="nav-item"><a className="nav-link" href="#contact">Artigos</a></li>
          <li className="nav-item"><a className="nav-link" href="#contact">Contato</a></li>
        </ul>
      </div>
    </div>
  </nav>
  );
}

export default Navbar;