import { Input } from 'antd'

import 'antd/dist/antd.css'

const SearchInput = ({ handleChange, placeholder }) => {
  const { Search } = Input;

  return (
    <Search
      placeholder={placeholder}
      onSearch={handleChange}
      enterButton
      allowClear
    />
  )
}

export default SearchInput