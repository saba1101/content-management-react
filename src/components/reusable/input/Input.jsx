import { useState } from 'react'

import('./Input.scss')

const Input = (
    props = {
        placeholder : "Placeholder",
        name : "",
        id: "",
        type : "",
        value : ""
    }
) => {

    const [focused,setFocused] = useState(false)

    const Typing = (event) => {
        props.Typing(event.target.value)
    }

    return (
        <div className="input_wrapper">
            <input
                className={`${focused ? 'focused' : ''}`}
                type={props.type ?? 'text'}
                name={props.name}
                id={props.id}
                placeholder={props.placeholder}
                onChange={Typing}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                value={props.value}
                spellCheck={false}
            />
            <div 
                className={
                    `undeline ${focused ? 'focused' : ''}`
                }
            >
            </div>
        </div>
    )
}

export default Input