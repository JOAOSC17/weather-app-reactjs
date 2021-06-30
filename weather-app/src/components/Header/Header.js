import React from 'react'
import './Header.css'
export default function Header() {
    return(
        <header>
            <h1>Previsão do Tempo</h1>
            <section className="card">
            <span>x</span>
            <div className="principal">
                <h6>Niterói, RJ - Brasil</h6>
                <h4>20°C Nublado</h4 >
                <p><span><i class="fas fa-long-arrow-alt-down"></i></span>  16°<span>   <i class="fas fa-long-arrow-alt-up"></i></span>  25°</p>
                <p id="temparrow"><span>Sensação </span>19°C</p>
                
                
                <p id="vent"><span>Vento </span>18km/h</p>
                <p><span>Umidade </span>89%</p>
               
            </div>
            <div className="other-day">
                <div className="day-week">
             <p>Terça</p><span>18° 26°</span></div>
             <div className="day-week">
                <p>Quarta</p><span>18° 28°</span></div>
                <div className="day-week">
                <p>Quinta</p><span>19° 30°</span></div>
                <div className="day-week">
                <p>Sexta</p><span>23° 35°</span></div>
                <div className="day-week">
                <p>Sábado</p><span>23° 37°</span></div>
            </div>
        </section>
        <form className="search">
        <input id="search" name="search" type="text" placeholder="Insira aqui o nome da cidade"/>
        <button type="submit" ><i class="fas fa-search"></i></button>
        </form>
        </header>
    )
}