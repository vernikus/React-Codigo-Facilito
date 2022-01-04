//Tenemos que importar el 'useState' pero como no se como xddd, lo termine haciendo en stackblitz https://stackblitz.com/edit/componenetes02state?file=index.tsx
//import React, { useState } from 'react';

const Button = () =>{
  //Usamos un hook, el cual no sabemos usar :v
  const [counter, setCounter] = useState(0);
  return (
  <div>
    <p>Veces presionado : {counter} </p>
    <button onClick={ ()=> setCounter(counter + 1)}>Click me!</button>
  </div>
  )
}
const App =() =>{
  return <section><Button /></section>
}

ReactDOM.render(<App />, document.getElementById('root'));
