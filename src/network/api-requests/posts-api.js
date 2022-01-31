import axiosClient from '../axios'

export async function fetchAllPosts() {
  return await axiosClient.get('/posts')
}

export async function deletePost(id) {
  return await axiosClient.delete(`/posts/${id}`)
}

export async function editPost(post) {
  return await axiosClient.put(`/posts/${post.id}`, post)
}
