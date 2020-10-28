import React, { useState, useEffect } from 'react'
import { Field, Input, Box, Title, Label, Button } from 'rbx'
import { useAuth, useUser } from 'reactfire'
import { useHistory } from 'react-router-dom'

export const SignInForm = () => {
    const auth = useAuth()
    const user = useUser()
    const history = useHistory()
    const [credentials, setCredentials] = useState({ email: '', password: '' })
    const signIn = async () => {
        auth.signInWithEmailAndPassword(credentials.email, credentials.password)
    }
    const handleChange = ({ currentTarget }) => {
        const { name, value } = currentTarget
        setCredentials({ ...credentials, [name]: value })
    }
    useEffect(() => {
        if (user) history.push('/tasks')
    }, [user, history])
    return (
        <Box>
            <Title className="has-text-black has-text-centered">Login</Title>
            <Field>
                <Label>Email</Label>
                <Input type="email" name="email" value={credentials.email} onChange={handleChange} />
            </Field>
            <Field>
                <Label>Password</Label>
                <Input type="password" name="password" value={credentials.password} onChange={handleChange} />
            </Field>
            <Field className="has-text-right">
                <Button onClick={signIn} color="black">Login</Button>
            </Field>
        </Box>
    )
}
