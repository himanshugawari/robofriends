import React, { Component } from 'react';
import $ from 'jquery';
//import { findDOMNode } from 'react-dom';
//import { collapse, Button, CardBody, Card } from 'reactstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import { Bootstrap, Grid, Row, Col } from 'react-bootstrap';

class index extends Component {
  componentDidMount() {
    $('#year').text(new Date().getFullYear());

    $(document).on('click', '[data-toggle="lightbox"]', function(event) {
      event.preventDefault();
      $(this).ekkoLightbox();
    });

    $('.port-item').click(function() {
      $('.collapse').collapse('hide');
    });
  }
  render() {
    return (
      <div className="container">
        <header id="main-header">
          <div className="row no-gutters">
            <div className="col-lg-4 col-md-5">
              <img src="person.png" alt="" />
            </div>
            <div className="col-lg-8 col-md-7">
              <div className="d-flex flex-column">
                <div className="p-5 bg-dark text-white">
                  <div className="d-flex flex-row  align-items-center">
                    <h1 className="display-4">
                      <strong>Himanshu Gawari</strong>
                    </h1>
                    <div
                      id="social-media"
                      className="justify-content-between align-items-center ml-auto"
                    >
                      {/* <!--className="d-none d-md-block"--> */}

                      <div>
                        <a href="http://twitter.com" className="text-white">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </div>
                      <div>
                        <a href="http://facebook.com" className="text-white">
                          <i className="fab fa-facebook"></i>
                        </a>
                      </div>
                      <div>
                        <a
                          href="mailto:himanshu25031991@gmail.com?Subject=subject here&Body=bodytext"
                          className="text-white"
                        >
                          <i className="fas fa-envelope"></i>
                        </a>
                      </div>
                      <div>
                        <a
                          href="https://github.com/himanshugawari"
                          className="text-white"
                        >
                          <i className="fab fa-github"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-black">
                  Experienced Full Stack Web Developer
                </div>

                <div>
                  <div className="d-flex flex-row text-white align-items-strech text-center">
                    <div
                      className="port-item p-4 bg-primary"
                      data-toggle="collapse"
                      data-target="#home"
                    >
                      <i className="fas fa-home fa-2x d-block"></i>
                      <span className="d-none d-md-block">Home</span>
                    </div>
                    <div
                      className="port-item p-4 bg-success"
                      data-toggle="collapse"
                      data-target="#resume"
                    >
                      {/* <!--fa-graduation-cap--> */}
                      <i className="fas fa-university fa-2x d-block"></i>
                      <span className="d-none d-md-block">Resume</span>
                    </div>
                    <div
                      className="port-item p-4 bg-warning"
                      data-toggle="collapse"
                      data-target="#work"
                    >
                      <i className="fas fa-folder-open fa-2x d-block"></i>
                      <span className="d-none d-md-block">Work</span>
                    </div>
                    <div
                      className="port-item p-4 bg-danger"
                      data-toggle="collapse"
                      data-target="#contact"
                    >
                      <i className="fas fa-envelope-open fa-2x d-block"></i>
                      <span className="d-none d-md-block">Contact</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* <!--Home--> */}
        <div id="home" className="collapse show">
          <div className="card card-body bg-primary text-white py-5">
            <h2>Welcome To My Page</h2>
            <p className="lead">
              I am a IIT Post-Graduate with interest in Software Development and
              my focus is on customizing software for large scale web
              applications. I am experienced in developing software using Java,
              Spring, MySQL and web technologies such as HTML, CSS and
              Javascript.
            </p>
          </div>

          {/* <div className="card card-body py-5">
            <h3>My Skills</h3>
            <hr />

            <h4>Java</h4>
            <div className="progress mb-3">
              <div
                className="progress-bar bg-success"
                style="cd we width:70%"
              ></div>
            </div>
            <h4>J2EE</h4>
            <div className="progress mb-3">
              <div className="progress-bar bg-success" style="width:50%"></div>
            </div>
            <h4>Spring Framework</h4>
            <div className="progress mb-3">
              <div className="progress-bar bg-success" style="width:60%"></div>
            </div>
            <h4>Spring MVC</h4>
            <div className="progress mb-3">
              <div className="progress-bar bg-success" style="width:50%"></div>
            </div>
            <h4>Spring Boot</h4>
            <div className="progress mb-3">
              <div className="progress-bar bg-success" style="width:50%"></div>
            </div>
            <h4>Hibernate Framework</h4>
            <div className="progress mb-3">
              <div className="progress-bar bg-success" style="width:60%"></div>
            </div>
            <h4>SQL</h4>
            <div className="progress mb-3">
              <div className="progress-bar bg-success" style="width:65%"></div>
            </div>
            <h4>Github</h4>
            <div className="progress mb-3">
              <div className="progress-bar bg-success" style="width:80%"></div>
            </div>
            <h4>HTML 5</h4>
            <div className="progress mb-3">
              <div className="progress-bar bg-success" style="width:90%"></div>
            </div>
            <h4>CSS</h4>
            <div className="progress mb-3">
              <div className="progress-bar bg-success" style="width:85%"></div>
            </div>
            <h4>Javascript</h4>
            <div className="progress mb-3">
              <div className="progress-bar bg-success" style="width:40%"></div>
            </div>
            <h4>Bootstrap 4</h4>
            <div className="progress mb-3">
              <div className="progress-bar bg-success" style="width:80%"></div>
            </div>
          </div> */}
        </div>

        {/* <!--Resume--> */}
        <div id="resume" className="collapse">
          <div className="card card-body bg-success text-white py-5">
            <h2>My Resume</h2>
            <p className="lead ">
              Below contains my work experience and my education details.
            </p>
          </div>

          <div className="card card-body py-5">
            <h3>Where Have I Worked?</h3>
            <div className="card-deck mb-5">
              <div className="card card-body">
                <div className="card-title">
                  <strong>Brillio Techologies Pvt. Ltd.</strong> Bangalore{' '}
                  <a href="https://www.brillio.com/">Link</a>
                  <hr />
                </div>
                <div className="card-text">
                  <p className="p-2 mb-3 bg-dark text-white mr-auto">
                    Position: Full Stack Developer
                    <div className="ml-auto text-muted">
                      {' '}
                      Dates: 2014 - 2015
                    </div>
                  </p>
                  <p className="lead">
                    Developed modules to smart crawler, image screenshot, image
                    comparison and batch implementation for analytical reporting
                    tool
                  </p>
                  <p className="lead">
                    Reduced more than 90% manual effort of going through content
                    intensive websites
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card card-body py-5">
            <h3>Where Have I Studied?</h3>
            <div className="card-deck mb-5">
              <div className="card card-body">
                <div className="card-title">
                  <strong>
                    Indian Institute of Technology (Indian School of Mines),
                    Dhanbad
                  </strong>{' '}
                  <a href="https://www.iitism.ac.in/index.php/">Link</a>
                  <hr />
                </div>
                <div className="card-text">
                  <p className="p-2 mb-3 bg-dark text-white mr-auto">
                    M.Tech - Computer Science and Engineering{' '}
                    <strong>7.23 CGPA</strong>
                    <div className="ml-auto text-muted">
                      {' '}
                      Dates: 2017 - 2019
                    </div>
                  </p>
                  <h2 className="display-5">Projects</h2>
                  <p className="lead">
                    Infrared and visible image fusion using guided filters and
                    focus region detection
                  </p>
                  <p className="lead">
                    Multi-Focus image fusion using deep learning convolution
                    neural networks
                  </p>
                </div>
              </div>
            </div>

            <div className="card-deck mb-5">
              <div className="card card-body">
                <div className="card-title">
                  <strong>
                    Centre for Development of Advance Computing CDAC – ACTS
                  </strong>{' '}
                  <a href="https://www.cdac.in/">Link</a>
                  <hr />
                </div>
                <div className="card-text">
                  <p className="p-2 mb-3 bg-dark text-white mr-auto">
                    PG Diploma - Advance Computing
                    <div className="ml-auto text-muted"> Dates: 2014</div>
                  </p>
                  <h2 className="display-5">Projects</h2>
                  <p className="lead">
                    Developed a institute management system a web application
                    using Spring MVC, Maven, Hibernate, MySql and web
                    technologies HTML/JSP , CSS, Bootstrap and JavaScript
                  </p>
                  <p className="lead">
                    Developed a Online Ticket management system using Spring,
                    Hibernate, maven, MySQL, HTML, CSS, Bootstrap, Javascript.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-deck mb-5">
              <div className="card card-body">
                <div className="card-title">
                  <strong>RGIT Andheri, Mumbai University</strong>{' '}
                  <a href="http://mctrgit.ac.in/">Link</a>
                  <hr />
                </div>
                <div className="card-text">
                  <p className="p-2 mb-3 bg-dark text-white mr-auto">
                    B.E - Computer Science and Engineering
                    <div className="ml-auto text-muted">
                      {' '}
                      Dates: 2008 - 2013
                    </div>
                  </p>
                  <h2 className="display-5">Projects</h2>
                  <p className="lead">
                    DTMF Controlled Robot (Vehicle) with and without
                    Microcontroller
                  </p>
                  <p className="lead">
                    Personalized Task Manager using Java and MySQL
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- WORK --> */}
        <div id="work" className="collapse">
          <div className="card card-body bg-warning text-white py-5">
            <h2>My Work</h2>
            <p className="lead">Some of my works</p>
          </div>

