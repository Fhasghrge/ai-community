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


