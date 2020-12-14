import Main from '../components/EditorMain';

const headerProps = {
  title: 'Itens',
  subtitle: 'Listagem e edição de todos os itens',
};

const Itens = () => {
  return (
    <Main {...headerProps}>
      <h1>Itens</h1>
    </Main>
  );
}

export default Itens