import Main from '../components/EditorMain';

const headerProps = {
  title: 'Cargos',
  subtitle: 'Listagem e edição de todos os cargos',
};

const Positions = () => {
  return (
    <Main {...headerProps}>
      <h1>Positions</h1>
    </Main>
  );
}

export default Positions