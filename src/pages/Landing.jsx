import { useState, useEffect } from 'react'
import { FaRegQuestionCircle } from 'react-icons/fa'
import Paginator from 'react-hooks-paginator'

import InfoModal from '../components/InfoModal'
import FoundObject from '../components/FoundObject'

import getById from '../utils/getById';

import api from '../server/api'

import {
  LandingContainer,
  Title,
  Info,
  LandingHeader,
  Content
} from '../styles/pages/Landing'

const Landing = () => {
  const pageLimit = 8

  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [items, setItems] = useState([])
  const [categories, setCategories] = useState([])
  const [locais, setLocais] = useState([])
  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    api.get('items').then(response => {
      setItems(response.data)
    })
    api.get('locais').then(response => {
      setLocais(response.data)
    });
    api.get('categories').then(response => {
      setCategories(response.data)
    });
  }, [])

  useEffect(() => {
    setCurrentData(items.slice(offset, offset + pageLimit));
  }, [offset, items]);

  const handleOpenModal = () => {
    setModalIsOpen(!modalIsOpen)
  }

  return (
    <LandingContainer>
      <LandingHeader>
        <Title>Objetos encontrados</Title>
        <Info onClick={handleOpenModal}>
          <FaRegQuestionCircle />
        </Info>
      </LandingHeader>
      {modalIsOpen && (
        <InfoModal isOpen={modalIsOpen} setIsOpen={handleOpenModal} />
      )}
      <Content>
        {currentData.map(item => (
          <FoundObject
            key={item.id}
            image={item.image}
            item={item.name}
            place={getById(item.idLocal, locais)}
            category={getById(item.idCategory, categories)}
            date={item.date}
            description={item.description}
          />
        ))}
      </Content>
      <Paginator
        totalRecords={items.length}
        pageLimit={8}
        pageNeighbours={1}
        setOffset={setOffset}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </LandingContainer>
  )
}

export default Landing