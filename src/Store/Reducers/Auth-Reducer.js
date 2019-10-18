const initialState = {
    isRegister: false,
    isSigned: false,
    isLogin: false,
    signupErr: '',
    loginErr: '',
    loginSuc: '',
    user: {},
    forgetErr: '',
    foregetSuc: '',

}



const AuthReducer = (state = initialState, action) => {

    switch (action.type) {
        case "ALREADY_USER":
            state.isSigned = true
            state.user = action.payload
            return { ...state, user: state.user }

        case "SIGNUP_SUCCESS":
            state.isRegister = true
            state.user = action.payload
            return { ...state, user: state.user }
            break;

        case "SHOW_SIGNUP_ERROR":
            state.signupErr = action.payload
            state.signupErr = state.signupErr.slice(5)
            return { ...state, signupErr: state.signupErr.concat() }
            break;


        case "LOGIN_SUCCESS":
            state.isLogin = true
            state.loginSuc = 'Login success'
            return { ...state, loginSuc: state.loginSuc.concat() }
            break;


        case "SHOW_LOGIN_ERROR":
            state.loginErr = action.payload
            state.loginErr = state.loginErr.slice(5)
            return { ...state, loginErr: state.loginErr.concat() }
            break;

        case "FACEBOOK_LOGIN_SUCCESS":
            return { ...state, user: action.payload }


        case "EMAIL_SENT_SUCCESS": return { ...state }

        case "FORGET_SUCCESS":
            state.isLogin = true
            state.foregetSuc = 'email sent Succesfully'
            return { ...state, foregetSuc: state.foregetSuc.concat() }
            break;

        case "FORGET_ERROR":
            state.forgetErr = action.payload
            state.forgetErr = state.forgetErr.slice(5)
            return { ...state, forgetErr: state.forgetErr.concat() }
            break;

        case "LOGOUT_SUCCESS":
            return { ...state, loginSuc: '', loginErr: ''.concat() }


        default: return state

    }

}

export default AuthReducer