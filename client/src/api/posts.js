import axios from 'axios';

export const getPostRequests = async () => await axios.get('/posts');
export const getPostDetailRequests = async (id) => await axios.get(`/posts/${id}`);

export const createPostRequests = async (post) => {
    const form = new FormData();
    
    for (let key in post) {
        form.append(key, post[key]);
    }

    return await axios.post('/posts', form, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
}    

export const updatePostRequests = async (id, post) => await axios.put(`/posts/${id}`, post);

export const deletePostRequests = async (id) => await axios.delete(`/posts/${id}`);
