import axios from 'axios'

export const cloudinaryService = {
  uploadPhotoToCloud,
}

async function uploadPhotoToCloud(fileUrl: string) {
  const formData = new FormData()
  formData.append('file', fileUrl)
  formData.append('upload_preset', 'keepy-notes')
  formData.append('cloud_name', 'dcg0ivasg')
  return await axios.post('https://api.cloudinary.com/v1_1/dcg0ivasg/image/upload', formData)
}
