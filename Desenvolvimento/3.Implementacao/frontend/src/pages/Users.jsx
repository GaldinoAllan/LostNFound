import { useState, useEffect } from 'react'
import { FaPencilAlt, FaSearch, FaTrash } from 'react-icons/fa'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'

import Main from '../components/EditorMain'
import Input from '../components/FormInput'
import Button from '../components/Button'
import Spinner from '../components/Spinner'

import { getById, getByIdString } from '../utils/getById'

import {
  FormContainer,
  Row,
  RowColumn,
  ButtonsGroup,
  ButtonsContainer,
  ThreeSearchContainers,
  TableContainer,
  Table,
  Actions
} from '../styles/pages/Editor'

import api from '../server/api'

const headerProps = {
  title: 'Usuários',
  subtitle: 'Listagem e edição de todos os usuários',
};

const userInitialState = {
  id: 0,
  name: '',
  email: '',
  password: '',
  position_id: '',
}

const Users = () => {
  const [users, setUsers] = useState([])
  const [positions, setPositions] = useState([])
  const [user, setUser] = useState(userInitialState)
  const [searchInputByName, setSearchInputByName] = useState('')
  const [searchInputByEmail, setSearchInputByEmail] = useState('')
  const [searchInputByPosition, setSearchInputByPosition] = useState('')
  const [pageLoading, setPageLoading] = useState(true)


  useEffect(() => {
    api.get('administrators').then(response => {
      setUsers(response.data)
    })
    api.get('positions').then(response => {
      setPositions(response.data)
    })

    setPageLoading(false)
  }, [])

  const save = async () => {
    if (!user.id) {
      await api.post('administrators', user).then(response => {
        const list = getUpdatedList(response.data);
        setUsers(list)
        setUser(userInitialState)
      });
    } else {
      await api.put(`administrators/${user.id}`, user).then(_ => {
        const list = getUpdatedList(user, true);
        setUser(userInitialState)
        setUsers(list)
      });
    }
  }

  const edit = newUser => {
    setUser(newUser);
  }

  const remove = removeUser => {
    api.delete(`administrators/${removeUser.id}`).then(_ => {
      const list = getUpdatedList(removeUser, false);
      setUsers(list);
    });
  }

  const getUpdatedList = (user, add = true) => {
    const list = users.filter(u => u.id !== user.id);
    if (add) list.unshift(user);
    return list;
  }

  const handleTextFieldChange = event => {
    const { value, name } = event.target
    setUser({ ...user, [name]: value })
  }

  const clearTextField = () => {
    setUser(userInitialState)
  }

  const handleSearch = (event, method) => {
    if (method === 'name') {
      setSearchInputByName(event.target.value)
    } else if (method === 'email') {
      setSearchInputByEmail(event.target.value)
    } else {
      setSearchInputByPosition(event.target.value)
    }
  }

  const renderRows = () => {
    const filteredUsersByName = users.filter(user =>
      user.name.toLowerCase().includes(searchInputByName.toLowerCase())
    )

    const filteredUsersByEmail = filteredUsersByName.filter(user =>
      user.email.toLowerCase().includes(searchInputByEmail.toLowerCase())
    )

    const filteredUsersByPosition = filteredUsersByEmail.filter(user =>
      String(getByIdString(user.position_id, positions)).toLowerCase()
        .includes(searchInputByPosition.toLowerCase())
    )

    return filteredUsersByPosition.map((user) => {
      return (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{getByIdString(user.position_id, positions)}</td>
          <td>
            <Button
              background='yellow'
              onClick={() => edit(user)}
            >
              <FaPencilAlt />
            </Button>
            <Button
              background='red'
              onClick={() => remove(user)}
            >
              <FaTrash />
            </Button>
          </td>
        </tr>
      );
    });
  }

  var rows = renderRows()

  return (
    <Main {...headerProps}>
      <FormContainer action="submit">
        <Row>
          <RowColumn>
            <Input
              type="text"
              name="name"
              label="Nome"
              value={user.name}
              handleChange={e => handleTextFieldChange(e)}
              required
            />
          </RowColumn>
          <RowColumn>
            <Input
              type="email"
              name="email"
              label="Email"
              value={user.email}
              handleChange={e => handleTextFieldChange(e)}
              required
            />
          </RowColumn>
        </Row>
        <Row>
          <RowColumn>
            <InputLabel htmlFor="position_id">Cargo</InputLabel>
            <Select
              native
              style={{ width: '100%', marginBottom: 5 }}
              value={getById(user.position_id, positions)}
              onChange={e => handleTextFieldChange(e)}
              inputProps={{
                name: 'position_id',
                id: 'position_id',
              }}
            >
              <option value={user.position_id}>
                {
                  getById(user.position_id, positions)
                }
              </option>
              {positions.map(position => {
                return <option
                  key={position.id}
                  value={position.id}>
                  {position.name}
                </option>
              })}
            </Select>
          </RowColumn>
          <RowColumn>
            <Input
              type="password"
              name="password"
              label="Senha"
              value={user.password}
              handleChange={e => handleTextFieldChange(e)}
              required
            />
          </RowColumn>
        </Row>
        <ButtonsGroup>
          <ButtonsContainer>
            <Button
              background='blue'
              onClick={save}
              type='submit'
            >
              Salvar
          </Button>
            <Button
              background='grey'
              onClick={clearTextField}
            >
              Cancelar
          </Button>
          </ButtonsContainer>
        </ButtonsGroup>
      </FormContainer>
      <ThreeSearchContainers>
        <RowColumn>
          <Input
            type="text"
            name="search"
            label={(
              <div style={{ display: 'flex' }}>
                <FaSearch />
                <p style={{ marginLeft: 4 }}>Pesquisa por nome</p>
              </div>
            )}
            value={searchInputByName}
            handleChange={e => handleSearch(e, 'name')}
            required
          />
        </RowColumn>
        <RowColumn>
          <Input
            type="text"
            name="search"
            label={(
              <div style={{ display: 'flex' }}>
                <FaSearch />
                <p style={{ marginLeft: 4 }}>Pesquisa por email</p>
              </div>
            )}
            value={searchInputByEmail}
            handleChange={e => handleSearch(e, 'email')}
            required
          />
        </RowColumn>
        <RowColumn>
          <Input
            type="text"
            name="search"
            label={(
              <div style={{ display: 'flex' }}>
                <FaSearch />
                <p style={{ marginLeft: 4 }}>Pesquisa por cargo</p>
              </div>
            )}
            value={searchInputByPosition}
            handleChange={e => handleSearch(e, 'position')}
            required
          />
        </RowColumn>
      </ThreeSearchContainers>
      {
        pageLoading
          ? <Spinner />
          : <>
            <TableContainer>
              <Table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Cargo</th>
                    <Actions>Ações</Actions>
                  </tr>
                </thead>
                <tbody>{rows}</tbody>
              </Table>
            </TableContainer>
          </>
      }
    </Main>
  );
}

export default Users