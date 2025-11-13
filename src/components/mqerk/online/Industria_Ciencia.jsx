import React, { useState, useEffect } from 'react'
import Navbar from '../../../components/mqerk/Navbar'
import Primero from "../../../assets/mqerk/veranotx/01.png";
import Segundo from "../../../assets/mqerk/veranotx/02.png";
import Tercero from "../../../assets/mqerk/veranotx/03.png";
import Cuarto from "../../../assets/mqerk/veranotx/04.png";
import Quinto from "../../../assets/mqerk/veranotx/05.png";
import Sexto from "../../../assets/mqerk/veranotx/06.png";
import Septimo from "../../../assets/mqerk/veranotx/07.png";
import ReactPlayer from 'react-player/youtube';
import { Link } from 'react-router-dom';
import Footer from "../../footer";

function Online() {
  return (
    <div className='min-h-screen flex flex-col bg-gradient-to-b from-purple-50 to-white'>
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-600 via-indigo-700 to-purple-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link 
            to="/online" 
            className="inline-flex items-center gap-2 text-purple-100 hover:text-white transition-colors mb-6 group"
          >
            <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver a online
          </Link>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold animate-fade-in">
            ¿Cómo Brinqué de la Industria a la Ciencia?
          </h1>
        </div>
      </div>

      {/* Video Player */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-center items-center animate-fade-in">
          <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <ReactPlayer
              url="https://youtu.be/jF5fxgEgtuM?si=Ju9_O3e5H55OX2O-"
              playing
              muted
              width="100%"
              height="100%"
              controls
            />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left Column - Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Resumen */}
            <section className="bg-white rounded-2xl shadow-md p-6 sm:p-8 animate-slide-up">
              <h2 className="text-2xl sm:text-3xl font-bold text-purple-800 mb-4 flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-purple-600 to-indigo-600 rounded-full"></div>
                Resumen
              </h2>
              <p className="text-gray-700 leading-relaxed text-justify">
                El <span className="font-semibold">Dr. Edgar Krötzsch</span> ofreció una charla virtual dirigida a 
                egresados y profesionales, en la que compartió su experiencia personal y profesional al transitar del 
                sector industrial al mundo de la ciencia y la investigación. Durante la sesión, relató los desafíos 
                enfrentados, los aprendizajes obtenidos y las motivaciones que impulsaron su cambio de rumbo. Asimismo, 
                destacó las habilidades transferibles que facilitaron su adaptación al entorno científico y académico.
              </p>
            </section>

            {/* Objetivos */}
            <section className="bg-white rounded-2xl shadow-md p-6 sm:p-8 animate-slide-up" style={{ animationDelay: '100ms' }}>
              <h2 className="text-2xl sm:text-3xl font-bold text-purple-800 mb-6 flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-purple-600 to-indigo-600 rounded-full"></div>
                Objetivos
              </h2>
              <ul className="space-y-4">
                <ObjectiveItem 
                  text="Resaltar la importancia de las habilidades adquiridas en la industria como valiosas para el ámbito científico." 
                  delay="0"
                />
                <ObjectiveItem 
                  text="Demostrar que la ciencia también puede ser un camino profesional viable y apasionante para quienes vienen de otros sectores." 
                  delay="100"
                />
              </ul>
            </section>

            {/* Special Note - Transición de Carrera */}
            <section className="bg-gradient-to-r from-cyan-100 to-blue-100 rounded-2xl shadow-md p-6 sm:p-8 animate-slide-up border-l-4 border-cyan-600" style={{ animationDelay: '200ms' }}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-8 h-8 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-cyan-900 mb-2">Transición de Carrera 🔄</h3>
                  <p className="text-cyan-800 leading-relaxed mb-3">
                    Una charla inspiradora sobre cómo el <span className="font-bold">Dr. Edgar Krötzsch</span> hizo la 
                    transición exitosa desde el sector industrial hacia la investigación científica. Un testimonio valioso 
                    para profesionales que buscan reinventarse y explorar nuevos horizontes en su carrera.
                  </p>
                  <div className="bg-white/50 rounded-lg p-3 mt-3">
                    <p className="text-sm text-cyan-900 font-semibold">
                      💼 De la industria a la academia: Un camino inspirador
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column - Info Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 sticky top-24 animate-slide-up" style={{ animationDelay: '300ms' }}>
              {/* Bordes decorativos */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-pink-500 rounded-tl-2xl"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-pink-500 rounded-br-2xl"></div>

              <div className="space-y-6 pt-6">
                <InfoItem icon={Primero} text="28 de marzo del 2021" />
                <InfoItem icon={Segundo} text="Dirigido a: estudiantes" />
                <InfoItem icon={Tercero} text="San Juan Bautista Tuxtepec, Oaxaca." />
                <InfoItem icon={Cuarto} text="Instalaciones: MQerKAcademy (Virtual)" special />
                <InfoItem icon={Quinto} text="30 asistentes" />
                <InfoItem icon={Sexto} text="2 horas" />
                <InfoItem icon={Septimo} text="No aplica" />
              </div>
            </div>
          </div>
        </div>

        {/* No Related Events */}
      </main>

      <Footer />
    </div>
  )
}

// Componente de ítem de objetivo con animación
function ObjectiveItem({ text, delay = "0" }) {
  return (
    <li 
      className="flex items-start gap-3 group animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex-shrink-0 mt-1.5">
        <div className="w-2 h-2 rounded-full bg-purple-600 group-hover:scale-125 transition-transform duration-300"></div>
      </div>
      <span className="text-gray-700 leading-relaxed">{text}</span>
    </li>
  );
}

// Componente de información con icono
function InfoItem({ icon, text, special = false }) {
  return (
    <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform duration-300">
      <div className="flex-shrink-0">
        <img src={icon} alt="" className="w-7 h-7 object-contain" />
      </div>
      <p className={`leading-relaxed text-sm ${special ? 'text-purple-600 font-semibold' : 'text-gray-700'}`}>
        {text}
      </p>
    </div>
  );
}

export default Online;