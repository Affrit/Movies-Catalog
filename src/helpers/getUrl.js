import { BASE_URL } from "../constants/constants"
import { API_KEY } from "../constants/constants"

export const getUrl = (page = 1, filtrationOptions, contentType) => {
  let url = `${BASE_URL}/discover/${contentType}?${API_KEY}&page=${page}`
  for (const key in filtrationOptions) {
    if (filtrationOptions[key] && filtrationOptions.hasOwnProperty(key)) {
      const qwery = `&${key}=${filtrationOptions[key]}`
      url = url.concat(qwery)
    }
  }

  return url
}
