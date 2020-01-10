import React, { useState } from "react";

function Formulario({ datosConsulta }) {
  // state del componente
  // busqueda = state, guardarBusqueda = this.setState()
  const [busqueda, guardarBusqueda] = useState({
    ciudad: "",
    pais: ""
  });

  const consultarClima = e => {
    e.preventDefault();
    // pasar datos al componente principal
    datosConsulta(busqueda);
  };

  const handleChange = e => {
    //cambiar el state
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={consultarClima}>
      <div className="input-field col s12">
        <input type="text" name="ciudad" id="ciudad" onChange={handleChange} />
        <label htmlFor="ciudad">Ciudad: </label>
      </div>
      <div className="input-field col s12">
        <select onChange={handleChange} name="pais">
          <option value="">Selecciona un país</option>
          <option value="US">Estados Unidos</option>
          <option value="MX">México</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="PE">Peru</option>
        </select>
        <div className="input-field col s12">
          <input
            type="submit"
            className="waves-effect waves-light btn-large btn-block yellow accent-4"
            value="Buscar Clima"
          />
        </div>
      </div>
    </form>
  );
}

export default Formulario;
