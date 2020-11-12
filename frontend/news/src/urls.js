export const POSTS_LIST = '/news'
export const POSTS_DETAIL = '/news'
export const POSTS_COMMENT = '/comment'

export const backendUrl = process.env.REACT_APP_BASE_URL || `${window.location.protocol}//${window.location.hostname}`
export const domain = backendUrl.endsWith('/') ? backendUrl.substr(0, backendUrl.length - 1) : backendUrl
