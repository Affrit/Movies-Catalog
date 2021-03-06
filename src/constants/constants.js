export const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w500'

export const SORT_PARAMS = [
  { id: 'popularity.desc', name: 'Popularity(descending)' },
  { id: 'popularity.asc', name: 'Popularity(ascending)' },
  { id: 'vote_average.desc', name: 'Rating(descending)' },
  { id: 'vote_average.asc', name: 'Rating(ascending)' },
  { id: 'vote_count.desc', name: 'Vote count(descending)' },
  { id: 'vote_count.asc', name: 'Vote count(ascending)' },
  { id: 'release_date.desc', name: 'Release(descending)' },
  { id: 'release_date.asc', name: 'Release(ascending)' },
  { id: 'revenue.desc', name: 'revenue(descending)' },
  { id: 'revenue.asc', name: 'revenue(ascending)' },
  { id: 'original_title.desc', name: 'Name(descending)' },
  { id: 'original_title.asc', name: 'Name(ascending)' },
]

export const IS_MOBILE = (
  /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i
  .test(navigator.userAgent)
);
