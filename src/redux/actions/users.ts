import { usersType } from "../enums/users";

export function getUsers(users: any) {
  return {
    type: usersType.GET_USER,
    payload: users,
  };
}
