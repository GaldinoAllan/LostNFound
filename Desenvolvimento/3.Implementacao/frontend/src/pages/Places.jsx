import { useState, useEffect } from 'react'
import { FaPencilAlt, FaSearch, FaTrash } from 'react-icons/fa'

import Main from '../components/EditorMain'
import Input from '../components/FormInput'
import Button from '../components/Button'

import {
  FormContainer,
  ButtonsGroup,
  ButtonsContainer,
  SearchContainer,
  TableContainer,
  Table,
  Actions
} from '../styles/pages/Places'

import api from '../server/api'

const headerProps = {
  title: 'Locais',
  subtitle: 'Listagem e edição de todos os locais',
};

const Places = () => {
  const [places, setPlaces] = useState([])
  const [place, setPlace] = useState({ name: '' })
  const [searchInput, setSearchInput] = useState('')

  useEffect(() => {
    api.get('places').then(response => {
      setPlaces(response.data)
    })
  }, [])

  const handleChange = event => {
    const { value, name } = event.target
    setPlace({ ...place, [name]: value })
  }

  const clear = () => {
    setPlace({ name: '' })
  }

  const handleSearch = event => {
    setSearchInput(event.target.value)
  }

  const getUpdatedList = (student, add = true) => {
    const list = places.filter(u => u.id !== student.id);
    if (add) list.unshift(student);
    return list;
  }

  const editPlace = place => {
    console.log('Edit Place');
  }

  const removePlace = place => {
    api.delete(`places/${place.id}`).then(response => {
      const list = getUpdatedList(place, false);
      setPlaces(list);
    });
  }

  const renderRows = () => {
    const filteredPlaces = places.filter(place =>
      place.name.toLowerCase()
        .includes(searchInput.toLowerCase())
    );

    return filteredPlaces.map(place => {
      return (
        <tr key={place.id}>
          <td>{place.id}</td>
          <td>{place.name}</td>
          <td>
            <Button
              background='yellow'
              onClick={() => editPlace(place)}
            >
              <FaPencilAlt />
            </Button>
            <Button
              background='red'
              onClick={() => removePlace(place)}
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
      <FormContainer>
        <Input
          type="text"
          name="name"
          label="Nome"
          value={place.name}
          handleChange={e => handleChange(e)}
          required
        />
        <ButtonsGroup>
          <ButtonsContainer>
            <Button
              background='blue'
            // onClick={e => this.save(e)}
            >
              Salvar
          </Button>
            <Button
              background='grey'
              onClick={clear}
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
    </Main>
  );
}

export default Places