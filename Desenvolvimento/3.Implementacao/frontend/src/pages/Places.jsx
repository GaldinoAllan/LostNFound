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
  title: 'Locais',
  subtitle: 'Listagem e edição de todos os locais',
};

const Places = () => {
  const { token } = useAuth()

  const [places, setPlaces] = useState([])
  const [place, setPlace] = useState({ id: 0, name: '' })
  const [searchInput, setSearchInput] = useState('')
  const [pageLoading, setPageLoading] = useState(true)

  useEffect(() => {
    api.get('places', {
      headers: {
        'authorization': `Bearer ${token}`
      }
    }).then(response => {
      setPlaces(response.data)
    })

    setPageLoading(false)
  }, [token])

  const save = async () => {
    if (!place.id) {
      await api.post('places', place, {
        headers: {
          'authorization': `Bearer ${token}`
        }
      }).then(response => {
        const list = getUpdatedList(response.data);
        setPlaces(list)
        setPlace({ id: 0, name: '' })
      });
    } else {
      await api.put(`places/${place.id}`, place, {
        headers: {
          'authorization': `Bearer ${token}`
        }
      }).then(_ => {
        const list = getUpdatedList(place, true);
        setPlace({ id: 0, name: '' })
        setPlaces(list)
      });
    }
  }

  const edit = newPlace => {
    setPlace(newPlace);
  }

  const remove = removePlace => {
    api.delete(`places/${removePlace.id}`, {
      headers: {
        'authorization': `Bearer ${token}`
      }
    }).then(_ => {
      const list = getUpdatedList(removePlace, false);
      setPlaces(list);
    });
  }

  const getUpdatedList = (place, add = true) => {
    const list = places.filter(u => u.id !== place.id);
    if (add) list.unshift(place);
    return list;
  }

  const handleTextFieldChange = event => {
    const { value, name } = event.target
    setPlace({ ...place, [name]: value })
  }

  const clearTextField = () => {
    setPlace({ id: 0, name: '' })
  }

  const handleSearch = event => {
    setSearchInput(event.target.value)
  }

  const renderRows = () => {
    const filteredPlaces = places.filter(place =>
      place.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    return filteredPlaces.map(place => {
      return (
        <tr key={place.id}>
          <td>{place.id}</td>
          <td>{place.name}</td>
          <td>
            <Button
              background='yellow'
              onClick={() => edit(place)}
            >
              <FaPencilAlt />
            </Button>
            <Button
              background='red'
              onClick={() => remove(place)}
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
          value={place.name}
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

export default Places