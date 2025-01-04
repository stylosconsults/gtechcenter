"use client"
import PagesTopDiv from '../../../components/PagesTopDiv'
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { GoogleMap, Marker, DirectionsService, Libraries, DirectionsRenderer, useJsApiLoader } from '@react-google-maps/api'
import { useContacts } from '@/hooks/useContacts'
import { Contact } from '@/types/Contact'
import LoadingGoogleMap from '@/components/LoadingContactPage'

const containerStyle = {
    width: "100%",
    height: "100%",
}


const destination = {
    lat: -1.9757035631385522,
    lng: 30.10670646256887
}

const defaultValue = {
    lat: 0,
    lng: 0
}

const libraries: Libraries = ['places']

const Page = () => {

    const [directions, setDirections] = useState<google.maps.DirectionsResult | null>(null)
    const [currentLocation, setCurrentLocation] = useState<{ lat: number, lng: number }>(defaultValue)

    // contact form control 
    const [disableSubmitBtn, setDisableSubmitBtn] = useState<boolean>(false)
    const [contactInputData, setContactInputData] = useState<Contact>(
        {
            first_name: "",
            last_name: "",
            subject: "",
            message: "",
            email: ""
        }
    )
    const { loading, createContact, contactSuccessMsgs } = useContacts()

    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API as string,
        libraries
    })



    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setContactInputData(
            (previousInputData) => (
                {
                    ...previousInputData,
                    [name]: value
                }
            )
        )


    }



    const handleOnSubmit = async (e: FormEvent) => {
        e.preventDefault()
        await createContact(contactInputData)


    }
    useEffect(() => {
        if (contactSuccessMsgs.createSuccessMsg !== "") {
            setContactInputData({
                first_name: "",
                last_name: "",
                subject: "",
                message: "",
                email: ""
            })

        }
    }, [contactSuccessMsgs.createSuccessMsg])



    useEffect(() => {
        if (
            contactInputData.first_name &&
            contactInputData.last_name &&
            contactInputData.message &&
            contactInputData.subject
        ) {
            setDisableSubmitBtn(false)
        } else {
            setDisableSubmitBtn(true)
        }
    }, [contactInputData])


    // contact from control


    const successCallback = (position: GeolocationPosition) => {
        setCurrentLocation(
            {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            }
        )
    }


    const errorCallback = (error: GeolocationPositionError) => {
        alert(`ERROR: ${error.code} MESSAGE: ${error.message}`)

    }

    const directionsCallback = (response: google.maps.DirectionsResult | null) => {
        if (response !== null) {
            if (response.routes.length && response.routes[0].legs.length) {
                setDirections(response)
                // const route = response.routes[0].legs[0]
                // settravelTime(route.duration?.text || 'N/A')
            } else {
            }
        }
    }

    useEffect(() => {
        if (navigator.geolocation) {
            const watchId = navigator.geolocation.watchPosition(successCallback, errorCallback, {
                enableHighAccuracy: true, // Optional: better accuracy but higher battery usage
                maximumAge: 0,            // Optional: don't use cached location
            })


            // setwatchPositionId(watchId)

            return () => {
                if (watchId !== null) {
                    navigator.geolocation.clearWatch(watchId)
                }
            }
        }


    }, [])


    return (
        <div className='flex flex-col'>
            <PagesTopDiv heading='Contact Us' paragraph='Home Contact' />

            <div className='grid grid-cols-1 md:grid-cols-2 md:h-[600px] h-[1300px] bg-headerBgColor'>
                {/* Contact form */}
                <div className='flex flex-col gap-3 col-span-1 pt-2 h-full px-4 justify-center'>


                    <p className='text-textColor text-[2em] font-semibold md:h-[10%] text-center md:text-start'>Contact For Any Queries</p>
                    <form onSubmit={handleOnSubmit} className='md:h-[75%] w-full flex flex-col justify-evenly rounded-[5px] gap-4 bg-headerBgColor p-2'>
                        <div className='flex justify-between'>
                            <input
                                className='outline-none w-[49%] p-3 text-[1.1em] rounded-[5px] '
                                type="text"
                                name='first_name'
                                placeholder='First Name'
                                value={contactInputData.first_name}
                                onChange={handleInputChange}
                                required

                            />
                            <input
                                className='outline-none w-[49%] p-3 text-[1.1em] rounded-[5px] '
                                type="text"
                                name="last_name"
                                placeholder='Last Name'
                                value={contactInputData.last_name}
                                onChange={handleInputChange}
                                required

                            />
                        </div>

                        <input
                            type="email"
                            name='email'
                            placeholder='Email'
                            className='p-3  text-[1.1em] outline-none rounded-[5px]'
                            value={contactInputData.email}
                            onChange={handleInputChange}
                            required
                        />

                        <input
                            type="text"
                            name='subject'
                            placeholder='Subject'
                            className='p-3 text-[1.1em] outline-none rounded-[5px]'
                            value={contactInputData.subject}
                            onChange={handleInputChange}
                            required
                        />
                        <textarea
                            name="message"
                            id="message"
                            placeholder='Message'
                            className='h-[200px] resize-none rounded-[5px] outline-none p-2 text-[1.1em]'
                            value={contactInputData.message}
                            onChange={handleInputChange}
                            required
                        ></textarea>

                        <button disabled={disableSubmitBtn || loading} className={`${loading || disableSubmitBtn ? "bg-red-400" : "bg-headerInfoBgColor"} text-white p-2 text-[1.1em] font-semibold rounded-[5px]`}>{loading ? "loading" : "Submit"}</button>
                    </form>




                </div>
                {/* Contact form */}


                {/* Google map section */}
                <div className='flex justify-center items-center col-span-1 '>
                    {loadError ? (
                        <p>Error while loading google map</p>
                    ) : !isLoaded ? (
                        <LoadingGoogleMap/>
                    ) : (

                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={currentLocation}
                            zoom={12}
                        >

                            <Marker
                                position={currentLocation}
                            // icon={{
                            //     url: "/gifs/output-onlinegiftools (1).gif",  // Path to the blinking GIF
                            //     scaledSize: new window.google.maps.Size(50, 50), // Adjust the size
                            //     origin: new window.google.maps.Point(0,0),
                            //     anchor: new window.google.maps.Point(25,25)

                            // }}


                            />
                            <Marker position={destination} />
                            <DirectionsService
                                options={{
                                    destination: destination,
                                    origin: currentLocation,
                                    travelMode: google.maps.TravelMode.WALKING
                                }}

                                callback={directionsCallback}
                            />

                            {
                                directions && (
                                    <DirectionsRenderer
                                        options={{
                                            directions: directions
                                        }}
                                    />
                                )
                            }
                        </GoogleMap>
                    )}
                </div>
                {/* Google map section */}
            </div>

        </div>
    )
}

export default Page