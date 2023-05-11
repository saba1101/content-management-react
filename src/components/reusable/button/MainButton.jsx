import('./MainButton.scss')

const MainButton = (props = {label: 'Button'}) => {
    return ( 
        <div className="main_button_wrapper">
            <button
                type={props.type}
            >
                {props.label}
            </button>
        </div>
     )
}

export default MainButton