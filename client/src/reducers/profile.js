import {
  GET_PROFILE,
  PROFILE_ERROR,
  GET_PROFILES,
  GET_FAVOURITE_PROFILES,
  CLEAR_PROFILE,
  SET_LOADING,
  GET_MESSAGES,
  CLEAR_MESSAGES,
} from "../actions/types";

const initialState = {
  profile: { messages: [] },
  profiles: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE:
      return { ...state, profile: { ...state.profile, ...payload }, loading: false };
    case GET_PROFILES:
      return { ...state, profiles: payload, loading: false };
    case GET_FAVOURITE_PROFILES:
      return { ...state, profiles: payload, loading: false };
    case CLEAR_PROFILE:
      return { ...state, profile: {}, loading: true };
    case PROFILE_ERROR:
      return { ...state, error: payload, loading: false };
    case SET_LOADING:
      return { ...state, loading: payload };
    case GET_MESSAGES:
      return {
        ...state,
        profile: { ...state.profile, messages: payload },
        // loading: false,
      };
    case CLEAR_MESSAGES:
      return {
        ...state,
        profile: { ...state.profile, messages: [] },
      };

    default:
      return state;
  }
}
