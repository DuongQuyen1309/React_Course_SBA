import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import {BsCart} from 'react-icons/bs';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import headerLogo from '../../assets/logo_pineapple.png';
import UserContext from '../context/UserContext';
import { useContext } from 'react';
const Header = () => {
  const {authenUser, login, logout} = useContext(UserContext);
  return (
    <Navbar expand="lg" bg="white" className="border-bottom" fixed="top">
      <Container>
        <Navbar.Brand href="#" className="d-flex align-items-center">
          <img src={headerLogo} alt="logo" className="d-inline-block align-top"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll"> 
          <Nav
            className="mx-auto"
            style={{ maxHeight: '100px' }}
            navbarScroll>
            <Nav.Link href="#action1" className="mx-2 fw-medium">AI Templates</Nav.Link>
            <Nav.Link href="#action2" className="mx-2 fw-medium">Integrations</Nav.Link>
            <Nav.Link href="#action1" className="mx-2 fw-medium">Products</Nav.Link>
            <Nav.Link href="#action2" className="mx-2 fw-medium">Resources</Nav.Link>
            <Nav.Link href="#action2" className="mx-2 fw-medium">Pricing</Nav.Link>
          </Nav>
          <div className="d-flex ms-auto">
            {
              authenUser?(
                <>
                  <span className="me-3">Welcome, {authenUser.name}</span>
                  <Button variant="primary" className="text-nowrap" onClick={logout}>Logout</Button>
                </>
              ):(
                <>
                  <Button variant="outline-primary" className="me-3 px-3" onClick={login}>Login</Button>
                  <Button variant="primary" className="px-3">Sign in</Button>
                </>
              )}
            <Button variant="outline-success" className="ms-3 px-3">
                <BsCart className="me-1 mb-1"/>Show cart
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;