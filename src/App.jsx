import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import Home from '@/views/Home/Home.jsx'
import Header from '@/components/common/header/Header.jsx'
import { Auth } from './views/authorization/Auth'
import { useDispatch, useSelector } from 'react-redux'
import { Set_UserName,Set_Password,Set_Email } from './redux/user/userStore'
const App = () => {
  const dispatch = useDispatch()
  const { Authorized } = useSelector(state => state.UserStore) 

  // const Check__Auth = () => {
  //   let userConfig = localStorage.getItem('userConfig') && JSON.parse(localStorage.getItem('userConfig')) ? JSON.parse(localStorage.getItem('userConfig')) : null
  //   if(userConfig?.UserName) dispatch(Set_UserName(userConfig?.UserName))
  //   if(userConfig?.Email) dispatch(Set_Email(userConfig?.Email))
  //   if(userConfig?.Password) dispatch(Set_Password(userConfig?.Password))
  // }

  // Check__Auth()

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
