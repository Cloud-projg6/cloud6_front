const BASE_URL = import.meta.env.VITE_API_BASE_URL || ''

export async function authFetch(url, options = {}) {
  const token = localStorage.getItem('token')
  const headers = { ...(options.headers || {}) }

  if (token) {
    headers.Authorization = `Bearer ${token}`
  }

  const fullUrl = url.startsWith('http') ? url : `${BASE_URL}${url}`  // 추가

  const response = await fetch(fullUrl, {   // url → fullUrl
    ...options,
    headers,
  })

  if (response.status === 401 || response.status === 403) {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    if (window.location.pathname !== '/login') {
      window.location.href = '/login'
    }
  }

  return response
}