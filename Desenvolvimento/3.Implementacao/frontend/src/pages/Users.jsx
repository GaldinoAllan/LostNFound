import Main from '../components/EditorMain';

const headerProps = {
  title: 'Usuários',
  subtitle: 'Listagem e edição de todos os usuários',
};

const Users = () => {
  return (
    <Main {...headerProps}>
      <h1>Usuários</h1>
    </Main>
  );
}

export default Users