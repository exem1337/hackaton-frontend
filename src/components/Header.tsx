import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link, useLocation, useNavigate} from "react-router-dom";
import userStore from '../store/User';
import { Button } from 'react-bootstrap';
import AuthService from '../service/AuthService';
import { observer } from 'mobx-react-lite';
import { DISABLED_LOGIN_BUTTON_LOCATIONS } from '../constants/disabledLoginButtonLocations.const';

const Header = observer(() => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onLogout = () => {
    AuthService.logout();
    navigate('/');
  }

  const onGoToProfile = () => {
    navigate('/profile')
  }

  const onGoToMain = () => {
    if (userStore.isAdmin()) {
      navigate('/admin');
      return;
    }

    navigate('/portal');
  }

  return(
		<>
      <Navbar data-bs-theme="dark" className={'position-sticky top-0 z-2'}>
        <Container>
        <img
              alt=""
              src="images/ПТ.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          <Navbar.Brand onClick={() => navigate('/')}><h2>ПрофТестиум</h2></Navbar.Brand>
          {
            ['', '/'].includes(pathname) &&
            <Nav className="me-auto">
              <Nav.Link>Возможности</Nav.Link>
              <Nav.Link>Тарифы</Nav.Link>
              <Nav.Link>Внедрение</Nav.Link>
              <Nav.Link>Отзывы</Nav.Link>
            </Nav>
          }
          {
            userStore.isLogin &&
            <Nav className="me-auto">
              <Nav.Item onClick={() => onGoToMain()}>{ userStore.isAdmin() ? 'Панель администратора' : 'Перейти к порталу' }</Nav.Item>
            </Nav>
          }

					<Nav className = "ms-auto">
            {
              userStore.isLogin 
                ? <div className="auth-info">
                    <span onClick={onGoToProfile}>{ userStore.user?.last_name } { userStore.user?.first_name } { userStore.user?.middle_name }</span>
                    { userStore.user?.avatar && <img src={`data:image/png;base64,${userStore.user?.avatar as unknown as string}`} /> }
                    <Button onClick={() => onLogout()}>Выйти</Button>
                  </div>
                : !DISABLED_LOGIN_BUTTON_LOCATIONS.includes(pathname) && <Link to="/auth" className={"dropdown-item text-sm-center btn"}>Войти</Link>
            }
					</Nav>
        </Container>
      </Navbar>
    </>
  )
})

export default Header