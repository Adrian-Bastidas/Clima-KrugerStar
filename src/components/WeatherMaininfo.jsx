import React from 'react'

const WeatherMaininfo = ({ weather }) => {
  return (
    <div>
      <div className='datos-contenedor'>
        <div className='grados'>
        <div className='temperatura'>{weather?.current.temp_c}°</div>
          <div className='descripcion'>{weather?.current.condition.text}</div>
        </div>
        <img className='icono'
          src={`http:${weather?.current.condition.icon}`}
          alt={weather?.current.condition.text}
        />
        <div className='ciudad'>{weather?.location.name}</div>
        
      </div>
      <iframe
        title="mapa"
        src={`https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d127673.52261649785!2d${weather?.location.lon}!3d${weather?.location.lat}894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sgoogle%20maps!5e0!3m2!1ses-419!2sec!4v1672967183503!5m2!1ses-419!2sec`}
        width="85%"
        height="365"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        className='mapa'
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default WeatherMaininfo