import { global } from "@/actions/actions";

export const authReducer = (state, action) => {
  switch (action.type) {
    case global.SIGNUP:
      return { ...state, mainUser: action.payload };
    default:
      return state;
  }
};
