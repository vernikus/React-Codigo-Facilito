//import React, { Component, useState } from 'react'; //https://componentes04-eventoss.stackblitz.io
const Saludo = () =>{
  const [cadena,setCadena] = useState('')
  return (
    //Los eventos son los mismos que se usan en html con la diferencia que se usa el camellcase
    // EN REACT NO SE TIENEN QUE USAR LOS .addEventListener
    <div>
      <input type="text" onChange={(ev)=> setCadena(ev.target.value)}/>
      <p>hola {cadena}</p>
    </div>
  )
}

const App = () =>{
  return <section><Saludo /></section>
}


ReactDOM.render(<App />, document.getElementById('root'));
