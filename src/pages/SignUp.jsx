import React, { useState } from 'react'
import { Container, Hero, Column, Field, Input, Box, Title, Label, Button, Help } from 'rbx'
import { useAuth } from 'reactfire'
import { useHistory } from 'react-router-dom'

export const SignUp = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' })
    const auth = useAuth()
    const history = useHistory()
    const [error, setError] = useState(null)
    const handleChange = ({ currentTarget }) => {
        const { name, value } = currentTarget
        setCredentials({ ...credentials, [name]: value })
        setError(null)
    }
    const signUp = async () => {
        try {
            const { email, password } = credentials
            await auth.createUserWithEmailAndPassword(email, password)
            history.push('/tasks')
        } catch (error) {
            console.log(error)
            setError(error)
        }
    }
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
                                    <Input
                                        value={credentials.email}
                                        onChange={handleChange}
                                        color={error && error.code === 'auth/email-already-in-use' ? 'danger' : ""}
                                        type="email"
                                        name="email" />
                                    {error && error.code === 'auth/email-already-in-use' && <Help color="danger">E-mail already exists</Help>}

                                </Field>
                                <Field>
                                    <Label>Password</Label>
                                    <Input
                                        value={credentials.password}
                                        onChange={handleChange}
                                        color={error && error.code === 'auth/weak-password' ? 'danger' : ""}
                                        type="password"
                                        name="password" />
                                    {error && error.code === 'auth/weak-password' && <Help color="danger">Password must be at least 6 characters</Help>}
                                </Field>
                                <Field className="has-text-right">
                                    <Button onClick={signUp} color="black">Sign Up</Button>
                                </Field>
                            </Box>
                        </Column>
                    </Column.Group>
                </Container>
            </Hero.Body>
        </Hero>
    )
}
