"use client"
import { selectCity, selectLat, selectLng, selectWeatherDataRedux } from "@/app/redux/slice/locationSlice";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function WeatherComponent(){

    const city = useSelector(selectCity);
    const weatherData:any = useSelector(selectWeatherDataRedux)
    console.log(weatherData,"from weatherComponent");
    
    // const lat = useSelector(selectLat)
    // const long = useSelector(selectLng)

    // const [weatherData, setWeatherData] = useState<any>();

    // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         // const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
    //         const apiUrl = `https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&APPID=df471ef10c63ddbe0c3555fe6d225432`;
    //         const response = await fetch(apiUrl);
    //         const data = await response.json();
    //         setWeatherData(data);
    //       } catch (error) {
    //         console.error('Error fetching weather data:', error);
    //       }
    //     };
    
    //     fetchData();
    //   }, []);
    //   console.log(weatherData,"weather component");
    //   console.log(weatherData.main.temp);
      

    return(

        // <div>hi</div>
        <div style={{backgroundImage: `url("https://images.unsplash.com/photo-1533460004989-cef01064af7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JlZW4lMjBncmFzc3xlbnwwfHwwfHx8MA%3D%3D")` }} className="bg-green-200 cover bg-no-repeat p-4">
        <div className="text-start">
          <h1 className="text-6xl font-bold text-white">
            {weatherData.main.temp+"°"}
          </h1>
          <p className="text-sm text-white">{city}</p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div>
            <CloudSunIcon className="text-white" />
            <p className="text-white">{weatherData.weather[0].description}</p>
          </div>
          <div>
            <CloudRainIcon className="text-white" />
            <p className="text-white">{weatherData.clouds.all.toString() + "%"}</p>
          </div>
          <div>
            <WindIcon className="text-white" />
            <p className="text-white">{weatherData.wind.speed.toString() + " m/s"}</p>
          </div>
          <SnowflakeIcon className="text-blue-200" />
        </div>
      </div>
    )
}

function CloudRainIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
        <path d="M16 14v6" />
        <path d="M8 14v6" />
        <path d="M12 16v6" />
      </svg>
    );
  }
  
  function SnowflakeIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="2" x2="22" y1="12" y2="12" />
        <line x1="12" x2="12" y1="2" y2="22" />
        <path d="m20 16-4-4 4-4" />
        <path d="m4 8 4 4-4 4" />
        <path d="m16 4-4 4-4-4" />
        <path d="m8 20 4-4 4 4" />
      </svg>
    );
  }
  
  function WindIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
        <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
        <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
      </svg>
    )
  }

  function CloudSunIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="M20 12h2" />
        <path d="m19.07 4.93-1.41 1.41" />
        <path d="M15.947 12.65a4 4 0 0 0-5.925-4.128" />
        <path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z" />
      </svg>
    );
  }