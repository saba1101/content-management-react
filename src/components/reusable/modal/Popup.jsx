import IconClose from '@/assets/icons/svg/close.svg'
import('./Popup.scss')

const Popup = (props = {visible: false,slot:null, title: ''}) => {

    const ContentSlot = () => {
        return <div className="popup_content_body"> {props.slot} </div>
    }

    return (
        <div className="modal_overlay">
            {
                props.visible ?
                    <div className="popup">
                        <div className="close_action">
                            <img src={IconClose} alt="" />
                        </div>
                        <div className="popup_content">
                            {
                                props.title ?
                                    <div className="popup_content_title">
                                        <h2> {props.title} </h2>
                                    </div>
                                : null
                            }

                            { props.slot ? ContentSlot() : null}
                        </div>
                    </div>
                : ''
            }
        </div>
    )
}

export default Popup