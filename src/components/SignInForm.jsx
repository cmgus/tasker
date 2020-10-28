import React, { useState, useEffect } from 'react'
import { Field, Input, Box, Title, Label, Button, Help } from 'rbx'
import { useAuth, useUser } from 'reactfire'
import { useHistory } from 'react-router-dom'

export const SignInForm = () => {
    const auth = useAuth()
    const user = useUser()
    const history = useHistory()
    const [error, setError] = useState(null)
    const [credentials, setCredentials] = useState({ email: '', password: '' })
    const signIn = async () => {
        try {
            await auth.signInWithEmailAndPassword(credentials.email, credentials.password)
            
        } catch (error) {
            console.log(error);
            setError(error)
        }
    }
    const handleChange = ({ currentTarget }) => {
        const { name, value } = currentTarget
        setCredentials({ ...credentials, [name]: value })
        setError(null)
    }
    useEffect(() => {
        if (user) history.push('/tasks')
    }, [user, history])
    return (
        <Box>
            <Title className="has-text-black has-text-centered">Login</Title>
            {error && error.code === 'auth/too-many-requests' &&<Help color="danger" textAlign="centered">You have exceeded the number of attempts. Try again later</Help>}
            <Field>
                <Label>Email</Label>
                <Input 
                    type="email" 
                    name="email" 
                    color={`${error && error.code === 'auth/user-not-found' ? "danger" : ""}`}
                    value={credentials.email} 
                    onChange={handleChange} />
                {error && error.code === 'auth/user-not-found' && <Help color="danger">E-mail not exists</Help>}
            </Field>
            <Field>
                <Label>Password</Label>
                <Input 
                    type="password" 
                    name="password"
                    color={`${error && error.code === 'auth/wrong-password' ? "danger" : ""}`}
                    value={credentials.password} 
                    onChange={handleChange} />
                {error && error.code === 'auth/wrong-password' && <Help color="danger">Password don't match</Help>}
            </Field>
            <Field className="has-text-right">
                <Button onClick={signIn} color="black">Login</Button>
            </Field>
        </Box>
    )
}
