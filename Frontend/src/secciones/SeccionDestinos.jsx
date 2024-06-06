import React from 'react';

const SeccionDestinos = () => {
  const destinos = {
    "Bogotá": { nombre: "Bogotá", imagen: "https://www.colombia-travels.com/wp-content/uploads/adobestock-266299444-1.jpeg" },
    "Medellín": { nombre: "Medellín", imagen: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/TUYTDETVPNDGLIWIWILQH2TY6Q.jpg" },
    "Santa Marta": { nombre: "Santa Marta", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSXxUcN1a6wLvY5VeK3anfAQ-bYA3zbzfGBg&s" },
    "Cartagena de Indias": { nombre: "Cartagena de Indias", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOV2T_2wOJr-AWqXGJOfDkKLH9ux2Edlp_sA&s" },
    "Barranquilla": { nombre: "Barranquilla", imagen: "https://www.ul.edu.co/uleduco/cache/mod_roksprocket/caba858bd232dc141cde641e6d15b438_350_500.jpg" },
  };
    return (
      <>
      <section className='seccion-destinos'>
        <div>
          <h3>Destinos de moda</h3>
          <p>Opciones más populares entre la comunidad viajera de Colombia</p>
        </div>
        <div className='grid-destinos'>
          <div className='top'>
            {Object.keys(destinos).slice(0, 2).map((key, index) => (
              <div className="ciudad-imagen" key={index}>
                <img className='imagen-destino' src={destinos[key].imagen} alt={key} />
                <span className='titulo-destino' >{destinos[key].nombre}</span>
              </div>
            ))}
          </div>
          <div className='bottom'>
            {Object.keys(destinos).slice(2).map((key, index) => (
              <div className="ciudad-imagen" key={index}>
                <img className='imagen-destino' src={destinos[key].imagen} alt={key} />
                <span className='titulo-destino'>{destinos[key].nombre}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      </>
    );
  };
  
  export default SeccionDestinos;
  