import {useState} from 'react'
import Container from './components/Container'
import Navbar from './components/Navbar'
import MainWeather from './components/MainWeather'
import Upcomming from './components/Upcomming'
import useGetWeather from './hooks/useGetWeather'

const App = () => {

  const { loading, error } = useGetWeather()
  const [isCity, setIsCity] = useState(false)

  const cityWeather = useSelector(state => state.cityData.cityData);

  useEffect(() => {
    if (cityWeather) setIsCity(true)
  }, [cityWeather])

  return (
    loading ? <h1>Loading</h1> : <div className='  py-4 w-full h-auto md:h-screen  dark:bg-slate-800 bg-neutral-50 font-mono px-2 md:px-24  '>
      <Navbar />
      {!isCity ? <h2 className=' text-3xl text-gray-600'>
        {error}
      </h2> :
        <Container>
          <MainWeather />
          <Upcomming />
        </Container>
      }
    </div>
  )
}

export default App
