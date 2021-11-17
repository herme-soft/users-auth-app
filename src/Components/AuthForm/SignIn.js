import React, {useRef, useState, useContext} from 'react'
import './AuthForm.css'
import {useSelector, useDispatch} from 'react-redux'
import {AuthContext} from '../../context/AuthContext'
import {useHistory} from 'react-router-dom'

export default function SignIn() {

    const [error, setError] = useState('');
    const history = useHistory()
    const {login} = useContext(AuthContext)

    const showModal = useSelector(state => state)

    async function handleSubmit(e){
        e.preventDefault();

        try{
            await login(inputs.current[0].value, inputs.current[1].value);
            history.push('/loggedHome')
            closeModal()
        } catch {
            setError('Email ou mot de passe incorrect.')
        }
    }

    const dispatch = useDispatch()

    const closeModal = () => {
        dispatch({
            type: "CLOSEMODAL"
        })
    }

    const toggleSignUp = () => {
        dispatch({
            type: "TOGGLEUP"
        })
    }

    const inputs = useRef([])

    const addInputs = el => {
        if(el && !inputs.current.includes(el)){
            inputs.current.push(el)
        }
    }

    return (
        <div className={showModal.showSignIn ? "global-modal" : "hide-modal"}>
            <div 
            onClick={closeModal}
            className="overlay"></div>
            
            <div className="absolute max-w-md p-6 bg-white shadow-lg md:w-full md:w-98 w-100 lg:w-full container-modal lg:top-1/2 left-1/2 top-1/2 z-100">
                <form
                onSubmit={handleSubmit}
                className="relative form-auth">

                    <h2 className="text-4xl font-light pb-7">CONNEXION</h2>
                    <label htmlFor="mail" className="block w-full text-lg lg:text-xl">Votre mail</label>
                    <input type="email" ref={addInputs} htmlFor="mail" placeholder="Entrer: john@gmail.com" required className="block w-full p-4 mt-1 mb-4 transition duration-500 bg-gray-200 border-b-4 border-gray-300 rounded text-1xl h-14 focus:outline-none focus:border-orange" />

                    <label htmlFor="psw" className="block w-full text-lg lg:text-xl">Votre mot de passe</label>
                    <input type="password" ref={addInputs}  id="psw" placeholder="Entrer: sky&cloud12345" required className="block w-full p-4 mt-1 transition duration-500 bg-gray-200 border-b-4 border-gray-300 rounded text-1xl h-14 focus:outline-none focus:border-orange" />
                    <span className="block mt-1 text-danger">{error}</span>
                    <button className="block w-full py-4 mt-6 mb-4 text-xl text-gray-200 transition duration-200 rounded shadow-lg cursor-pointer bg-darkgray btn-sign hover:shadow-xl hover:bg-gray-700">Se connecter</button>
                </form>

                <button 
                onClick={closeModal}
                className="absolute text-2xl text-white rounded-sm shadow-lg btn-close bg-orange hover:bg-darkorange">X</button>
                {/* <p 
                onClick={toggleSignUp}
                className="bottom-help-txt">
                    Besoin de créer un compte ?
                </p> */}
            </div>
        </div>
    )
}
