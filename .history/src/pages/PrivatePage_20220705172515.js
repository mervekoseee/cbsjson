import React from 'react'

import '../components/App.css';

import { useCallback, useMemo, useRef } from 'react';
import { Draggable } from 'leaflet';
import { useState } from 'react';
const center = {
  lat: 51.505,
  lng: -0.09,
}

function PrivatePage() {
  const [draggable, setDraggable] = useState(false)
  const [position, setPosition] = useState(center)
  const markerRef = useRef(null)
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current
        if (marker != null) {
          setPosition(marker.getLatLng())
        }
      },
    }),
    [],
  )
  const toggleDraggable = useCallback(() => {
    setDraggable((d) => !d)
  }, [])

  return (
 <>
 <h1>test</h1>
 </>
  )
}


export default PrivatePage;