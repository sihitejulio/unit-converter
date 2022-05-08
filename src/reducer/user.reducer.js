import { Types } from '../action/actionType';

const initialState = {
  userData: {
    phoneNumber: '',
    token: null,
  },
  isLoginVerify:false,
}

const userReducer = (state = initialState, action) => {
  console.log('payload',action.payload)
  switch (action.type) {
    case Types.LOGIN:
    console.log('login', {
      ...state,
      userData: action.payload.user,
    })
      return {
        ...state,
        userData: action.payload.user,
      }
     default:
      return state;
  }
}

export default userReducer;
