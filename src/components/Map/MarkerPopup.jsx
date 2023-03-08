import React from 'react'
import { Popup } from 'react-leaflet'

const MarkerPopup = (props)=>{
  const { lib_gisement } = props.data
  const { desc_gisement } = props.data
  const { img_gisement } = props.data
  
  return (
    <Popup>
      <div className="text-center text-2xl">{lib_gisement}</div>
      <div className='m-2'>{desc_gisement}</div>
      <img src={ img_gisement } alt="" />
    </Popup>
  )

}

export default MarkerPopup