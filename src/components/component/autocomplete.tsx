"use client";
import { useState } from "react";
import MapboxAutocomplete from "react-mapbox-autocomplete";
import { setCity,setLat,setLng, setWeatherDataRedux } from "@/app/redux/slice/locationSlice";
import { useDispatch } from "react-redux";
import { useRouter } from 'next/navigation'
 


export default  function  AutoComplete() {
  const dispatch = useDispatch();
  const router = useRouter()

  const [cityLocation, setcityLocation] = useState({
    lat: 0,
    lng: 0,
  });

  const suggestionSelect = async (result: any, lat: any, lng: any, text: string) => {
    console.log(result, lat, lng, text);

    setcityLocation({
      lat: lat,
      lng: lng,
    });
    dispatch(setCity(result))
    dispatch(setLat(lat))
    dispatch(setLng(lng))

    let link = text.toLowerCase()

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${lng}&units=metric&APPID=df471ef10c63ddbe0c3555fe6d225432`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    dispatch(setWeatherDataRedux(data))

    router.push(`/city/${link}`,{scroll:false})
  };

  return (
    <div>
     
    <MapboxAutocomplete
      publicKey="pk.eyJ1IjoidGVhc2prb2Ftd2FyIiwiYSI6ImNrcW0xaDJnMTExMjEycW54am5vdXJ2em0ifQ.A00laVf9rRhXGtWvbExG-Q"
      inputClass=" bg-[#EBE9EA] w-[300px] h-[40x] rounded-[8px] p-2"

      onSuggestionSelect={suggestionSelect}
      country="in"
      required
      placeholder="  आप कहां रहते हैं ?"
      resetSearch={false}
    />
    </div>
  );
}
