import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import { ProjectCard } from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.png';

export const Projects = () => {

	const projects = [
    {
      title: "Inicio de Negocio",
      description: "Diseño y Desarrollo",
      imgUrl: projImg1,
    },
    {
      title: "Inicio de Negocio",
      description: "Diseño y Desarrollo",
      imgUrl: projImg2,
    },
    {
      title: "Inicio de Negocio",
      description: "Diseño y Desarrollo",
      imgUrl: projImg3,
    },
    {
      title: "Inicio de Negocio",
      description: "Diseño y Desarrollo",
      imgUrl: projImg1,
    },
    {
      title: "Inicio de Negocio",
      description: "Diseño y Desarrollo",
      imgUrl: projImg2,
    },
    {
      title: "Inicio de Negocio",
      description: "Diseño y Desarrollo",
      imgUrl: projImg3,
    },
  ];

	return (
		<section className="project" id="proyectos">
			<Container>
				<Row>
					<Col>
						<h2>Proyectos</h2>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
						<Tab.Container id="projects-tabs" defaultActiveKey="first">
							<Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
					      <Nav.Item>
					        <Nav.Link eventKey="first">Tab Uno</Nav.Link>
					      </Nav.Item>
					      <Nav.Item>
					        <Nav.Link eventKey="second">Tab Dos</Nav.Link>
					      </Nav.Item>
					      <Nav.Item>
					        <Nav.Link eventKey="third">Tab Tres</Nav.Link>
					      </Nav.Item>
					    </Nav>
					  <Tab.Content>
					  	<Tab.Pane eventKey="first">
					  		<Row>
					  			{
					  				projects.map((project, index) => {
					  					return (
					  						<ProjectCard 
					  							key={index}
					  							{...project}
					  						/>
					  					);
					  				})
					  			}
					  		</Row>
					  	</Tab.Pane>
					  	<Tab.Pane eventKey="second">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</Tab.Pane>
					  	<Tab.Pane eventKey="third">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</Tab.Pane>
					  </Tab.Content> 
				    </Tab.Container>	
					</Col>
				</Row>
			</Container>
			<img className="background-image-right" src={colorSharp2} />
		</section>
	);
}