          <div className="card card-body py-5">
            <h3>What Have I Built?</h3>
            <p>Click Below</p>
            <div className="row no-gutters">
              <div className="col-md-3">
                <a href="LoopLab/index.html">
                  <img
                    src="Portfoliogrid/img/looplab.png"
                    alt=""
                    className="img-fluid"
                  ></img>
                </a>
              </div>
              <div className="col-md-3">
                <a href="Mizuxe/index.html">
                  <img
                    src="Portfoliogrid/img/mizuxe.png"
                    alt=""
                    className="img-fluid"
                  ></img>
                </a>
              </div>
              <div className="col-md-3">
                <a href="Glozzom/index.html">
                  <img
                    src="Portfoliogrid/img/glozzom.png"
                    alt=""
                    className="img-fluid"
                  ></img>
                </a>
              </div>
              <div className="col-md-3">
                <a href="Blogen/index.html">
                  <img
                    src="Portfoliogrid/img/blogen.png"
                    alt=""
                    className="img-fluid"
                  ></img>
                </a>
              </div>
            </div>

            <div className="row no-gutters">
              <div className="col-md-3">
                <a href="Portfoliogrid/index.html">
                  <img
                    src="Portfoliogrid/img/porfolio.png"
                    alt=""
                    className="img-fluid"
                  ></img>
                </a>
              </div>
              <div className="col-md-3">
                <a
                  href="https://unsplash.it/1200/768.jpg?image=257"
                  data-toggle="lightbox"
                >
                  <img
                    src="https://unsplash.it/600.jpg?image=257"
                    alt=""
                    className="img-fluid"
                  ></img>
                </a>
              </div>
              <div className="col-md-3">
                <a
                  href="https://unsplash.it/1200/768.jpg?image=258"
                  data-toggle="lightbox"
                >
                  <img
                    src="https://unsplash.it/600.jpg?image=258"
                    alt=""
                    className="img-fluid"
                  ></img>
                </a>
              </div>
              <div className="col-md-3">
                <a
                  href="https://unsplash.it/1200/768.jpg?image=259"
                  data-toggle="lightbox"
                >
                  <img
                    src="https://unsplash.it/600.jpg?image=259"
                    alt=""
                    className="img-fluid"
                  ></img>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- CONTACT --> */}
        <div id="contact" className="collapse">
          <div className="card card-body bg-danger text-white py-5">
            <h2>Contact</h2>
            <p className="lead"></p>
          </div>

          <div className="card card-body py-5">
            <h3>Get In Touch</h3>
            <p>Please Fill In Details </p>
            <form action="mailto:himanshu25031991@gmail.com?Subject=subject here&Body=bodytext">
              <div className="form-group">
                <div className="input-group input-group-lg">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-danger text-white">
                      <i className="fas fa-user"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control bg-dark text-white"
                    placeholder="Name"
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="input-group input-group-lg">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-danger text-white">
                      <i className="fas fa-envelope"></i>
                    </span>
                  </div>
                  <input
                    type="email"
                    className="form-control bg-dark text-white"
                    placeholder="Email"
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="input-group input-group-lg">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-danger text-white">
                      <i className="fas fa-pencil-alt"></i>
                    </span>
                  </div>
                  <textarea
                    className="form-control bg-dark text-white"
                    placeholder="Name"
                  ></textarea>
                </div>
              </div>

              <input
                type="submit"
                value="Submit"
                className="btn btn-danger btn-block btn-lg"
              />
            </form>
          </div>
        </div>

        {/* <!--Footer--> */}
        <footer id="main-footer" className="p-5 bg-dark text-white">
          <div className="row">
            <div className="col-md-6 text-center py-5">
              <a
                href="../resources/Resume.pdf"
                className="btn btn-outline-light"
              >
                <i className="fas fa-cloud "></i>Download Resume
              </a>
            </div>

            <div className="col-md-6 text-center py-4">
              <h4>Himanshu Gawari</h4>
              <p>
                Copyright &copy; <span id="year"></span>
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default index;
