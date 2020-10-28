import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { withAuth } from './hoc/withAuth'
import { Home } from './pages/Home'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { Tasks } from './pages/Tasks'

export const App = () => {
    return (
        <>
            <Router>
                <Route exact path="/" component={Home} />
                <Route path="/sign-up" component={SignUp} />
                <Route path="/sign-in" component={SignIn} />
                <Route path="/tasks" component={withAuth(Tasks)} />
            </Router>
        </>
    )
}
