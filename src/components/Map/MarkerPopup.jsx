import React from 'react'
import { Popup } from 'react-leaflet'

const MarkerPopup = (props)=>{
  const { lib_gisement } = props.data
  
  return (
    <Popup>
      <div>{lib_gisement}</div>
    </Popup>
  )

}

export default MarkerPopup