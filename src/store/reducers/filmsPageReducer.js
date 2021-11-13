import { FILMS_PAGE_TYPES } from "../actions/types";

const initialState = {
  filmsData: {},
  isFetching: false,
  error: '',
}

export default function filmsPageReducer(state = initialState, action) {
  switch (action.type) {
    case FILMS_PAGE_TYPES.SET_FILMS_DATA:
      return {
        ...state,
        filmsData: {
          ...action.payload
        }
      }

    case FILMS_PAGE_TYPES.SET_FETCHING:
      return {
        ...state,
        isFetching: action.payload
      }

    case FILMS_PAGE_TYPES.SET_ERROR:
      return {
        ...state,
        error: action.payload
      }

    default:
      return state
  }
}
