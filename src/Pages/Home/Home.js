import React from 'react'
import SignUp from '../../Components/AuthForm/SignUp'
import SignIn from '../../Components/AuthForm/SignIn'
import Navbar from '../../Components/Navbar/Navbar'
import "./Home.css"

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="flex items-center justify-center global-container">
            <img src='../assets/img/intro.jpg' alt="" className="fixed inset-0 hidden w-full lg:block bg-hero-pattern" style={{ zIndex: "-1" }} />
                <div className="px-10 font-sans text-center text-white lg:px-0">
                    <h1 className="mb-2 text-4xl font-bold lg:text-7xl">Bienvenue sur DevDairy</h1>
                    <p className="text-xl font-thin lg:text-2xl">Connectez-vous pour accéder à l'espace membre.</p>
                </div>
            <SignUp />
            <SignIn />
        </div>
        </>
    )
}
