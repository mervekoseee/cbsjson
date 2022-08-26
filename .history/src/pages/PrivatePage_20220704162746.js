import React, {useMemo} from "react";
import { withLayout } from "../partials/Layout";
import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";

export const PrivatePage = () =>{
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    })
    if(!isLoaded) return<div>Loading...</div>
    return<Map/>
}
function Map (){
    return<GoogleMap zoom={10} center={{lat: 44, lng: -8}}></GoogleMap>
}
export default withLayout(PrivatePage);