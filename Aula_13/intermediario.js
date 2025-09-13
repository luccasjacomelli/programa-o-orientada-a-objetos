function ProfileCard(props) {
  return (
    <div style={{ border: '1px solid gray', padding: '10px', marginBottom: '10px' }}>
      <img src={props.foto} alt="Foto de perfil" width="100" />
      <h3>{props.nome}</h3>
      <p>{props.descricao}</p>
    </div>
  );
}

function App() {
  return (
    <>
      <ProfileCard 
        nome="Ana Paula" 
        descricao="Desenvolvedora Front-end apaixonada por React." 
        foto="https://via.placeholder.com/100"
      />
      <ProfileCard 
        nome="Carlos Silva" 
        descricao="Designer UX/UI com foco em acessibilidade." 
        foto="https://via.placeholder.com/100"
      />
    </>
  );
}
