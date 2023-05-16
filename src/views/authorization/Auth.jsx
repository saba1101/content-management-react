import('./Auth.scss')
import { useEffect, useState } from "react"
import Popup from "../../components/reusable/modal/Popup"
import { AuthData } from "./authData"
import Input from '@/components/reusable/input/Input.jsx'
import MainButton from "../../components/reusable/button/MainButton"
import { Set_UserName,Set_Email,Set_Password,Set_Authorize,Set_ID,Set_UsersHistory} from "../../redux/user/userStore"
import { useDispatch, useSelector } from "react-redux"

export const Auth = (props = {type : ''}) => {
    const dispatch = useDispatch()
    const { UserName,Password } = useSelector(state => state.UserStore)
    const { LoginForm, RegistrationForm ,Modes} = AuthData;
    const [popupVisible, setpopupVisible] = useState(true)
    const [AuthMode,setAuthMode] = useState(Modes.REGISTER)
    const [LoginElements,setLoginElements] = useState(LoginForm)
    const [ResigterElements,setResigterElements] = useState(RegistrationForm)
    const [KeepLoggedIn,setKeepLoggedIn] = useState(false)

    const Set_Store_UserData = () => {
        const Lstore =  JSON.parse(localStorage.getItem('userConfig'))

        dispatch(Set_UserName(Lstore?.UserName))
        dispatch(Set_Email(Lstore?.Email))
        dispatch(Set_Password(Lstore?.Password))
        dispatch(Set_ID(Lstore?.ID))
    }

    const Trigger__Auto_Login = () => {
        if(JSON.parse(localStorage.getItem('keepLoggedIn'))){
            dispatch(Set_Authorize())
        }
    }

    const Check__Pre_Auths = () => {
        try{
            return localStorage.getItem('PreAuthed') && JSON.parse(localStorage.getItem('PreAuthed')) ? true : false
        }
        catch{
            return false
        }
        
    }

    useEffect(() => {
        if(Check__Pre_Auths()){
            const Lstore_username = JSON.parse(localStorage.getItem('userConfig'))?.UserName
            const Lstore_password = JSON.parse(localStorage.getItem('userConfig'))?.Password

            setAuthMode(Modes.LOGIN)
            AutoSet_Login_Params(
                Lstore_username,
                Lstore_password,
            )
            Set_Store_UserData()
            Trigger__Auto_Login()
        } 
        else setAuthMode(Modes.REGISTER)
    },[])

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

    const Register_User = (e) => {
        e.preventDefault()
        let userData = {}

        ResigterElements.forEach((f,ind) => {
            switch (String(f.type)){
                case 'USERNAME':{
                    userData['UserName'] = f.value
                    dispatch(Set_UserName(f.value))
                    break
                }
                case 'EMAIL':{
                    userData['Email'] = f.value
                    dispatch(Set_Email(f.value))
                    break
                }
                // case 'PASSWORD':{
                //     break
                // }
                case 'REPEAT_PASSWORD':{
                    userData['Password'] = f.value
                    dispatch(Set_Password(f.value))
                    break
                }
            }
        })

        userData['ID'] = crypto.randomUUID()

        localStorage.setItem('userConfig',JSON.stringify(userData))
        setAuthMode(Modes.LOGIN)
        AutoSet_Login_Params(
            ResigterElements.find(el => el.type === 'USERNAME').value,
            ResigterElements.find(el => el.type === 'PASSWORD').value,
        )
        localStorage.setItem('PreAuthed',true)
        
        if(localStorage.getItem('usersHistory')) {
            const prevHistory = JSON.parse(localStorage.getItem('usersHistory'))
            prevHistory.push(userData)
            localStorage.setItem(
                'usersHistory',
                JSON.stringify(prevHistory)
            )
        }
        else localStorage.setItem('usersHistory',JSON.stringify([userData]))

        dispatch(Set_UsersHistory())

    }

    const AutoSet_Login_Params = (username,password) => {
        const AutoFilled = LoginElements
        LoginElements.find(el => el.type === 'USERNAME').value = username ?? ''
        LoginElements.find(el => el.type === 'PASSWORD').value = password ?? ''
        setLoginElements(AutoFilled)
    }

    const Login_User = (e) => {
        e.preventDefault()
        const filled_username = LoginElements.find(el => el.type === 'USERNAME').value
        const filled_password = LoginElements.find(el => el.type === 'PASSWORD').value

        if(filled_username === UserName && filled_password === Password){
            dispatch(Set_Authorize())
        }

        if(KeepLoggedIn){
            localStorage.setItem("keepLoggedIn",true)
        }
    }

    const ResigterFormElement = () => {
        return (
            <div className="form_wrapper">
                <form onSubmit={Register_User}>
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
                                                required={ el.required }
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
                <form onSubmit={Login_User}>
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
                                                required={ el.required }
                                            />
                                        </li>
                                    )
                                })
                            : []
                        }

                        <li className="login_option_checkbox">
                            <div className="login_option">
                                <input 
                                    type="checkbox"
                                    id="keepSigned" 
                                    onChange={(e) => setKeepLoggedIn(!KeepLoggedIn)}
                                />
                                <label htmlFor="keepSigned">
                                    <span>Keep Me Logged In !</span>
                                </label>
                            </div>
                            <div className="switch_auth_method">
                                <span onClick={Switch__To_Register} >Register</span>
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
            title={'Authentication'}
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