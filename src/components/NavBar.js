import { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const NavBar = () => {

	const [activeLink, setActiveLink] = useState('home')
	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		const onScroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		}

		window.addEventListener("scroll", onScroll);

		return () => window.removeEventListener("scroll", onScroll);
	}, [])

	const onUpdateActiveLink = (value) => {
		setActiveLink(value);
	}

	return (
		<Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
        	<img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
        	<span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#inicio" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Inicio</Nav.Link>
            <Nav.Link href="#habilidades" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Habilidades</Nav.Link>
            <Nav.Link href="#proyectos" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Proyectos</Nav.Link>
          </Nav>
          <span className="navbar-text">
          	<div className="social-icon">
          		<a href="https://www.linkedin.com/in/valentin-quijano-bb8893241/" target="_blank" rel="noreferrer noopener"><img src={navIcon1} alt="LinkedIn" /></a>
          		<a href="https://www.facebook.com/TilioBolso" target="_blank" rel="noreferrer noopener"><img src={navIcon2} alt="Facebook" /></a>
          		<a href="https://www.instagram.com/tilio_bolso/" target="_blank" rel="noreferrer noopener"><img src={navIcon3} alt="Instagram" /></a>
          	</div>
          	<button className="vvd" onClick={() => console.log("connect")}><span>Contactemos</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
	);
}