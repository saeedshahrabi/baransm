import { usersType } from "../enums/users";

const initialState = {
  users: [],
};
export default function user(state = initialState, action: any) {
  switch (action.type) {
    case usersType.GET_USER:
      return {
        ...state,
        users: action.payload,
      };

    default:
      return state;
  }
}
