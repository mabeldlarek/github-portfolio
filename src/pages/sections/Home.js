
function Home() {
    return (
        <section id="home" className="intro-section">
            <div className="container">
                <div className="row text-white d-flex align-items-center justify-content-center">
                    <div className="col-md-8 intros text-center">
                        <h1 className="display-2">
                            <span className="display-2--intro">Olá! Sou a Maria</span>
                            <span className="display-2--description lh-base">
                                Esta página é destinada a apresentação do meu perfil profissional, apresentando trabalhos desenvolvidos por mim.
                            </span>
                        </h1>
                        <button type="button" className="rounded-pill btn-rounded mx-auto">
                            Download CV
                            <span><i className="fas fa-arrow-right"></i></span>
                        </button>
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,160L48,176C96,192,192,224,288,208C384,192,480,128,576,133.3C672,139,768,213,864,202.7C960,192,1056,96,1152,74.7C1248,53,1344,107,1392,133.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </section>
    );
}

export default Home;