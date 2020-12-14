import Main from '../components/EditorMain';

const headerProps = {
  title: 'Categorias',
  subtitle: 'Listagem e edição de todos os categorias',
};

const Itens = () => {
  return (
    <Main {...headerProps}>
      <h1>Categorias</h1>
    </Main>
  );
}

export default Itens