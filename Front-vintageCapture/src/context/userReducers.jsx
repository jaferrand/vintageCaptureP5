const userReducers = (state, action) => {
    const {type, payload} = action;

    switch (type) {
        case "REGISTER":
            localStorage.setItem('token', payload.token)
            return { ...state, authStatus: true }
        case "INFO_USER":
            return { ...state, info2: payload, authStatus: true }
        case "LOGIN_ERROR":
        case "SIGN_OUT":
            localStorage.removeItem('token')
            return { info2: {}, authStatus: false }
        
        default:
            return state;
    }
}

export default userReducers;