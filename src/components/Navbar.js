import React from 'react'

export default function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg px-4 navbar-dark ">
                <div class="container-fluid py-2 px-4">
                    <a class="navbar-brand text-light fs-2" href="/">Marketo</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link fs-5 text-light mx-2"  href="#home">Home</a>
                            <a class="nav-link fs-5 text-light mx-2" href="#services">Services</a>
                            <a class="nav-link fs-5 text-light mx-2" href="#projects">Projects</a>
                            <a class="nav-link fs-5 text-light mx-2" href='#about'>About</a>
                            <a class="nav-link fs-5 text-light mx-2" href='#clients'>Clients</a>
                            <a class="nav-link fs-5 text-light mx-2" href='/'>Contact</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
