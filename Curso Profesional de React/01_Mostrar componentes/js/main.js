const Saludo = () => {
    const name = 'jonathan';
    const age = 19;
    return (
      <div>
        {age >= 18 ? (
          <p>Puedes entrar en esta página</p>
        ) : (
          <p>No puedes entrar en esta página</p>
        )}
      </div>
    );
  };
  
  const App = () => {
    return (
      <main>
        <Saludo />
      </main>
    );
  };
  
ReactDOM.render(<App />, document.getElementById('root'));
