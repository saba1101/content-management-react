import('./Header.scss')
import { useState } from "react"
import { Link } from "react-router-dom"
import IconSidebar from "@/assets/icons/svg/grid.svg"
import Header_Data from "@/components/common/header/headerDB.js"
import Search from '@/components/reusable/search/Search.jsx'
import UserPanel from "../users/userPanel/UserPanel"

const Header = (props) => {
    const { Navigation } = Header_Data
    const [searchValue,setSearchValue] = useState("")

    return (
        <header>
            <div className="left_side">
                <div className="sidebar_icon_wrapper">
                    <div className="sidebar_icon">
                        <img src={IconSidebar} alt="" />
                    </div>
                    <div className="main_label">
                        <h2>
                            Constructor
                        </h2>
                    </div>
                </div>
            </div>
            <div className="middle_side">
                <ul>
                    {
                        Navigation && Navigation.length ? 
                            Navigation.map((n,ind) => {
                                return (
                                    <li key={ind}>
                                        <Link to={n.route}> 
                                            {n.title}
                                        </Link> 
                                    </li>
                                ) 
                            })
                        : []
                    }
                </ul>
            </div>
            <div className="right_side">
                <div className="search_panel">
                    <Search
                        placeholder="Try searching «New Pages Today»"
                        onChange={(value) => setSearchValue(value)}
                        value={searchValue}
                    />
                </div>
                <ul>
                    <li>
                        <UserPanel
                            
                        />
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header