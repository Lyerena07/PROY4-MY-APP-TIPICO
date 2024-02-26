import "../css/home-page-styles.css"
import React from "react";
import { NavLink } from "react-router-dom"
import img from "../assets/Imagenes/Tipico.png"

const imgInicial= "/sombrero.jpg";
const HomePage = () => {

  
  return (
    <>
    <header className="row-col">
      
      <h1 className="Tituloh1"> ¡Al Paladar Costeño!</h1>
    </header>
    <img className="imgInicial" src={img} alt="LogoEmpresa"/>
    <main className="row">
      <article className="col">
        
     <h4 className="Textoh4 col-12 col-lg-6">
          Llevamos la mejor conbinacion costeña a tu mesa.</h4>
        <h4 className="Textoh4 col-12 col-lg-6">
          Nuesta meta, es satisfacer tu paladar,
          !probando los sabores tradicionales de la costa¡ 
          Atrevete y deleitate con nuestros sabores explosivos.</h4> 
          </article>
    </main>

<div>
  <hr />
  
  <div className="row">
  </div>
  <div className="col">
  <h2 className="ofrecemos col-12">TE OFRECEMOS:</h2> 
    <h4 className="descripcionh4 col-12 col-lg-6">Monteria Cordoba, esta hecha de recuerdos, Mi abuela lo primero que me enseño fue el amor por la cocina,
    por eso amo tanto los sabores autoctonos de cada plato que he conocido y probado, por mi paladar sola hay, 
    recuerdos de los sabores mas representativos en mi infancia, como los dulces tipicos de nustras regiones. 
    hoy en Tipico, le hacemos un homenaje a todas esas familias que consigen sus sustentos diarios,
     a travez de la tradicion que nos dejaron nuestros ancestros.   </h4>
  </div>

  <div className="row-col">
    <div id="carouselExampleFade" className="carousel slide carousel-fade">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVUJUhQ4WUJ5G3DL_Wo7s2u_H27ZsDcbiZWg&usqp=CAU" className="d-block w-100" alt="Tipico1" />
        </div>
        <div className="carousel-item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHl0O1mO1OhnrLTqJHYQ9fkTFISGZ2heCUbQ&usqp=CAU" className="d-block w-100" alt="Tipoco2" />
        </div>
        <div className="carousel-item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDIPozLeLJIlfc36FZNb_3UQ-sESTrEI4QAQ&usqp=CAU" className="d-block w-100" alt="Tipico3" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Anterior</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span clasName="visually-hidden">Siguiente</span>
      </button>
    </div>
  </div>
  <hr />
</div>

    
    </>
  )
};

export default HomePage;