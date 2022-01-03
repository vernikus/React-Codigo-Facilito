const names = ['laura','lurdez','citlali','maria']

        //Los props no son más que los argumentos que se le pasan al componente y como acualquier argumento le puedes dar valores por defecto como la edad
const Saludar = ({name, age = 19}) =>{
  const denegado = age >=18 ?  <p>Puedes entrar en esta página</p>: 'no tienes permitido entrar en esta página'
    return <p>{`Hola ${name}`} {denegado}</p>
}
const App = () =>{        //No le damos age para que tomo el valor del prop por defecto
  return <section><Saludar name='Jonathan' /></section>
}


ReactDOM.render(<App />, document.getElementById('root'));
