import { global } from "@/actions/actions";

export const authReducer = (state, action) => {
  switch (action.type) {
    case global.SIGNUP:
      return { ...state, mainUser: action.payload };

    case global.TOGGLE:
      return { ...state, toggle: action.payload };

    case global.GETUSER:
      console.log("hello");
      return { ...state, mainUserProfile: action.payload };

    default:
      return state;
  }
};
