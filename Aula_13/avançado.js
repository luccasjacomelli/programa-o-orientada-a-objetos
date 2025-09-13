function Card(props) {
  return (
    <div style={{ border: '2px solid #222', borderRadius: '8px', padding: '15px', marginTop: '10px' }}>
      {props.children}
    </div>
  );
}


function App() {
  return (
    <>
      <Card>
        <h2>Conteúdo dentro do Card</h2>
        <p>Este conteúdo foi passado como children.</p>
      </Card>

      <Card>
        <button>Botão dentro de outro Card</button>
      </Card>
    </>
  );
}
