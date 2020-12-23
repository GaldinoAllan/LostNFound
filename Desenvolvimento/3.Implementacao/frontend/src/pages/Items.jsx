import { useState, useEffect } from 'react'
import { FaPencilAlt, FaSearch, FaTrash } from 'react-icons/fa'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'

import Main from '../components/EditorMain'
import Input from '../components/FormInput'
import Button from '../components/Button'
import Spinner from '../components/Spinner'

import { getByIdString } from '../utils/getById'

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
  title: 'Itens',
  subtitle: 'Listagem e edição de todos os itens',
};

// const itemInitialState = {
//   id: 0,
//   name: '',
//   email: '',
//   password: '',
//   position_id: '',
// }

const Items = () => {
  const [items, setItems] = useState([])
  const [categories, setCategories] = useState([])
  const [places, setPlaces] = useState([])
  const [searchInputByName, setSearchInputByName] = useState('')
  const [searchInputByCategory, setSearchInputByCategory] = useState('')
  const [searchInputByPlace, setSearchInputByPlace] = useState('')
  // const [item, setItem] = useState(itemInitialState)
  const [pageLoading, setPageLoading] = useState(true)

  useEffect(() => {
    api.get('items').then(response => {
      console.log(response.data);
      setItems(response.data)
    })
    api.get('places').then(response => {
      setPlaces(response.data)
    });
    api.get('categories').then(response => {
      setCategories(response.data)
    });

    setPageLoading(false)
  }, [])

  // const save = async () => {
  //   if (!item.id) {
  //     await api.post('items', item).then(response => {
  //       const list = getUpdatedList(response.data);
  //       setItems(list)
  //       setItem(itemInitialState)
  //     });
  //   } else {
  //     await api.put(`items/${item.id}`, item).then(_ => {
  //       const list = getUpdatedList(item, true);
  //       setItem(itemInitialState)
  //       setItems(list)
  //     });
  //   }
  // }

  const edit = newItem => {
    console.log(newItem);
    // setItem(newItem);
  }

  const remove = removeItem => {
    api.delete(`items/${removeItem.id}`).then(_ => {
      const list = getUpdatedList(removeItem, false);
      setItems(list);
    });
  }

  const getUpdatedList = (item, add = true) => {
    const list = items.filter(u => u.id !== item.id);
    if (add) list.unshift(item);
    return list;
  }

  // const handleTextFieldChange = event => {
  //   const { value, name } = event.target
  //   setItem({ ...item, [name]: value })
  // }

  // const clearTextField = () => {
  //   setItem(itemInitialState)
  // }

  const handleSearch = (event, method) => {
    if (method === 'name') {
      setSearchInputByName(event.target.value)
    } else if (method === 'category') {
      setSearchInputByCategory(event.target.value)
    } else {
      setSearchInputByPlace(event.target.value)
    }
  }

  const renderRows = () => {
    const filteredItemByName = items.filter(item =>
      item.name.toLowerCase().includes(searchInputByName.toLowerCase())
    )

    const filteredItemsByCategory = filteredItemByName.filter(item =>
      String(getByIdString(item.category_id, categories)).toLowerCase()
        .includes(searchInputByCategory.toLowerCase())
    )

    const filteredItemsByPlace = filteredItemsByCategory.filter(item =>
      String(getByIdString(item.place_id, places)).toLowerCase()
        .includes(searchInputByPlace.toLowerCase())
    )

    return filteredItemsByPlace.map(item => {
      return (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.date}</td>
          <td>{item.description}</td>
          <td>{getByIdString(item.category_id, categories)}</td>
          <td>{getByIdString(item.place_id, places)}</td>
          <td>
            <Button
              background='yellow'
              onClick={() => edit(item)}
            >
              <FaPencilAlt />
            </Button>
            <Button
              background='red'
              onClick={() => remove(item)}
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
      {/* <FormContainer action="submit">
        <Row>
          <RowColumn>
            <Input
              type="text"
              name="name"
              label="Nome"
              value={item.name}
              handleChange={e => handleTextFieldChange(e)}
              required
            />
          </RowColumn>
          <RowColumn>
            <Input
              type="email"
              name="email"
              label="Email"
              value={item.email}
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
              value={getById(item.position_id, positions)}
              onChange={e => handleTextFieldChange(e)}
              inputProps={{
                name: 'position_id',
                id: 'position_id',
              }}
            >
              <option value={item.position_id}>
                {
                  getById(item.position_id, positions)
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
              value={item.password}
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
      </FormContainer> */}
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
                <p style={{ marginLeft: 4 }}>Pesquisa por categoria</p>
              </div>
            )}
            value={searchInputByCategory}
            handleChange={e => handleSearch(e, 'category')}
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
                <p style={{ marginLeft: 4 }}>Pesquisa por local</p>
              </div>
            )}
            value={searchInputByPlace}
            handleChange={e => handleSearch(e, 'place')}
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
                    <th>Data</th>
                    <th>Descrição</th>
                    <th>Categoria</th>
                    <th>Local</th>
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

export default Items