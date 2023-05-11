import IconSearch from "@/assets/icons/svg/search_faded.svg"
import { useState } from "react"
import("./Search.scss")

const Search = (props) => {
    const [Focused,setFocused] = useState(false)

    const Set__Focus_State_In= () => setFocused(true)
    const Set__Focus_State_Out = () => setFocused(false)

    const Handle_Change = (value) => {
        props.onChange(value)
    }


    return (
        <div className="search_wrapper">
            <div className="input_wrapper">
                <input 
                    type={props.type ?? 'text'}
                    placeholder={props.placeholder ?? 'Type Text Here'}
                    value={props.value}
                    onChange={(event) => Handle_Change(event.target.value)}
                    onFocus={Set__Focus_State_In}
                    onBlur={Set__Focus_State_Out}
                />
            </div>
            <div className={`search_icon_wrapper ${Focused ? 'focused' : ''} `} >
                <img src={IconSearch} alt="" />
            </div>
        </div>
    )
}

export default Search