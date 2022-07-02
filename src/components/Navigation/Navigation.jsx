import { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Navigation = ({ finalThali }) => {
  const [errorMsg, setErrorMsg] = useState(['']);
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="me-auto">
          <Navbar.Brand>
            <Link to="/">Thali</Link>
          </Navbar.Brand>
          <Navbar.Brand>
            {finalThali.length >= 2 ? (
              <Link to="Checkout">Checkout</Link>
            ) : (
              <div onClick={() => setErrorMsg('Please enter atlease 2 items')}>
                Checkout
              </div>
            )}
          </Navbar.Brand>
          <Navbar.Text className="text-danger">
            {finalThali.length < 2 && errorMsg}
          </Navbar.Text>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
