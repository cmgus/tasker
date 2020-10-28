import React from 'react'
import { SignInForm } from '../components/SignInForm'
import { NavbarApp } from '../components/NavbarApp'
import { Column, Hero, Container } from 'rbx'
export const Home = () => {
    return (
        <Hero color="black" size="fullheight">
            <Hero.Head>
                <NavbarApp />
            </Hero.Head>
            <Hero.Body>
                <Container>
                    <Column.Group vcentered>
                        <Column>
                            <h2 className="title has-text-centered">Tasker App</h2>
                        </Column>
                        <Column size="4">
                            <SignInForm />
                        </Column>
                    </Column.Group>
                </Container>
            </Hero.Body>
        </Hero>
    )
}
