import Counter from "./counter"
import Link from 'next/link';

const About = () => {
  return (
    <div>
      <h1>Aboutページ</h1>
      <Counter />
      <br />
      <Link href='/about/detail'>詳細</Link>
    </div>
  )
}

export default About
