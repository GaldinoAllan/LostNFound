import Main from '../components/EditorMain';

const headerProps = {
  title: 'Locais',
  subtitle: 'Listagem e edição de todos os locais',
};

const Itens = () => {
  return (
    <Main {...headerProps}>
      <h1>Places</h1>
    </Main>
  );
}

export default Itens