import { useState, useEffect } from 'react'
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
  ButtonContent,
  ButtonContainer
} from '../styles/pages/Landing'
import Button from '../components/Button'

const Landing = () => {
  const pageLimit = 8

  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [items, setItems] = useState([])
  const [categories, setCategories] = useState([])
  const [places, setPlaces] = useState([])
  const [currentData, setCurrentData] = useState([])
  const [pageLoading, setPageLoading] = useState(true)
  // const [search, setSearch] = useState('')

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

  useEffect(() => {
    setCurrentData(items.slice(offset, offset + pageLimit));
  }, [offset, items]);

  const handleOpenModal = () => {
    setModalIsOpen(!modalIsOpen)
  }

  const handleAddItem = () => {
    console.log('Add Item function called');
  }

  const handleSearch = e => {
    console.log(`${e.target.value}`);
    // setSearch(value)
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
      <ButtonContainer>
        <ButtonContent>
          <Button
            background='green'
            icon={<FaPlus />}
            onClick={handleAddItem}
          >
            Adicionar Item
          </Button>
        </ButtonContent>
      </ButtonContainer>
    </LandingContainer>
  )
}

export default Landing