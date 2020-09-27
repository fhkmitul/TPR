import React, { Component } from 'react';
import logo from '../images/logo.png';
import styled from 'styled-components';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';



export class Navbars extends Component {
    render() {
        return (
            <NavWraper>
                <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                    <div className="container">
                    <Navbar.Brand href="/">
                        <img src={logo} alt="TPR"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to ="/rooms" className="nav-link">Rooms</Link>
                        </Nav>
                    </Navbar.Collapse>
                    </div>
                </Navbar>
            </NavWraper>
        )
    }
}

const NavWraper = styled.div`
    background: var(--offWhite) !importent;
`

export default Navbars
