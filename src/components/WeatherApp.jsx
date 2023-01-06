import React,{useState, useEffect } from 'react'
import Loading from './Loading';
import WeatherForm from './WeatherForm'
import WeatherMaininfo from './WeatherMaininfo';

const WeatherApp = () => {
    const[weather, setWeather]=useState(null);

    useEffect(()=>{
        loadInfo();
    },[]);

    useEffect(()=>{
        document.title=`Weather | ${weather?.location.name ?? ""}`;
    },[weather])

    async function loadInfo(city='london'){
        try{
            const request=await fetch(
                `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`
                
                );
                const json = await request.json();

                setTimeout(()=>{
                    setWeather(json);
                }, 2000);
                setWeather(json);
        }
        catch (error){
            console.log(error)
        }
    }

    function handleChangeCity(city){
        setWeather(null);
        loadInfo(city)
    }

  return (
    <div>
        <div className='superior'>
        <div >{weather?.location.country}</div>
        </div>
        <WeatherForm onChangeCity={handleChangeCity}/>
        {weather ? <WeatherMaininfo weather={weather}/> :<Loading/>}
        </div>
  )
}

export default WeatherApp