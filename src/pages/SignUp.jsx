import React from 'react'
import { Container, Hero, Column, Field, Input, Box, Title, Label, Button } from 'rbx'
import { Link } from 'react-router-dom'

export const SignUp = () => {
    return (
        <Hero size="fullheight" color="black">
            <Hero.Body>
                <Container>
                    <Column.Group className="is-centered">
                        <Column size={4}>
                            <Box>
                                <Title className="has-text-black has-text-centered">Register</Title>
                                <Field>
                                    <Label>Email</Label>
                                    <Input type="email" />
                                </Field>
                                <Field>
                                    <Label>Password</Label>
                                    <Input type="password" />
                                </Field>
                                <Field>
                                    <Label>Username</Label>
                                    <Input />
                                </Field>
                                <Field className="has-text-right">
                                    <Button color="black">Sign Up</Button>
                                </Field>
                                <Link to="/" className="button is-text is-fullwidth">Do you have an account?</Link>
                            </Box>
                        </Column>
                    </Column.Group>
                </Container>
            </Hero.Body>
        </Hero>
    )
}
