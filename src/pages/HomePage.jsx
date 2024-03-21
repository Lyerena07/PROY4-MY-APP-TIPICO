import "../css/home-page-styles.css"
import React from "react";
import { NavLink } from "react-router-dom"
import img from "../assets/Imagenes/Tipico.png"

const imgInicial= "/sombrero.jpg";
const HomePage = () => {

  
  return (
    <>
    <div className="row text-center">
    <div className="col-12 col-lg-6 p-1">
    <img className="imgInicial" src={img} alt="LogoEmpresa"/>
    </div>

    <div className="col-12 col-lg-6  p-1 contenedorTitulo">
      <h1 className="Tituloh1"> ¡Al Paladar Costeño!</h1>
      <h3 className= "Titutloh2">Llevamos la mejor conbinacion costeña a tu mesa.</h3>
        <h4 className= "Tituloh3">Nuesta meta, es satisfacer tu paladar,
          !probando los sabores tradicionales de la costa¡ 
          Atrevete y deleitate con nuestros sabores explosivos.</h4> 

          <div className="row text-center">
            <div className="col-12  p-1 contenedorTitulo2">
                <h2 className="Tituloh4">Nuestra Ubicacion</h2>
            </div>
            <div className="row" >
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.478969665909!2d-75.8944989262505!3d8.740922693434415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e5a3003997d8bcf%3A0x63547c0169d3a58f!2zRGcuIDE5ICM2LTQsIE1vbnRlcsOtYSwgQ8OzcmRvYmEsIENvbG9tYmlh!5e0!3m2!1ses!2smx!4v1708989206667!5m2!1ses!2smx" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
  </div>
  </div>
    </div>
     <div>  

  <hr />
  
  <div className="row">
  </div>
  <div className="col">
  <h2 className="ofrecemos col-12 ">NUESTRA HISTORIA:</h2> 
    <h4 className="descripcionh4 col-12 col-lg-6 aling-items-center justyfy-context-center">Monteria Cordoba, esta hecha de recuerdos, Mi abuela lo primero que me enseño fue el amor por la cocina,
    por eso amo tanto los sabores autoctonos de cada plato que he conocido y probado, por mi paladar sola hay, 
    recuerdos de los sabores mas representativos en mi infancia, como los dulces tipicos de nustras regiones. 
    hoy en Tipico, le hacemos un homenaje a todas esas familias que consigen sus sustentos diarios,
     a travez de la tradicion que nos dejaron nuestros ancestros.   </h4>
  </div>

  <div className="row-col">
    <div id="carouselExampleFade" className="carousel slide carousel-fade">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr3vWroSoKlo_FdxHX2p04CYp0D-1Xv8kFhw&usqp=CAU" className="d-block w-100" alt="Tipico1" />
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
        <span className="visually-hidden">Siguiente</span>
      </button>
    </div>
  </div>
  <hr />
</div>

    
    </>
  )
};

export default HomePage;