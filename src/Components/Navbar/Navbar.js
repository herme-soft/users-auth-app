import React from 'react'
import './Navbar.css'
import {useDispatch} from 'react-redux'

export default function Navbar() {

    const dispatch = useDispatch()

    const toggleSignIn = () => {
        dispatch({
            type: "TOGGLEIN"
        })
    }

    const toggleSignUp = () => {
        dispatch({
            type: "TOGGLEUP"
        })
    }

    return (
        <nav className="fixed top-0 z-50 flex justify-between w-full px-6 py-3 shadow-sm md:px-9 lg:px-20 nav bg-orange">
            <div className="flex justify-start">
                <a className="font-sans text-3xl font-semibold text-white mr-7 lg:mr-0 lg:text-4xl logo font-ephesis">DevDairy</a>
            </div>
                {/* <form className="flex flex-col w-full px-20 py-2 pt-3 shadow lg:justify-end xl:flex-row lg:flex-row align md:shadow-md"></form> */}
            <div class="flex justify-end mt-1">
               <button className="h-8 px-2 mr-1 text-sm font-bold text-white border-2 border-white border-solid rounded-full lg:mr-3 lg:h-10 lg:px-4 hover:bg-black hover:border-black lg:text-lg" onClick={toggleSignIn}>Connexion</button>
               {/* <button className="h-8 px-2 text-sm font-bold text-white border-2 border-white border-solid rounded-full lg:h-10 lg:px-4 hover:bg-black hover:border-black lg:text-lg" onClick={toggleSignUp}>Inscription</button> */}
            </div>
        </nav>
    )
}
