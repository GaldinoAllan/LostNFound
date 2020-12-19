import Main from '../components/EditorMain';

const headerProps = {
  title: 'Itens',
  subtitle: 'Listagem e edição de todos os itens',
};

const Items = () => {
  return (
    <Main {...headerProps}>
      <h1>Items</h1>
    </Main>
  );
}

export default Items