"use client"
import PagesTopDiv from '@/components/PagesTopDiv'
import React, { useEffect, useState } from 'react'
import { GoogleMap, Marker, DirectionsService, Libraries, DirectionsRenderer, useJsApiLoader } from '@react-google-maps/api'

const containerStyle = {
    width: "100%",
    height: "100%"
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
    // const [travelTime, settravelTime] = useState<string | null>(null)
    const [currentLocation, setcurrentLocation] = useState<{ lat: number, lng: number }>(defaultValue)
    // const [watchPositionId, setwatchPositionId] = useState<number | null>(null)


    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API as string,
        libraries
    })

    const successCallback = (position: GeolocationPosition) => {
        setcurrentLocation(
            {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            }
        )
    }


    const errorCallback = (error: GeolocationPositionError) => {
        alert(`ERROR: ${error.code} MESSAGE: ${error.message}`)

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


    const directionsCallback = (response: google.maps.DirectionsResult | null) => {
        if (response !== null) {
            if (response.routes.length && response.routes[0].legs.length) {
                setDirections(response)
                // const route = response.routes[0].legs[0]
                // settravelTime(route.duration?.text || 'N/A')
            } else {
                console.error('Directions request  failed as no routes found');
            }
        }
    }

    if (loadError) {
        return <p>Error loading google maps</p>
    }

    if (!isLoaded) {
        return (
            <div className='flex flex-col'>
                <PagesTopDiv heading='Contact Us' paragraph='Home Contact' />

                <div className='flex h-[500px] bg-headerBgColor'>

                    <div className='flex flex-col gap-3 pt-2 w-[50%] h-full px-4 justify-center'>
                        <p className='text-textColor text-[2em] font-semibold h-[10%]'>Contact For Any Queries</p>
                        <form action="" className='h-[75%] w-full flex flex-col justify-evenly rounded-[5px] gap-4 bg-headerBgColor p-2'>
                            <div className='flex justify-between'>
                                <input className='outline-none w-[49%] p-3 text-[1.1em] rounded-[5px] ' type="text" placeholder='First Name' />
                                <input className='outline-none w-[49%] p-3 text-[1.1em] rounded-[5px] ' type="text" placeholder='Last Name' />
                            </div>

                            <input type="text" placeholder='Subject' className='p-3 text-[1.1em] outline-none rounded-[5px]' />
                            <textarea name="comment" id="comment" placeholder='Message' className='h-[120px] resize-none rounded-[5px] outline-none p-2 text-[1.1em]'></textarea>

                            <button className='bg-headerInfoBgColor text-white p-2 text-[1.1em] font-semibold rounded-[5px]'>Submit</button>
                        </form>

                    </div>

                    <div className='w-[50%] flex justify-center items-center'>
                        Google map loading...
                    </div>
                </div>

            </div>
        )
    }
    return (
        <div className='flex flex-col'>
            <PagesTopDiv heading='Contact Us' paragraph='Home Contact' />

            <div className='flex h-[500px] bg-headerBgColor'>

                <div className='flex flex-col gap-3 pt-2 w-[50%] h-full px-4 justify-center'>
                    <p className='text-textColor text-[2em] font-semibold h-[10%]'>Contact For Any Queries</p>
                    <form action="" className='h-[75%] w-full flex flex-col justify-evenly rounded-[5px] gap-4 bg-headerBgColor p-2'>
                        <div className='flex justify-between'>
                            <input className='outline-none w-[49%] p-3 text-[1.1em] rounded-[5px] ' type="text" placeholder='First Name' />
                            <input className='outline-none w-[49%] p-3 text-[1.1em] rounded-[5px] ' type="text" placeholder='Last Name' />
                        </div>

                        <input type="text" placeholder='Subject' className='p-3 text-[1.1em] outline-none rounded-[5px]' />
                        <textarea name="comment" id="comment" placeholder='Message' className='h-[120px] resize-none rounded-[5px] outline-none p-2 text-[1.1em]'></textarea>

                        <button className='bg-headerInfoBgColor text-white p-2 text-[1.1em] font-semibold rounded-[5px]'>Submit</button>
                    </form>

                </div>

                <div className='w-[50%] flex justify-center items-center'>
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


                </div>
            </div>

        </div>
    )
}

export default Page