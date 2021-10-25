import React, {useRef, useState, useContext} from 'react'
import './AuthForm.css'
import {useSelector, useDispatch} from 'react-redux'
import {AuthContext} from '../../context/AuthContext'
import {useHistory} from 'react-router-dom'


export default function SignUp() {

    const [error, setError] = useState('')
    const history = useHistory();
    const {signup} = useContext(AuthContext)


    const showModal = useSelector(state => state)

    const dispatch = useDispatch()

    const closeModal = () => {
        dispatch({
            type: "CLOSEMODAL"
        })
    }
    const toggleSignIn = () => {
        dispatch({
            type: "TOGGLEIN"
        })
    }
    async function handleSubmit(e) {
        e.preventDefault();

        if(inputs.current[1].value !== inputs.current[2].value){
            setError("Les mots de passe ne sont pas identiques")
            return;
        }

        await signup(inputs.current[0].value, inputs.current[1].value);
        closeModal()
        history.push('/loggedHome');
    }
    
    const inputs = useRef([])

    const addInputs = el => {
        if(el && !inputs.current.includes(el)){
            inputs.current.push(el)
        }
    }

    return (
        <div className={showModal.showSignUp ? "global-modal" : "hide-modal"}>
            <div 
              onClick={closeModal}
            className="overlay"></div>
            
            <div className="absolute max-w-md p-6 bg-white shadow-lg container-modal md:w-full md:w-98 w-100 lg:w-full lg:top-1/2 left-1/2 top-1/2 z-100">
                <form 
                onSubmit={handleSubmit}
                className="form-auth">

                    <h2 className="text-4xl font-light pb-7">INSCRIPTION</h2>
                    <label htmlFor="mail" className="block w-full text-lg lg:text-xl">Votre mail</label>
                    <input type="email" ref={addInputs} htmlFor="mail" placeholder="Email" required className="block w-full p-5 mt-1 mb-4 transition duration-500 bg-gray-200 border-b-4 border-gray-300 rounded text-1xl h-14 focus:outline-none focus:border-orange" />

                    <label htmlFor="psw" className="block w-full text-lg lg:text-xl">Votre mot de passe</label>
                    <input type="password" ref={addInputs}  id="psw" placeholder="Mot de passe" required className="block w-full p-5 mt-1 mb-4 transition duration-500 bg-gray-200 border-b-4 border-gray-300 rounded text-1xl h-14 focus:outline-none focus:border-orange"/>

                    <label htmlFor="confirmpsw" className="block w-full text-lg lg:text-xl">Confirmez le mot de passe</label>
                    <input type="password" ref={addInputs}  id="confirmpsw" placeholder="Confirmer le mot de passe" required className="block w-full p-5 mt-1 mb-4 transition duration-500 bg-gray-200 border-b-4 border-gray-300 rounded-lg text-1xl h-14 focus:outline-none focus:border-orange"/>
                    <span className="text-danger">{error}</span>
                    <button className="block w-full py-4 mt-6 mb-4 text-xl text-gray-200 transition duration-200 rounded shadow-lg cursor-pointer bg-darkgray btn-sign hover:shadow-xl hover:bg-gray-700">S'inscrire</button>
                </form>

                <button
                  onClick={closeModal}
                  className="absolute text-2xl text-white rounded-sm shadow-lg btn-close bg-orange hover:bg-darkorange">X</button>
                <p 
                onClick={toggleSignIn}
                className="bottom-help-txt">
                    Besoin de se connecter ?
                </p>
            </div>
        </div>
    )
}
