import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import Home from '@/views/Home/Home.jsx'
import Header from '@/components/common/header/Header.jsx'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <main>
          <Routes>
            <Route index element={<Home/>}/>
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
