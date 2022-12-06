import React from 'react'

export default function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg px-4 my-4 fixed-top">
                <div class="container-fluid py-2 px-4">
                    <a class="navbar-brand fs-2" href="/">Compny Name</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link fs-3 mx-2" aria-current="page" href="/">Home</a>
                            <a class="nav-link fs-3 mx-2" href="/">Services</a>
                            <a class="nav-link fs-3 mx-2" href="/">Projects</a>
                            <a class="nav-link fs-3 mx-2" href='/'>About</a>
                            <a class="nav-link fs-3 mx-2" href='/'>Clients</a>
                            <a class="nav-link fs-3 mx-2" href='/'>Contact</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
