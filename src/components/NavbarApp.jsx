import React from 'react'
import { Container, Navbar } from 'rbx'
import { AuthButtons } from './AuthButtons'
import { Link } from 'react-router-dom'
export const NavbarApp = () => {
    return (
        <Navbar color="black">
            <Container>
                <Navbar.Brand>
                    <Link to="/" className="navbar-item">
                        <span className="title has-text-white">Tasker</span>
                    </Link>
                    <Navbar.Burger />
                </Navbar.Brand>
                <Navbar.Menu backgroundColor="black">
                    <Navbar.Segment align="end">
                        <AuthButtons />
                    </Navbar.Segment>
                </Navbar.Menu>
            </Container>
        </Navbar>
    )
}
