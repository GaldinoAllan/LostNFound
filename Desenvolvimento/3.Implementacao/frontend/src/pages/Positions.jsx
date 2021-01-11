import { useState, useEffect } from 'react'
import { FaPencilAlt, FaSearch, FaTrash } from 'react-icons/fa'

import Main from '../components/EditorMain'
import Input from '../components/FormInput'
import Button from '../components/Button'
import Spinner from '../components/Spinner'

import { useAuth } from '../hooks/auth'

import {
  FormContainer,
  ButtonsGroup,
  ButtonsContainer,
  SearchContainer,
  TableContainer,
  Table,
  Actions
} from '../styles/pages/Editor'

import api from '../server/api'

const headerProps = {
  title: 'Cargos',
  subtitle: 'Listagem e edição de todos os cargos',
};

const Positions = () => {
  const { token } = useAuth()

  const [positions, setPositions] = useState([])
  const [position, setPosition] = useState({ id: 0, name: '' })
  const [searchInput, setSearchInput] = useState('')
  const [pageLoading, setPageLoading] = useState(true)

  useEffect(() => {
    api.get('positions', {
      headers: {
        'authorization': `Bearer ${token}`
      }
    }).then(response => {
      setPositions(response.data)
    })

    setPageLoading(false)
  }, [token])

  const save = async () => {
    if (!position.id) {
      await api.post('positions', position, {
        headers: {
          'authorization': `Bearer ${token}`
        }
      }).then(response => {
        const list = getUpdatedList(response.data);
        setPositions(list)
        setPosition({ id: 0, name: '' })
      });
    } else {
      await api.put(`positions/${position.id}`, position, {
        headers: {
          'authorization': `Bearer ${token}`
        }
      }).then(_ => {
        const list = getUpdatedList(position, true);
        setPosition({ id: 0, name: '' })
        setPositions(list)
      });
    }
  }

  const edit = newPosition => {
    setPosition(newPosition);
  }

  const remove = removePosition => {
    api.delete(`positions/${removePosition.id}`, {
      headers: {
        'authorization': `Bearer ${token}`
      }
    }).then(_ => {
      const list = getUpdatedList(removePosition, false);
      setPositions(list);
    });
  }

  const getUpdatedList = (position, add = true) => {
    const list = positions.filter(u => u.id !== position.id);
    if (add) list.unshift(position);
    return list;
  }

  const handleTextFieldChange = event => {
    const { value, name } = event.target
    setPosition({ ...position, [name]: value })
  }

  const clearTextField = () => {
    setPosition({ id: 0, name: '' })
  }

  const handleSearch = event => {
    setSearchInput(event.target.value)
  }

  const renderRows = () => {
    const filteredPositions = positions.filter(position =>
      position.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    return filteredPositions.map(position => {
      return (
        <tr key={position.id}>
          <td>{position.id}</td>
          <td>{position.name}</td>
          <td>
            <Button
              background='yellow'
              onClick={() => edit(position)}
            >
              <FaPencilAlt />
            </Button>
            <Button
              background='red'
              onClick={() => remove(position)}
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
        <Input
          type="text"
          name="name"
          label="Nome"
          value={position.name}
          handleChange={e => handleTextFieldChange(e)}
          required
        />
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
      <SearchContainer>
        <Input
          type="text"
          name="search"
          label={(
            <div style={{ display: 'flex' }}>
              <FaSearch />
              <p style={{ marginLeft: 4 }}>Pesquisa</p>
            </div>
          )}
          value={searchInput}
          handleChange={e => handleSearch(e)}
          required
        />
      </SearchContainer>
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

export default Positions