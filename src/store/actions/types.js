export const LOGIN_TYPES = Object.freeze({
  SET_USER_DATA: 'SET_USER_DATA',
  SET_AUTH: 'SET_AUTH',
  SET_AUTH_ERROR: 'SET_AUTH_ERROR',
  SET_CLEAR_ERRORS: 'SET_CLEAR_ERRORS',
  SET_LOGOUT: 'SET_LOGOUT'
})

export const MOVIES_PAGE_TYPES = Object.freeze({
  SET_MOVIES_DATA: 'SET_MOVIES_DATA',
  SET_MOVIES_PAGE: 'SET_MOVIES_PAGE',
  SET_SORT_PARAM: 'SET_SORT_PARAM',
  SET_GENRE_LIST: 'SET_GENRE_LIST',
  SET_GENRE: 'SET_GENRE',
  SET_RELEASE_DATE_GTE: 'SET_RELEASE_DATE_GTE',
  SET_RELEASE_DATE_LTE: 'SET_RELEASE_DATE_LTE',
  SET_RATING_GTE: 'SET_RATING_GTE',
  SET_RATING_LTE: 'SET_RATING_LTE',
  SET_MOVIES_FETCHING: 'SET_MOVIES_FETCHING',
  SET_GENRES_FETCHING: 'SET_GENRES_FETCHING',
  SET_MOVIES_PAGE_ERROR: 'SET_MOVIES_PAGE_ERROR',
  SET_CLEAR_FILTERS: 'SET_CLEAR_FILTERS',
  SET_CLEAR_MOVIES_PAGE_DATA: 'SET_CLEAR_MOVIES_PAGE_DATA',
  SET_CLEAR_MOVIES_PAGE_ERRORS: 'SET_CLEAR_MOVIES_PAGE_ERRORS',
})

export const SEARCH_PAGE_TYPES = Object.freeze({
  SET_SEARCH_DATA: 'SET_SEARCH_DATA',
  SET_SEARCH_WORD: 'SET_SEARCH_WORD',
  SET_SEARCH_PAGE: 'SET_SEARCH_PAGE',
  SET_FETCHING: 'SET_FETCHING',
  SET_SEARCH_PAGE_ERROR: 'SET_SEARCH_PAGE_ERROR',
  SET_CLEAR_SEARCH_PAGE_ERRORS: 'SET_CLEAR_SEARCH_PAGE_ERRORS',
})

export const FILM_DETALIS_PAGE_TYPES = Object.freeze({
  SET_FILM_DATA: 'SET_FILM_DATA',
  SET_FETCHING: 'SET_FETCHING',
  SET_ERROR: 'SET_ERROR',
})

export const FAVORITES_PAGE_TYPES = Object.freeze({
  SET_FAVORITES: 'SET_FAVORITES',
  SET_CLEAR_FAVORITES: 'SET_CLEAR_FAVORITES',
  SET_FAVORITES_ERROR: 'SET_FAVORITES_ERROR',
})
