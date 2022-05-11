export const register = async (params) => {
  const formdata = new FormData();
  Object.entries(params).forEach(([key, val]) => {
    formdata.append(key, val)
  })
  return fetch('/api/user/register', {
    method: 'POST',
    body: formdata
  }).then(res => res.json())
}

export const login = async (params) => {
  const formdata = new FormData();
  Object.entries(params).forEach(([key, val]) => {
    formdata.append(key, val)
  })
  return fetch('/api/user/login', {
    method: 'POST',
    body: formdata
  }).then(res => res.json())
}

export const getMe = async () => {
  return fetch('/api/user/info').then(res => res.json())
}

export const getAriList = async (category) => {
  const url = '/api/article/list?category=' + category
  return fetch(url).then(res => res.json())
}
export const getAriDetail = async (id) => {
  return fetch(`/api/article/info?articleid=${id}`).then(res => res.json())
}
export const postArticle = async (params) => {
  const formdata = new FormData();
  Object.entries(params).forEach(([key, val]) => {
    formdata.append(key, val)
  })
  return fetch('/api/article/publish', {
    method: 'POST',
    body: formdata
  }).then(res => res.json())
}
export const searchArticle = async (title) => {
  return fetch('/api/article/search?title=' + title).then(res => res.json())
}
