import { useEffect, useState } from 'react'
import UserCard from './userCard'

const GithubProfileFinder = () => {
  const [userName, setUserName] = useState('MR-0-BeN')
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchGithubUserData = async () => {
    try {
      const resp = await fetch(`https://api.github.com/users/${userName}`)
      const data = await resp.json()
      console.log(data)
      if (data) {
        setUserData(data)
        setLoading(false)
        setUserName("")
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchGithubUserData()
  }, [])

  const handleSubmit = () => { fetchGithubUserData()}

  if (loading) {
    return (
      <div className="text-3xl text-center">Loading data please wait .....</div>
    )
  }
  return (
    <div>
      <div className="text-center">
        <input
          type="text"
          name="search-by-user"
          placeholder="enter github user"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
          className="px-4 py-2 ml-4 my-4 mr-1 border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500"
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none"
          onClick={handleSubmit}>
          Search
        </button>
      </div>
      <div>{userData !== null ? <UserCard user={userData} /> : null}</div>
    </div>
  )
}
export default GithubProfileFinder
