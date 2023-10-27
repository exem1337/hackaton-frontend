import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";

const Header =()=>{
    return(
			<>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ПрофТестиум </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Возможности</Nav.Link>
            <Nav.Link href="#features">Тарифы</Nav.Link>
            <Nav.Link href="#pricing">Внедрение</Nav.Link>
						<Nav.Link href="#feedback">Отзывы</Nav.Link>
						
          </Nav>

					<Nav  className = "ms-auto">
						<Link to="/auth" className={"dropdown-item text-sm-center "}>Войти</Link>
					</Nav>
        </Container>
      </Navbar>
    </>
    )
}

export default Header