import { Types } from '../action/actionType';

const initialState = {
  profile: {
    phoneNumber: '',
    token:'',
  }
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.LOGIN:
    console.log('login', action.payload.user)
      return {
        ...state,
        profile: action.payload.user,
      }
     default:
      return state;
  }
}

export default userReducer;
