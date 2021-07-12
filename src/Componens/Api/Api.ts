import axios from 'axios';

export function getUsers(currentPages: number, pageSize: number) {

    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPages}&count=${pageSize}`, {
        withCredentials: true,
    }).then(response => {
        return response.data
    })
}


