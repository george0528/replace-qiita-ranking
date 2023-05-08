const Detail = async () => {
  const users = await fetch('https://jsonplaceholder.typicode.com/users')
  const usersData = await users.json()
  return (
    <>
      <h1>detailページ</h1>
      {usersData.map((user: any) => {
        return <p key={user.id}>{user.name}</p>
      })}
    </>
  )
}

export default Detail
