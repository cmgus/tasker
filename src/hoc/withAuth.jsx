import React from 'react'
import { AuthCheck } from 'reactfire'
import { Redirect } from 'react-router-dom'
export const withAuth = (Component) => {
    return () => (
        <AuthCheck fallback={
            <Redirect to="/sign-in" />
        }>
            <Component />
        </AuthCheck>
    )
}
