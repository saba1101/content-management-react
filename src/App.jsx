import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import Home from '@/views/Home/Home.jsx'

const App = () => {
  return (
    <>
      <BrowserRouter>
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
