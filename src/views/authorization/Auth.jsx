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

    const Update__Input_Values = (value,ind) => {
        const newInputValues = LoginElements.map((input,index) => {
            if (index === ind) {
              return { ...input, value: value };
            }
            return input;
          });
          setLoginElements(newInputValues);
    }

    const Switch__To_Login = () => setAuthMode(Modes.LOGIN)
    const Switch__To_Register = () => setAuthMode(Modes.REGISTER)

    const ResigterFormElement = () => {
        return (
            <div className="form_wrapper">
                <form>
                    <ul>
                        {
                            RegistrationForm && RegistrationForm.length ? 
                            RegistrationForm.map((el,ind) => {
                                    return (
                                        <li className="single_login_field" key={ind}>
                                            <Input
                                                placeholder={ el.label ?? '' }
                                                type={ el.inputType }
                                                value={ el.value }
                                                Typing={(payload) => Update__Input_Values(payload,ind)}
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
                                                Typing={(payload) => Update__Input_Values(payload,ind)}
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