import React from 'react'
import { Box, Button, Column, Container, Hero, Title } from 'rbx'
import { SignInForm } from '../components/SignInForm'
import { useAuth } from 'reactfire'
import firebase from 'firebase/app'

export const SignIn = () => {
    const auth = useAuth()
    const signInGoogle = async () => {
        await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    }
    return (
        <>
            <Hero size="fullheight" color="light">
                <Hero.Body>
                    <Container>
                        <Column.Group className="is-centered">
                            <Column size={4}>
                                <Box>
                                    <Title>Login with:</Title>
                                    <Button onClick={signInGoogle} color="danger" fullwidth>Google</Button>
                                </Box>
                                <SignInForm />
                            </Column>
                        </Column.Group>
                    </Container>
                </Hero.Body>
            </Hero>
        </>
    )
}
