import useSWR from 'swr'
import {useRouter} from 'next/router'
import fetcher from "../utils/fetcher";

const Home = () => {
  const router = useRouter()
  const {data, error} = useSWR('/api/random', fetcher)

  function Reset() {
    return router.reload
  }

  if (error) {
    return (
      <div>
        에러
      </div>
    )
  }
  if (!data) {
    return (
      <div>
        로딩
      </div>
    )
  } else {
    return (
      <div>
        <title>로또번호추첨</title>
        <h1 className="lotto">금주 로또 당첨 예상 번호</h1>
        <div className="circleContainer">

          <div
            className={data.Random1 <= 10 ? "radious-yellow" : data.Random1 <= 20 ? "radious-blue" : data.Random1 <= 30 ? "radious-red" : data.Random1 <= 40 ? "radious-black" : data.Random1 <= 45 ? "radious-green" : "radious-gray"}>
            {data.Random1}
          </div>

          <div
            className={data.Random2 <= 10 ? "radious-yellow" : data.Random2 <= 20 ? "radious-blue" : data.Random2 <= 30 ? "radious-red" : data.Random2 <= 40 ? "radious-black" : data.Random2 <= 45 ? "radious-green" : "radious-gray"}>
            {data.Random2}
          </div>

          <div
            className={data.Random3 <= 10 ? "radious-yellow" : data.Random3 <= 20 ? "radious-blue" : data.Random3 <= 30 ? "radious-red" : data.Random3 <= 40 ? "radious-black" : data.Random3 <= 45 ? "radious-green" : "radious-gray"}>
            {data.Random3}
          </div>

          <div
            className={data.Random4 <= 10 ? "radious-yellow" : data.Random4 <= 20 ? "radious-blue" : data.Random4 <= 30 ? "radious-red" : data.Random4 <= 40 ? "radious-black" : data.Random4 <= 45 ? "radious-green" : "radious-gray"}>
            {data.Random4}
          </div>

          <div
            className={data.Random5 <= 10 ? "radious-yellow" : data.Random5 <= 20 ? "radious-blue" : data.Random5 <= 30 ? "radious-red" : data.Random5 <= 40 ? "radious-black" : data.Random5 <= 45 ? "radious-green" : "radious-gray"}>
            {data.Random5}
          </div>

          <div
            className={data.Random6 <= 10 ? "radious-yellow" : data.Random6 <= 20 ? "radious-blue" : data.Random6 <= 30 ? "radious-red" : data.Random6 <= 40 ? "radious-black" : data.Random6 <= 45 ? "radious-green" : "radious-gray"}>
            {data.Random6}
          </div>

        </div>

        <div className="radious-plus">+</div>
        <div
          className={data.Random7 <= 10 ? "radious-yellow" : data.Random7 <= 20 ? "radious-blue" : data.Random7 <= 30 ? "radious-red" : data.Random7 <= 40 ? "radious-black" : data.Random7 <= 45 ? "radious-green" : "radious-gray"}>
          {data.Random7}
        </div>

        <button className="resetbtn" onClick={Reset()}>리셋</button>
        <br/>
        <button className="resetbtn" onClick={Reset()}>번호 리스트</button>
      </div>
    )
  }
}

export default Home