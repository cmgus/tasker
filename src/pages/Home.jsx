import React from 'react'
import { SignInForm } from '../components/SignInForm'
import { Column, Hero, Container } from 'rbx'
export const Home = () => {
    return (
        <Hero color="light" size="fullheight-with-navbar">
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
