import('./Sidebar.scss')
import { Link, NavLink } from 'react-router-dom'
import {Data} from './SidebarDT.js'
import { useSelector } from 'react-redux'


const Sidebar = () => {
    const {SidebarCollapsed} = useSelector(state => state.ActionStore)
    
    return (
        <div className="sidebar_content">
            <ul> 
                {
                    Data && Data.length ?
                          Data.map((i,ind) => {
                            return (
                                <li key={ind}>
                                    <NavLink 
                                        to={i.route}
                                        className={(navData) => (navData.isActive ? "--ActiveRoute" : '')}
                                    >
                                        <div className="navigation_icon">
                                            <img src={i.imgSrc} alt="" />
                                        </div>
                                        <div className="navigation_label">
                                            <span>
                                                {i.label}
                                            </span>
                                        </div>
                                    </NavLink>
                                </li>
                            )
                          })
                    : null
                }
            </ul>
        </div>
    )
}

export default Sidebar