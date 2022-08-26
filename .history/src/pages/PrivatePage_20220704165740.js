import React, {useMemo} from "react";
import { withLayout } from "../partials/Layout";
import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";
import styled from "styled-components";

const StyledPrivate = styled.div`
body {
  position: left;
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  * {
    box-sizing: border-box;
  }
  
  .places-container {
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
    width: 300px;
  }
  
  .map-container {
    width: 50%;
    height: 50vh;
  }
  
  .combobox-input {
    width: 100%;
    padding: 0.5rem;
  }
`;

export const PrivatePage = () =>{
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    })
    if(!isLoaded) return<div>Loading...</div>
    return<Map/>
}
function Map (){
    return(
        <StyledPrivate>
            <GoogleMap zoom={10} center={{lat: 44, lng: -8}}
     mapContainerClassName="map-container" ></GoogleMap>
        </StyledPrivate>
    );
}
export default withLayout(PrivatePage);