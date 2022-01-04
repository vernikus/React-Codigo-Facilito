//Se tiene que importa un hook / stackblizt de nuevo / https://stackblitz.com/edit/componenetes03ciclo-de-vida?file=index.tsx
//import React, {useEffect, useState} from 'react'
const Button = () =>{
  const [count, setCount] = useState(0);
  //Sintaxsis de useEffect, recibe una funcion que se ejecutara con cada render del componenete
  useEffect (()=>{
    console.log('me ejecute')
    //Si funcion regresa una segunda funcion esta se ejecutara cuando el componente sea eliminado
    return () =>{
      console.log('adios')
    }
    //Si queremos que solo se ejecute una ves al crearce se coloca un array vacio, NO SE EJECUTARA AUNQUE EL COMPOENENTE SEA ACTUALIZADO
  },[])
  return <button onClick={()=> setCount(count + 1)}>Click me {count}</button>
}

const App = () =>{
  const [showButton,setShowButton] = useState(true);
  return(
    <div>
      <button onClick={()=> setShowButton(false)}>Delete button</button>
      <div>{showButton && <Button/>}</div>
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));
