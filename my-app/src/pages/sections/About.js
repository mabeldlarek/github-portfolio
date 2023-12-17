function About(){
    return (
        <section id="about" className="about-mf sect-pt4 route about-mf">
          <div className="container">
            <div className="row">
              <div className="col-md-6 about-me-col">
              <div className="row">
              <div className="col-sm-6 col-md-5">
                <div className="about-img">
                  <img src="caminho/para/sua/foto.jpg" className="img-fluid rounded b-shadow-a" alt="Sua Foto" />
                </div>
              </div>
              <div className="col-sm-6 col-md-7">
                <div className="about-info">
                  <p><span className="title-s">Nome:</span> <span></span></p>
                  <p><span className="title-s">Ocupação:</span> <span></span></p>
                  <p><span className="title-s">Email:</span> <span></span></p>
                  <p><span className="title-s">Telefone:</span> <span></span></p>
                </div>
              </div>
            </div>
            <div className="skill-mf">
              <p className="title-s">Habilidades</p>
              <span>Java</span> <span className="float-end"></span>
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{ width: '0%' }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <span>Spring Boot Framework</span> <span className="float-end"></span>
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{ width: '0%' }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
         
              </div>
              <div className="col-md-6 about-me-col">
                <div className="about-me pt-4 pt-md-0">
                  <div className="title-box-2">
                    <h5 className="title-center">Sobre mim</h5>
                  </div>
                  <p className="lead">
                    
                  </p>
                  <p className="lead">
               
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
}

export default About;