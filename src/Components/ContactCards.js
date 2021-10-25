import React from 'react'

export default function ContactCards({ contactList }) {

    contactList && console.log(contactList)

    return (
        <>
            {contactList?.map((contact, index) => (

                <figure key={index} className="h-auto px-4 py-5 bg-white rounded-lg shadow-md lg:pt-7">
                    <img 
                        className="w-32 h-32 mx-auto rounded-full"
                        src={contact.picture.large} 
                        alt="user" 
                    />
                    <figcaption className="mt-5 text-center">
                        <p className="mb-2 text-xl font-semibold text-gray-700">
                           {contact.name.first} {contact.name.last}
                        </p>
                        <p className="text-gray-500 text-md">
                            <span className="font-medium">email: </span>
                            {contact.email}
                        </p>
                        <p className="text-gray-500 text-md">
                            <span className="font-medium">phone: </span>
                            {contact.cell}
                        </p>
                        <p className="text-gray-500 text-md">
                            <span className="font-medium">city: </span> 
                            {contact.location.city}
                        </p>
                    </figcaption>
                </figure>
            ))}
        </>
    )
}
