let selfcookie;
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
  }).then(res => {
    const json = res.json();
    json.then(res => {
      if(res.code === 0) {
        selfcookie = res?.data?.token;
      }
    })
    return json;
  })
}

export const getMe = async () => {
  return fetch('/api/user/info', {
    headers: {
      'dcookie': selfcookie
    }
  }).then(res => res.json())
}

export const getAriList = async (category) => {
  const url = '/api/article/list?category=' + category
  return fetch(url, {
    headers: {
      'dcookie': selfcookie
    }
  }).then(res => res.json())
}
export const getAriDetail = async (id) => {
  return fetch(`/api/article/info?articleid=${id}`, {
    headers: {
      'dcookie': selfcookie
    }
  }).then(res => res.json())
}
export const postArticle = async (params) => {
  const formdata = new FormData();
  Object.entries(params).forEach(([key, val]) => {
    formdata.append(key, val)
  })
  return fetch('/api/article/publish', {
    method: 'POST',
    body: formdata,
    headers: {
      'dcookie': selfcookie
    }
  }).then(res => res.json())
}
export const searchArticle = async (title) => {
  return fetch('/api/article/search?title=' + title, {
    headers: {
      'dcookie': selfcookie
    }
  }).then(res => res.json())
}
export const deleteArticle = (articleId) => {
  return fetch('/api/article/info?articleid=' + articleId, {
    method: 'DELETE',
    headers: {
      'dcookie': selfcookie
    }
  }).then(res => res.json())
}
export const like = params => {
  const formdata = new FormData();
  Object.entries(params).forEach(([key, val]) => {
    formdata.append(key, val)
  })
  return fetch('/api/article/like', {
    method: 'POST',
    body: formdata,
    headers: {
      'dcookie': selfcookie
    }
  }).then(res => res.json())
}

export const favorite = params => {
  const formdata = new FormData();
  Object.entries(params).forEach(([key, val]) => {
    formdata.append(key, val)
  })
  return fetch('/api/article/Favorite', {
    method: 'POST',
    body: formdata,
    headers: {
      'dcookie': selfcookie
    }
  }).then(res => res.json())
}
