import React from 'react'
import { Column, Container, Hero } from 'rbx'
import { SignInForm } from '../components/SignInForm'

export const SignIn = () => {
    return (
        <>
            <Hero size="fullheight" color="black">
                <Hero.Body>
                    <Container>
                        <Column.Group className="is-centered">
                            <Column size={4}>
                                <SignInForm />
                            </Column>
                        </Column.Group>
                    </Container>
                </Hero.Body>
            </Hero>
        </>
    )
}
