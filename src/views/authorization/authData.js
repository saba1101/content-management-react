export const AuthData = {
    Modes: {
        REGISTER : "REGISTER",
        LOGIN : "LOGIN",
    },
    LoginForm : [
        {
            label: 'User Name',
            inputType: 'text',
            type: 'USERNAME',
            required: true,
            value: '',
        },
        {
            label: 'Password',
            inputType: 'password',
            type: 'PASSWORD',
            required: true,
            value: '',
        },
    ],
    RegistrationForm: [
        {
            label: 'User Name',
            inputType: 'text',
            type: 'USERNAME',
            required: true,
            value: '',
        },
        {
            label: 'Email Adress',
            inputType: 'email',
            type: 'EMAIL',
            required: false,
            value: '',
        },
        {
            label: 'Password',
            inputType: 'password',
            type: 'PASSWORD',
            required: false,
            value: '',
        },
        {
            label: 'Repeat Password',
            inputType: 'password',
            type: 'REPEAT_PASSWORD',
            required: false,
            value: '',
        },
    ]
}