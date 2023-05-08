const UserList = async () => {
  const users = await fetch('https://jsonplaceholder.typicode.com/users')
  const usersData = await users.json()
  return (
    <ul className="flex flex-col items-center justify-center py-2">
      {usersData.map((user: any) => {
        return <li key={user.id}>{user.name}</li>
      })}
    </ul>
  )
}

export default UserList
