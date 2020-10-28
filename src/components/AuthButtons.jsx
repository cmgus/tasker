import React from 'react'
import { Button } from 'rbx'
import { AuthCheck, useAuth } from 'reactfire'
import { Link } from 'react-router-dom'

export const AuthButtons = () => {
    const auth = useAuth()
    const signOut = async () => {
        await auth.signOut()
    }
    return (
        <AuthCheck fallback={
            <>
                <span className="navbar-item has-text-right">
                    <Link to="/sign-up" className="button is-white is-outlined is-rounded">Sign Up</Link>
                </span>
                <span className="navbar-item has-text-right">
                    <Link to="/sign-in" className="button is-light is-rounded">Sign In</Link>
                </span>
            </>
        }>
            <span className="navbar-item has-text-right">
                <Button onClick={signOut} color="light" outlined rounded>
                    Sign Out
                </Button>
            </span>
        </AuthCheck>
    )
}
