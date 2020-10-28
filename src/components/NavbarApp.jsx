import React from 'react'
import { Container, Navbar } from 'rbx'
import { AuthButtons } from './AuthButtons'
export const NavbarApp = () => {
    return (
        <Navbar color="black">
            <Container>
                <Navbar.Brand>
                    <Navbar.Item href="/">
                        <span className="title has-text-white">Tasker</span>
                    </Navbar.Item>
                    <Navbar.Burger />
                </Navbar.Brand>
                <Navbar.Menu>
                    <Navbar.Segment align="end">
                        <AuthButtons />
                    </Navbar.Segment>
                </Navbar.Menu>
            </Container>
        </Navbar>
    )
}
