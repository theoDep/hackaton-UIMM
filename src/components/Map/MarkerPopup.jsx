import React from 'react'
import { Popup } from 'react-leaflet'
import { Link } from "react-router-dom";
import "../../index.css";



const MarkerPopup = (props)=>{
  const { lib_gisement } = props.data
  const { desc_gisement } = props.data
  const { img_gisement } = props.data
  const { id_gisement } = props.data
  
  return (
    <div class="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-xl">
  <div class="md:flex">
    <div class="md:shrink-0">
    <Popup>
      <div className="text-center text-xl">{lib_gisement}</div>
      <div className="avatar flex m-5">
        <div className="w-40 rounded m-auto">
          <img src={ img_gisement } alt={lib_gisement}/>
        </div>
      </div>
      <div className='m-2 text-center '>{desc_gisement}</div>
      <div className="flex m-2 ">
      <Link
          className="m-auto btn btn-sm bg-[#702315] boutonpopup"
          to={`/detail/${id_gisement}`}
          
        >Voir plus</Link></div>
    </Popup>
    </div>
    </div></div>
  )

}

export default MarkerPopup