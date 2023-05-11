import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import Home from '@/views/Home/Home.jsx'
import Header from '@/components/common/header/Header.jsx'
import { Auth } from './views/authorization/Auth'
import { useSelector } from 'react-redux'

const App = () => {
  const { Authorized } = useSelector(state => state.UserStore) 

  return (
    <>
    {
      Authorized ? 
        <BrowserRouter>
          <Header/>
          <main>
            <Routes>
              <Route index element={<Home/>}/>
            </Routes>
          </main>
        </BrowserRouter>
      : <Auth/>

    }
    </>
  )
}

export default App
