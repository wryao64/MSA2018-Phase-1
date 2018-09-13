import * as React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
// import { Nav, Navbar, NavItem } from 'react-bootstrap';
// import { IndexLinkContainer } from "react-router-bootstrap";
import { Link } from 'react-router-dom';

export const Header: React.StatelessComponent<{}> = () => {
    return (
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/">BookIt</Link>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                {/* <IndexLinkContainer to="/FirstComponent">
                    <NavItem>Page 1</NavItem>
                </IndexLinkContainer> */}
            </Nav>
        </Navbar>
    );
}