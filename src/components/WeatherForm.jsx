import React,{useState} from 'react'

const WeatherForm = ({onChangeCity}) => {
    const [city, setCity]= useState('');

    function onChange(e){
        const value = e.target.value;

        if(value!=""){
            setCity(value);
        }
    }

    function handleSubmit(e){
        e.preventDefault();

        onChangeCity(city);
    }
  return (
    <form onSubmit={handleSubmit} className='contenedor-formulario'>
        <input type="text" onChange={onChange} className='escritura' placeholder='Escribe tu país o ciudad aqui'/>
    </form>
  )
}

export default WeatherForm