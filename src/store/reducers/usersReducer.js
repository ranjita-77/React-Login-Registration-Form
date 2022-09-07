const initialState = {
    user : [],
    loginStatus:"",
    registrationSucess: '',
    loading : true,
    error: false,
  };

const usersReducer = (state = initialState, { type,user,loginStatus }) => {
  const index = {
    'REGISTER_USER': () => {
      return { ...state, user: user }
    },
    'LOGIN_USER': () => {
      return { ...state, loginStatus: loginStatus }
    },
    'DEFAULT': () => {
        return state;
    }
  };
  return (index[type] || index['DEFAULT'])();
}

export default usersReducer;