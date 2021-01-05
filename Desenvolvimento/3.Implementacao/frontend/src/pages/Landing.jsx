import { useState, useEffect } from 'react'
// import { useHistory } from 'react-router-dom'
import { FaRegQuestionCircle, FaPlus } from 'react-icons/fa'
import Paginator from 'react-hooks-paginator'

import InfoModal from '../components/InfoModal'
import FoundObject from '../components/FoundObject'
import Spinner from '../components/Spinner'
import SearchInput from '../components/SearchInput'

import { getById } from '../utils/getById';

import api from '../server/api'

import {
  LandingContainer,
  InputContainer,
  Title,
  Info,
  LandingHeader,
  Content,
  // ButtonContent,
  // ButtonContainer
} from '../styles/pages/Landing'

// import Button from '../components/Button'

const Landing = () => {
  // const history = useHistory();

  const pageLimit = 8

  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [items, setItems] = useState([])
  const [categories, setCategories] = useState([])
  const [places, setPlaces] = useState([])
  const [currentData, setCurrentData] = useState([])
  const [pageLoading, setPageLoading] = useState(true)
  const [searchString, setSearchString] = useState('')

  useEffect(() => {
    api.get('items').then(response => {
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

  useEffect(() => {
    const filteredItems = items.filter(item =>
      item.name.toLowerCase().includes(searchString.toLowerCase())
    )

    setCurrentData(filteredItems.slice(offset, offset + pageLimit));
  }, [offset, items, searchString]);

  const handleOpenModal = () => {
    setModalIsOpen(!modalIsOpen)
  }

  // const handleAddItem = () => {
  //   history.push('/editor')
  // }

  const handleSearch = e => {
    setSearchString(e.target.value)
  };

  return (
    <LandingContainer>
      <LandingHeader>
        <InputContainer>
          <Title>Objetos encontrados</Title>
          <SearchInput
            handleSearch={handleSearch}
            placeholder="Digite o objeto desejado"
          />
        </InputContainer>
        <Info onClick={handleOpenModal}>
          <FaRegQuestionCircle />
        </Info>
      </LandingHeader>
      {modalIsOpen && (
        <InfoModal isOpen={modalIsOpen} setIsOpen={handleOpenModal} />
      )}
      {
        pageLoading
          ? <Spinner />
          : <>
            <Content>
              {currentData.map(({
                id,
                images,
                name,
                place_id,
                category_id,
                date,
                description
              }) => (
                <FoundObject
                  key={id}
                  id={id}
                  image={images[0].url}
                  item={name}
                  place={getById(place_id, places)}
                  category={getById(category_id, categories)}
                  date={date}
                  description={description}
                />
              ))}
            </Content>
            <Paginator
              totalRecords={items.length}
              pageLimit={pageLimit}
              pageNeighbours={1}
              setOffset={setOffset}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </>
      }
      {/* <ButtonContainer>
        <ButtonContent>
          <Button
            background='green'
            icon={<FaPlus />}
            onClick={handleAddItem}
          >
            Adicionar Item
          </Button>
        </ButtonContent>
      </ButtonContainer> */}
    </LandingContainer>
  )
}

export default Landing