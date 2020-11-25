import { FaSearch } from 'react-icons/fa';

import {
  SearchBox,
  SearchText,
  SearchBtn,
} from '../styles/components/SearchInput'

const SearchInput = ({ handleSearch, placeholder }) => {
  return (
    <SearchBox>
      <SearchText
        type='search'
        name="search"
        placeholder={placeholder}
        onChange={handleSearch}
      />
      <SearchBtn>
        <FaSearch />
      </SearchBtn>
    </SearchBox>
  )
}

export default SearchInput