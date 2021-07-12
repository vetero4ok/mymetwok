import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { 'API-KEY': 'd9412019-2aba-4ed8-8456-975719bde7ef'},

});

export const userAPI = {
    getUsers(currentPages: number, pageSize: number) {

        return instance.get(`users?page=${currentPages}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
}
export const profileAPI = {
    getProfiles(userId: number) {
        return instance.get(`profile/${userId}`)
    },
}
export const followAPI = {
    followUser(userId:number) {
        return instance.post(`follow/${userId}`)
    },
    unfollowUser(userId:number) {
        return  instance.delete(`follow/${userId}`)
    },
}
export const authMeAPI = {
    authMe() {
        return  instance.get(`auth/me`)
    },
}
