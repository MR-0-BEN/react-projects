import { useEffect, useState } from 'react'
import Suggestions from './suggestions'

const index = () => {
  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState([])
  const [error, setError] = useState(null)
  const [searchParam, setSearchParam] = useState('')
  const [showDropDown, setShowDropDown] = useState(false)
  const [filteredUsers, setFilteredUsers] = useState([])

  const handleChange = (e) => {
    const query = e.target.value.toLowerCase()
    setSearchParam(query)
    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : []
      setFilteredUsers(filteredData)
      setShowDropDown(true)
    } else {
      setShowDropDown(false)
    }
  }
  const handleClick = (e) => {
    setSearchParam(e.target.innerText)
  }
  const fetchUsers = async () => {
    try {
      const resp = await fetch('https://dummyjson.com/users')
      const data = await resp.json()
      if (data && data.users && data.users.length) {
        setUsers(data.users.map((user) => user.firstName))
        setLoading(false)
      }
    } catch (error) {
      setLoading(false)
      console.log(error)
      setError(error)
    }
  }
  useEffect(() => {
    fetchUsers()
  }, [])

  console.log(users, filteredUsers)

if(loading) {
    return <h1 className='text-4xl text-center mt-8'>loading please wait ....</h1>
}

  return (
    <div className="relative">
      <input
        type="text"
        value={searchParam}
        name="search-users"
        placeholder="Enter user ..."
        onChange={handleChange}
        className="block mx-auto mt-5 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
      />
      {showDropDown && (
        <Suggestions handleClick={handleClick} data={filteredUsers} />
      )}
    </div>
  )
}
export default index
