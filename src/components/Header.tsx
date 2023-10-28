import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link, useNavigate} from "react-router-dom";
import userStore from '../store/User';
import { Button } from 'react-bootstrap';
import AuthService from '../service/AuthService';
import { observer } from 'mobx-react-lite';

const Header = observer(() => {
  const navigate = useNavigate();
  
  const onLogout = () => {
    AuthService.logout();
    navigate('/');
  }

  return(
		<>
      <Navbar data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ПрофТестиум</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#opportunity">Возможности</Nav.Link>
            <Nav.Link href="#features">Тарифы</Nav.Link>
            <Nav.Link href="#pricing">Внедрение</Nav.Link>
						<Nav.Link href="#feedback">Отзывы</Nav.Link>
          </Nav>

					<Nav className = "ms-auto">
            {
              userStore.isLogin 
                ? <div className="auth-info">
                  <span>{ userStore.user?.last_name } { userStore.user?.first_name } { userStore.user?.middle_name }</span>
                  <Button onClick={() => onLogout()}>Выйти</Button>
                </div>
                : <Link to="/auth" className={"dropdown-item text-sm-center btn"}>Войти</Link>
            }
					</Nav>
        </Container>
      </Navbar>
    </>
  )
})

export default Header