import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import Home from '@/views/Home/Home.jsx'
import Header from '@/components/common/header/Header.jsx'
import Sidebar from '@/components/common/sidebar/Sidebar'
import { Auth } from './views/authorization/Auth'
import { useDispatch, useSelector } from 'react-redux'
import { Set_UsersHistory } from './redux/user/userStore'
import { useEffect } from 'react'
const App = () => {
  const dispatch = useDispatch()
  const { Authorized } = useSelector(state => state.UserStore) 
  const {SidebarCollapsed} = useSelector(state => state.ActionStore)

  useEffect(() => {
    dispatch(Set_UsersHistory())
  },[])

  return (
    <>
    {
      Authorized ? 
        <BrowserRouter>
          <Header/>
          <main
            className={
              `
               ${SidebarCollapsed ? '' : 'no_sidebar'}
              `
            }
          >
            <div 
              className={
                `sidebar_placeholder 
                  ${SidebarCollapsed ? 'collapsed' : null}
                `
              }
            >
              <Sidebar

              />
            </div>
            <div className="page_content">
              <Routes>
                <Route index element={<Home/>}/>
              </Routes>
            </div>
          </main>
        </BrowserRouter>
      : <Auth/>

    }
    </>
  )
}

export default App
