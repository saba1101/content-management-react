import('./UserPanel.scss')
import IconUsers from '@/assets/icons/svg/users.svg'
import IconUser from '@/assets/icons/svg/user.svg'
import IconRemove from '@/assets/icons/svg/close.svg'

import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Remove__User_From_History } from '../../../../redux/user/userStore'

const UserPanel = () => {

    const [Collapsed,setCollapsed] = useState(true)
    const CollapsableRef = useRef(null)
    const actionIconRef = useRef(null)
    const dispatch = useDispatch()
    const { UsersHistory } = useSelector(state => state.UserStore)

    const Collapse_Options = () => {
        setCollapsed(!Collapsed)
    }

    const clickHandler = (event) => {
        if(event.composedPath().includes(CollapsableRef.current) || event.composedPath().includes(actionIconRef.current)) return
        setCollapsed(false)
    }

    useEffect(() => {
        document.addEventListener('click',clickHandler)

        return () => (
            document.removeEventListener('click',clickHandler)
        )
    },[])

    const Remove_User = (ID) => {
        dispatch(Remove__User_From_History(ID))
    }

    return (
        <div className="userpanel_wrapper">
            <div className={`userpanel_icon ${Collapsed ? 'active' : ''}`} onClick={Collapse_Options} ref={actionIconRef}>
                <img src={IconUsers} alt="" />
            </div>

            {
                Collapsed ? 
                    <div className="collapsable_options" ref={CollapsableRef}>
                        <ul>
                            {
                                UsersHistory && UsersHistory.length ? 
                                    UsersHistory.map((el,ind) => {
                                        return (
                                            <li 
                                                key={ind}
                                            >
                                                <div className="common_wrapper">
                                                    <div className="user_avatar">
                                                        <img src={IconUser} alt="" />
                                                    </div>
                                                    <div className="user_name">
                                                        <span>{ el.UserName ?? '-' }</span>
                                                    </div>
                                                </div>
                                                <div className="user_action" onClick={() =>  Remove_User(el.ID)}>
                                                    <img src={IconRemove} alt="" />
                                                </div>
                                            </li>
                                        )
                                    })
                                : ''
                            }
                        </ul>
                    </div>
                : null
            }
        </div>
    )
}


export default UserPanel