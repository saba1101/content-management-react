import('./Auth.scss')
import { useState } from "react"
import Popup from "../../components/reusable/modal/Popup"
import { AuthData } from "./authData"
import Input from '@/components/reusable/input/Input.jsx'
import MainButton from "../../components/reusable/button/MainButton"

export const Auth = (props = {type : ''}) => {
    const { LoginForm, RegistrationForm ,Modes} = AuthData;
    const [popupVisible, setpopupVisible] = useState(true)
    const [AuthMode,setAuthMode] = useState(Modes.REGISTER)
    const [LoginElements,setLoginElements] = useState(LoginForm)
    const [ResigterElements,setResigterElements] = useState(RegistrationForm)


    const Update__Input_Values = (value,ind,array) => {
        const newInputValues = array.map((input,index) => {
            if (index === ind) {
              return { ...input, value: value };
            }
            return input;
          });
          
          if(AuthMode === Modes.LOGIN) setLoginElements(newInputValues)
          if(AuthMode === Modes.REGISTER) setResigterElements(newInputValues);
    }

    const Switch__To_Login = () => setAuthMode(Modes.LOGIN)
    const Switch__To_Register = () => setAuthMode(Modes.REGISTER)

    const ResigterFormElement = () => {
        return (
            <div className="form_wrapper">
                <form>
                    <ul>
                        {
                            ResigterElements && ResigterElements.length ? 
                            ResigterElements.map((el,ind) => {
                                    return (
                                        <li className="single_login_field" key={ind}>
                                            <Input
                                                placeholder={ el.label ?? '' }
                                                type={ el.inputType }
                                                value={ el.value }
                                                Typing={(payload) => Update__Input_Values(payload,ind,ResigterElements)}
                                            />
                                        </li>
                                    )
                                })
                            : []
                        }

                        <li>
                            <div className="switch_auth_method">
                                <span onClick={Switch__To_Login}>Log In</span>
                            </div>
                        </li>
                        <li>
                            <MainButton
                                label={'Register'}
                                type={'submit'}
                            />
                        </li>

                    </ul>
                </form>
            </div>
        )
    }

    const LoginFormElement = () => {
        return (
            <div className="form_wrapper">
                <form>
                    <ul>
                        {
                            LoginElements && LoginElements.length ? 
                                LoginElements.map((el,ind) => {
                                    return (
                                        <li className="single_login_field" key={ind}>
                                            <Input
                                                placeholder={ el.label ?? '' }
                                                type={ el.inputType }
                                                value={ el.value }
                                                Typing={(payload) => Update__Input_Values(payload,ind,LoginElements)}
                                            />
                                        </li>
                                    )
                                })
                            : []
                        }

                        <li>
                            <div className="switch_auth_method" onClick={Switch__To_Register}>
                                <span>Register</span>
                            </div>
                        </li>
                        <li>
                            <MainButton
                                label={'Log In'}
                                type={'submit'}
                            />
                        </li>

                    </ul>
                </form>
            </div>
        )
    }

    return (
        <Popup 
            visible={popupVisible}
            title={'Authorization'}
            disableClose={true}
            slot={
                AuthMode === Modes.LOGIN ?
                    LoginFormElement()
                : AuthMode === Modes.REGISTER ? 
                    ResigterFormElement()
                : null
            }
        />
    )
}