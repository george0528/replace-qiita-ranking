type RankEntity = {
  id: number
  post_id: string
  post_url: string
  title: string
  user_image_url: string
  user_name: string
  likes_count: number
  is_new: number
  rank: number
  created_at: string
  tags?: TagsEntity[] | null
}

type TagsEntity = {
  name: string
  versions?: null[] | null
}

const Ranks = async () => {
  const apiUrl = process.env.API_URL + '/ranking?type=1'
  const ranks = await fetch(apiUrl)
  const ranksData: RankEntity[] = await ranks.json()
  return (
    <ul>
      {ranksData.map((rank) => {
        return (
          <li key={rank.id}>
            <p>title: {rank.title}</p>
          </li>
        )
      })}
    </ul>
  )
}

export default Ranks
