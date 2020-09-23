import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import logo from '../../travel-images/Logo.png'
import { UserContext } from '../../App';

const Header = (props) => {
    const { signOut } = props;

    const [signedInUser, setSignedInUser] = useContext(UserContext)
    const logoStyle = {
        height: '50px'
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="trnasparent" variant="light">
                <Navbar.Brand href="#home">
                    <img style={logoStyle} src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    </Form>
                    <Nav className="ml-auto">
                        <Nav.Link href="#news">News</Nav.Link>
                        <Nav.Link href="#destination">Destination</Nav.Link>
                        <Nav.Link href="#blog">Blog</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                    {signedInUser.isSignedIn ? (<Button variant="outline-warning">
                        Sign out
                    </Button>) : (<Button variant="outline-warning">
                        Sign in
                    </Button>)}
                </Navbar.Collapse>
            </Navbar>

        </div>
    );
};

export default Header;