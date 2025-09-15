import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Politicas from "./pages/Politicas";
import Terminos from "./pages/T&C";
import Talleres from "./components/mqerk/eventos/Talleres.jsx";
import Bootcamps from "./components/mqerk/Bootcamps/Bootcamp.jsx";
import Exporientas from "./components/mqerk/exporientas/Exporienta.jsx";
import Online from "./components/mqerk/online/Online.jsx";
import VeranoTX from "./components/mqerk/Bootcamps/VeranoTX.jsx";
import Ecat from "./components/mqerk/Bootcamps/Ecat.jsx";
import IaParaLaEnseñanza from "./components/mqerk/eventos/IaParaLaEnseñanza.jsx";
import IaEnLaSalud from "./components/mqerk/eventos/IaEnLaSalud.jsx";
import IaEnLaGestionEmp from "./components/mqerk/eventos/IaEnLaGestionEmp.jsx";
import Tecnomate from "./components/mqerk/eventos/Tecnomate.jsx";
import OrientacionVocacional from "./components/mqerk/eventos/OrientacionVocacional.jsx";
import OrientacionVocacionalDos from "./components/mqerk/eventos/OrientacionVocaionalDos.jsx";
import ApoyoCienciayTecno from "./components/mqerk/eventos/ApoyoCienciaTecnologia.jsx";
import TransformarLaEducacion from "./components/mqerk/eventos/TransformarLaEducacion.jsx";
import EducacionDisruptiva from "./components/mqerk/eventos/EducacionDisruptiva.jsx";
import TecnologiaArtificial from "./components/mqerk/eventos/TecnologiaArtificial.jsx";
import GuardianesDisruptivos from "./components/mqerk/online/GuardianesDisruptivos.jsx";
import Eeau23 from "./components/mqerk/online/EEAU23.jsx";
import TodasyTodos from "./components/mqerk/online/TodasyTodos.jsx";
import Foro from "./components/mqerk/online/Foro.jsx";
import IndustriaCiencia from "./components/mqerk/online/Industria_Ciencia.jsx";
import Matematicas from "./components/mqerk/online/Matematicas.jsx";
import Ciencia_en_alimentos from "./components/mqerk/online/CienciaAlimentos.jsx";
import Ingles2021 from "./components/mqerk/online/Ingles_21.jsx";
import Profesiografica from "./components/mqerk/exporientas/Profesiografica.jsx";
import ExporientaEducativa from "./components/mqerk/exporientas/ExporientaEducativa.jsx";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/acerca_de" element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path="/politicas_de_privacidad" element={<Politicas />} />  
        <Route path="/terminos_y_condiciones" element={<Terminos />} />  

        {/* Catálogo de eventos y modalidades */}
        <Route path="/talleres" element={<Talleres />} />
        <Route path="/bootcamps" element={<Bootcamps />} />
        <Route path="/exporientas" element={<Exporientas />} />
        <Route path="/online" element={<Online />} /> 
        
        {/* Subrutas de Bootcamps */}
        <Route path="/bootcamps/veranoTX" element={<VeranoTX />} />
        <Route path="/bootcamps/ecat" element={<Ecat />} />

        {/* MQERK Talleres */}
        <Route path="/talleres/ia_para_la_enseñanza" element={<IaParaLaEnseñanza />} />
        <Route path="/talleres/ia_en_la_salud" element={<IaEnLaSalud />} />
        <Route path="/talleres/ia_en_la_gestion_emp" element={<IaEnLaGestionEmp />} />
        <Route path="/talleres/tecnomate" element={<Tecnomate />} />
        <Route path="/talleres/orientacion_vocacional_y_psicoeducativa" element={<OrientacionVocacional />} />
        <Route path="/talleres/orientacion_vocacional" element={<OrientacionVocacionalDos />} />
        <Route path="/talleres/apoyo_a_la_ciencia_y_la_tecnologia" element={<ApoyoCienciayTecno />} />
        <Route path="/talleres/transformar_la_educacion" element={<TransformarLaEducacion />} />
        <Route path="/talleres/educacion_disruptiva" element={<EducacionDisruptiva />} />
        <Route path="/talleres/tecnologia_artificial" element={<TecnologiaArtificial />} />

        {/* Subrutas de Exporientas */}
        <Route path="/mqerk/exporientas/feria_profesiografica" element={<Profesiografica />} />
        <Route path="/mqerk/exporientas/exporienta_educativa" element={<ExporientaEducativa />} />

        {/* Subrutas de contenidos online */}
        <Route path="/mqerk/online/guardianes_disruptivos" element={<GuardianesDisruptivos />} />
        <Route path="/mqerk/online/eeau23" element={<Eeau23 />} />
        <Route path="/mqerk/online/todas_y_todos" element={<TodasyTodos />} />
        <Route path="/mqerk/online/foro" element={<Foro />} />
        <Route path="/mqerk/online/industria_ciencia" element={<IndustriaCiencia />} />
        <Route path="/mqerk/online/matematicas_para_un_mundo_mejor" element={<Matematicas />} />
        <Route path="/mqerk/online/ciencia_en_alimentos_fermentados" element={<Ciencia_en_alimentos />} />
        <Route path="/mqerk/online/ingles_2021" element={<Ingles2021 />} />            
      </Routes>
    </BrowserRouter>
  )
}

export default App