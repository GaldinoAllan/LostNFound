import { useState, useEffect } from 'react'
import { FaPencilAlt, FaSearch, FaTrash } from 'react-icons/fa'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import { FaPlus } from 'react-icons/fa'

import Main from '../components/EditorMain'
import Input from '../components/FormInput'
import Button from '../components/Button'
import Spinner from '../components/Spinner'

import { getById, getByIdString } from '../utils/getById'

import {
  FormContainer,
  RowTwoColumnsItem,
  RowThreeColumns,
  RowColumn,
  ImageInputBlock,
  ImageLabel,
  ImagesContainer,
  NewImageLabel,
  ImageInput,
  ButtonsGroup,
  ButtonsContainer,
  ThreeSearchContainers,
  TableContainer,
  Table,
  Actions
} from '../styles/pages/Items'

import api from '../server/api'

const headerProps = {
  title: 'Itens',
  subtitle: 'Listagem e edição de todos os itens',
};

const itemInitialState = {
  id: 0,
  name: '',
  date: '',
  description: '',
  category_id: '',
  place_id: '',
  images: [],
}

const Items = () => {
  const [items, setItems] = useState([])
  const [categories, setCategories] = useState([])
  const [places, setPlaces] = useState([])
  const [searchInputByName, setSearchInputByName] = useState('')
  const [searchInputByCategory, setSearchInputByCategory] = useState('')
  const [searchInputByPlace, setSearchInputByPlace] = useState('')
  const [item, setItem] = useState(itemInitialState)
  const [pageLoading, setPageLoading] = useState(true)
  const [previewImages, setPreviewImages] = useState([])
  const [images, setImages] = useState([])

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

  const save = async () => {
    console.log("saving")

    if (!item.id) {
      const data = new FormData()
      data.append('name', item.name)
      data.append('date', item.date)
      data.append('description', item.description)
      data.append('category_id', item.category_id)
      data.append('place_id', item.place_id)

      images.forEach(image => {
        data.append('images', image)
      })

      console.log(data);

      await api.post('items', data).then(response => {
        const list = getUpdatedList(response.data)
        setItems(list)
        setItem(itemInitialState)
      })

      alert('Cadastro realizado com sucesso!')
    } else {
      await api.put(`items/${item.id}`, item).then(_ => {
        const list = getUpdatedList(item, true)
        setItem(itemInitialState)
        setItems(list)
        alert('Alteração realizada com sucesso!')
      })
    }
  }

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

  const handleTextFieldChange = event => {
    const { value, name } = event.target
    setItem({ ...item, [name]: value })
  }

  const clearTextField = () => {
    setItem(itemInitialState)
  }

  const handleSearch = (event, method) => {
    if (method === 'name') {
      setSearchInputByName(event.target.value)
    } else if (method === 'category') {
      setSearchInputByCategory(event.target.value)
    } else {
      setSearchInputByPlace(event.target.value)
    }
  }

  const handleSelectImage = (event) => {
    if (!event.target.files) {
      return;
    }
    const selectedImages = Array.from(event.target.files);

    setImages(selectedImages);
    // setItem({ ...item, images: selectedImages })

    const selectedImagesPreview = selectedImages.map(image => {
      return URL.createObjectURL(image);
    });

    setPreviewImages(selectedImagesPreview);
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
      <FormContainer action="submit">
        <Input
          type="text"
          name="name"
          label="Nome"
          value={item.name}
          handleChange={e => handleTextFieldChange(e)}
          required
        />
        <RowThreeColumns>
          <RowColumn>
            <Input
              type="date"
              name="date"
              // label="Data"
              value={item.date}
              handleChange={e => handleTextFieldChange(e)}
              required
            />
          </RowColumn>
          <RowColumn>
            <InputLabel htmlFor="category_id">Categoria</InputLabel>
            <Select
              native
              style={{ width: '100%', marginBottom: 5 }}
              value={getById(item.category_id, categories)}
              onChange={e => handleTextFieldChange(e)}
              inputProps={{
                name: 'category_id',
                id: 'category_id',
              }}
            >
              <option value={item.category_id}>
                {
                  getById(item.category_id, categories)
                }
              </option>
              {categories.map(category => {
                return <option
                  key={category.id}
                  value={category.id}>
                  {category.name}
                </option>
              })}
            </Select>
          </RowColumn>
          <RowColumn>
            <InputLabel htmlFor="category_id">Local</InputLabel>
            <Select
              native
              style={{ width: '100%', marginBottom: 5 }}
              value={getById(item.place_id, places)}
              onChange={e => handleTextFieldChange(e)}
              inputProps={{
                name: 'place_id',
                id: 'place_id',
              }}
            >
              <option value={item.place_id}>
                {
                  getById(item.place_id, places)
                }
              </option>
              {places.map(place => {
                return <option
                  key={place.id}
                  value={place.id}>
                  {place.name}
                </option>
              })}
            </Select>
          </RowColumn>
        </RowThreeColumns>
        <RowTwoColumnsItem>
          <RowColumn>
            <Input
              type="text"
              name="description"
              label="Descrição"
              value={item.description}
              handleChange={e => handleTextFieldChange(e)}
              required
            />
          </RowColumn>
          <RowColumn>
            <ImageInputBlock>
              <ImageLabel htmlFor="images">Fotos</ImageLabel>

              <ImagesContainer>
                {previewImages.map(image => {
                  return (
                    <img key={image} src={image} alt={item.name} />
                  )
                })}
                <NewImageLabel htmlFor='image[]'>
                  <FaPlus size={24} color="#563887" />
                </NewImageLabel>
              </ImagesContainer>

              <ImageInput
                multiple
                onChange={handleSelectImage}
                type="file"
                id="image[]"
              />
            </ImageInputBlock>
          </RowColumn>
        </RowTwoColumnsItem>
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
    </Main >
  );
}

export default Items