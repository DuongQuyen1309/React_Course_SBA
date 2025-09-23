import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../styles/Login.css';
const Login = () => {
    return (
        <Container className="login-container">
            <h5 className="login-title mb-4">Login</h5>
            <Form className="login-form">  
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" />
                </Form.Group>
                <Button className="login-button" variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <div className = "mt-3">
                Forgot <a href= "#">Password</a>?
            </div>
            <div className="mt-3">
                Don't have an account? <a href="#">Sign up</a>
            </div>
        </Container>
    );
}
export default Login;