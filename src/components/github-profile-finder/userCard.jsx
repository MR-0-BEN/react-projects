const UserCard = ({ user }) => {
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    name,
    login,
    created_at,
  } = user

  const date = new Date(created_at)
  const [day, month, year] = [
    date.getDate(),
    date.toLocaleString('default', { month: 'short' }),
    date.getFullYear().toString().slice(-2),
  ]
  const formattedDate = `${day} ${month} ${year}`
  return (
    <div className="border border-gray-300 p-4 rounded-lg shadow-lg w-[40rem] mx-auto">
      <div className="flex items-center justify-center gap-4">
        <div>
          <img src={avatar_url} alt="" className="w-24 h-24 rounded-full" />
        </div>
        <div>
          <a
            href={`https://github.com/${login}`}
            className="text-blue-500 hover:underline">
            {name || login}
          </a>
          <p className="text-gray-500 text-sm">
            User joined on {formattedDate}
          </p>
        </div>
        <div className="flex gap-4">
          <div className="text-center">
            <p className="font-semibold">Public repos</p>
            <p>{public_repos}</p>
          </div>
          <div className="text-center">
            <p className="font-semibold">Followers</p>
            <p>{followers}</p>
          </div>
          <div className="text-center">
            <p className="font-semibold">Following</p>
            <p>{following}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default UserCard
