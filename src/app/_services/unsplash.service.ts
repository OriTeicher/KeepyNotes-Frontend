import axios from 'axios'
export const unsplashService = {
  fetchPhotoFromUnsplash,
}

const ACCESS_KEY = '3yF4Mw1jz_x9aL142pO5a4nXm_a3xc6Nu_BYEEIxQNA'
// const SECRET_KEY = 'GeHVTmYa6Nddzy6S5TLTKc3KeMji-4wSCLAGAHAm0Oc'

async function fetchPhotoFromUnsplash(count: number = 1, searchTerm: string) {
  try {
    const response = await axios.get('https://api.unsplash.com/photos/random', {
      params: {
        query: searchTerm,
        per_page: count,
      },
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
      },
    })
    const img = response.data
    return img.urls.regular
  } catch (err) {
    console.error('Error fetching photos:', err)
    return []
  }
}
