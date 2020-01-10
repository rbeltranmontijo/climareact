import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Error from "./components/Error";
import Clima from "./components/Clima";

function App() {
  // State principal
  const [ciudad, guardarCiudad] = useState("");
  const [pais, guardarPais] = useState("");
  const [error, guardarError] = useState(false);
  const [resultado, guardarResultado] = useState({});

  useEffect(() => {
    // Pevenir la ejecucion
    if (ciudad === "") return;

    const consultarAPI = async () => {
      console.log("se ejecuto");
      const appId = "b3a985b7dd2fb83c388fe5e487d2e6df";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

      // Consultar la url
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      console.log(resultado);
      guardarResultado(resultado);
    };

    consultarAPI();
  }, [ciudad, pais]);

  const datosConsulta = datos => {
    // validar que ambos campos estén
    if (datos.ciudad === "" || datos.pais === "") {
      guardarError(true);
      return;
    }

    guardarCiudad(datos.ciudad);
    guardarPais(datos.pais);
    guardarError(false);
  };

  // Cargar un componente condicionalmente
  let componente;
  if (error) {
    // Hat un error mostarlo
    componente = <Error mensaje="Ambos campos deben completarse" />;
  } else {
    // mostar clima
    componente = <Clima resultado={resultado} />;
  }

  return (
    <div className="App">
      <Header titulo="Clima React App" />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <Formulario datosConsulta={datosConsulta} />
            </div>
            <div className="col s12 m6">{componente}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
