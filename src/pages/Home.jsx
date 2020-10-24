import React from 'react'

export const Home = () => {
    return (
        <div className="hero is-black is-fullheight">
            <div className="hero-head">
                <nav className="navbar">
                    <div className="container">
                        <div class="navbar-brand">
                            <a className="navbar-item">
                                <span className="title">Tasker</span>
                            </a>
                            <span class="navbar-burger burger" data-target="home-navbar">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </div>
                        <div id="home-navbar" className="navbar-menu">
                            <div className="navbar-end">
                                <span className="navbar-item">
                                    <button className="button is-white is-outlined is-rounded">Sign Up</button>
                                </span>
                                <span className="navbar-item">
                                    <button className="button is-light is-rounded">Sign In</button>
                                </span>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-vcentered">
                        <div className="column">
                            <h2 className="title has-text-centered">Tasker App</h2>
                        </div>
                        <div className="column is-4">
                            <div className="box">
                                <h1 className="title has-text-dark has-text-centered">Sign In</h1>
                                <div className="field">
                                    <input type="text" className="input" placeholder="E-mail" />
                                </div>
                                <div className="field">
                                    <input type="password" className="input" placeholder="Password" />
                                </div>
                                <div className="field">
                                    <div className="columns is-vcentered">
                                        <div className="column has-text-left">
                                            <a href="!#" className="has-text-dark">Forget password?</a>
                                        </div>
                                        <div className="column has-text-right">
                                            <input type="submit" value="SignIn" className="button is-black" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
