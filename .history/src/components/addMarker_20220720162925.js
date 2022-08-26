import React from "react";
import Map from "./Map";
state: {markersData: [
    { latLng: { lat: 49.8419, lng: 24.0315 }, title: 1 }
  ]};
const AddMarker = () => {
    const { markersData } = this.state;
    const lastMarker = markersData[markersData.length - 1];

    this.setState({
        markersData: [
            ...markersData,
            {
                title: +lastMarker.title + 1,
                latLng: {
                    lat: lastMarker.latLng.lat + 0.0001,
                    lng: lastMarker.latLng.lng + 0.0001,
                }
            }
        ]
    });

    return (
        <>
       
            <Map markersData={markersData} />
            <button
                onClick={this.addMarker}
            >
                Add marker
            </button>
            <ul>Markers data:
                {markersData.map(marker => (
                    <li key={marker.title}>
                        {marker.title},
                        lat: {marker.latLng.lat},
                        lng: {marker.latLng.lng},
                    </li>
                ))}
            </ul>
        </>
    );

}
export default AddMarker;
