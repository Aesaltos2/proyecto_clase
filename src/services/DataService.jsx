import axios from "axios"

export const authAPI = axios.create({ baseURL: 'http://localhost:3000' });

export const loginUser = async (username, password) => {

    const user = await authAPI.post('/api/auth/login', { username, password });
    return user.data
}

export const infoUser = async () => {
    const token = localStorage.getItem('token')
    const info = await authAPI.get('/api/user/me', {
        headers: { Authorization: token }
    })
    return info.data
}

