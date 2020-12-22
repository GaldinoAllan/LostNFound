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
} from '../styles/pages/Editor'

import api from '../server/api'

const headerProps = {
  title: 'Categorias',
  subtitle: 'Listagem e edição de todos os categorias',
};

const Categories = () => {
  const [categories, setCategories] = useState([])
  const [category, setCategory] = useState({ id: 0, name: '' })
  const [searchInput, setSearchInput] = useState('')

  useEffect(() => {
    api.get('categories').then(response => {
      setCategories(response.data)
    })
  }, [])

  const save = async () => {
    if (!category.id) {
      await api.post('categories', category).then(response => {
        const list = getUpdatedList(response.data);
        setCategories(list)
        setCategory({ id: 0, name: '' })
      });
    } else {
      await api.put(`categories/${category.id}`, category).then(_ => {
        const list = getUpdatedList(category, true);
        setCategory({ id: 0, name: '' })
        setCategories(list)
      });
    }
  }

  const edit = newCategory => {
    setCategory(newCategory);
  }

  const remove = removeCategory => {
    api.delete(`categories/${removeCategory.id}`).then(_ => {
      const list = getUpdatedList(removeCategory, false);
      setCategories(list);
    });
  }

  const getUpdatedList = (category, add = true) => {
    const list = categories.filter(u => u.id !== category.id);
    if (add) list.unshift(category);
    return list;
  }

  const handleTextFieldChange = event => {
    const { value, name } = event.target
    setCategory({ ...category, [name]: value })
  }

  const clearTextField = () => {
    setCategory({ id: 0, name: '' })
  }

  const handleSearch = event => {
    setSearchInput(event.target.value)
  }

  const renderRows = () => {
    const filteredCategories = categories.filter(category =>
      category.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    return filteredCategories.map(category => {
      return (
        <tr key={category.id}>
          <td>{category.id}</td>
          <td>{category.name}</td>
          <td>
            <Button
              background='yellow'
              onClick={() => edit(category)}
            >
              <FaPencilAlt />
            </Button>
            <Button
              background='red'
              onClick={() => remove(category)}
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
          value={category.name}
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

export default Categories