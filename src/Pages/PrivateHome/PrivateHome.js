import React, {useContext, useState, useEffect} from 'react'
import "../Home/Home.css"
import {AuthContext} from '../../context/AuthContext'
import useFetch from 'react-fetch-hook'
import ContactCards from '../../Components/ContactCards'
// import Navbar from '../../Components/Navbar/Navbar'
import Member from '../Mermber/Member'
import './PrivateHome.css'

export default function PrivateHome() {

    const {logout} = useContext(AuthContext)


    const url = "https://randomuser.me/api"

    const { isLoading, data, error } = useFetch(url+'?results=200')
    const [contactList, setContactList] = useState(null)
    const[filterQuery, setFilterQuery] = useState(null)

    useEffect(() => {
        if(filterQuery) {
        // Ici utiliser le filtre
        const queryString = filterQuery.toLowerCase()
        const filteredData = data?.results?.filter(contact => {
            const fullName = `${contact.name.first} ${contact.name.last}`

            if(queryString.length === 1) {
            const firstLetter = fullName.charAt(0).toLowerCase()
            return firstLetter === queryString
            }

            else {
            return fullName.toLowerCase().includes(queryString)
            }
        })
        setContactList(filteredData)
        }
        else {
        setContactList(data?.results)
        }
    }, [data, filterQuery])
    

    return (
        <>
            <div className="pt-5 private-container">
                {/* <div className="overlay"></div> */}
                
                <nav className="fixed top-0 z-50 flex w-full px-6 py-3 shadow-sm md:px-9 lg:px-20 nav bg-orange lg:flex lg:justify-between md:flex md:justify-between">
                    <div className="flex justify-start pt-1 mr-4 lg:mr-3">
                        <a className="font-sans text-3xl font-semibold text-white lg:text-4xl logo font-ephesis">DevDairy</a>
                    </div>
                    <form className="flex justify-end w-full lg:flex-row">
                        <div className="flex mt-2 lg:flex lg:justify-end">
                            <input 
                                type="text"
                                className="w-full h-8 p-3 mx-0 mb-2 mr-2 rounded lg:mr-3 lg:h-10 md:w-48 lg:w-52"
                                onChange={event => setFilterQuery(event.target.value)}
                                placeholder="Type here to filter..." 
                            />
                            <button className="h-8 px-2 mr-1 text-sm font-bold text-white border-2 border-white border-solid rounded-full lg:mr-3 lg:h-10 lg:px-4 hover:bg-black hover:border-black lg:text-lg" onClick={logout}>Déconnexion</button>
                        </div>
                    </form>
                </nav>


                <div className="bg-gray-100 pt-7">
                    <section>
                        <div >
                            {/* <button onClick={notify}>Notify!</button> */}
                            {/* <ToastContainer position="top-center" /> */}
                        </div>


                        
                    </section>
                    <section className="grid gap-6 p-2 lg:grid-cols-4 sm:grid-cols-1 lg:p-20 md:grid-cols-2 md:mt-14 mt-14 lg:mt-7">
                        {contactList?.length < 1 && (
                        <h1>No data match your search</h1>
                        )}
                        <ContactCards contactList={contactList} />
                    </section>
                </div>
            </div>
        </>
    )
}
