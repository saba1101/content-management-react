import { useState } from "react"
import Popup from "../../components/reusable/modal/Popup"

export const Auth = (props = {type : ''}) => {
    const [popupVisible, setpopupVisible] = useState(true)

    return (
        <Popup 
            visible={popupVisible}
        />
    )
}