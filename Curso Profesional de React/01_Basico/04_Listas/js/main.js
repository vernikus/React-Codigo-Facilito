const names = ['laura','lurdez','citlali','maria']

const pushNames = () =>{
  const arrayNames = [];
  for(let index=0; index < names.length; index++){
    arrayNames.push(<li>{names[index]}</li>)
  }
  return arrayNames
}

const Names = () =>{
  return <ul>
    {
      // {pushNames()} 
      names.map((name,index) => <li 
      key={index}/*Se le tinene que asignar una llave KEY a cada elemento de una lista(ARREGLOS), es una ayuda que le damos a react por si hay cambios en las lista, por si se agregan o se eliminan elementos */> 
        {name}
        </li>)//Esta es una manera más actual de como hacerlo y nos ahorramos el tener que hacer cualquier tipo de for
      
    }
    </ul>

}

const App = () =>{
  return <section><Names/></section>
}

//ReactDOM.render(<Names />, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));
