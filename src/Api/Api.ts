import axios from 'axios';

const  instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { 'API-KEY': 'ed866548-b66a-44f9-8f52-2b761c116c4c'},

});

export const userAPI = {
    getUsers(currentPages: number, pageSize: number) {

        return instance.get(`users?page=${currentPages}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    followUser(userId:number) {
        return instance.post(`follow/${userId}`)
    },
    unfollowUser(userId:number) {
        return  instance.delete(`follow/${userId}`)
    },
}
export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/${userId}`)
    },
    getStatus (userId:number) {
        return instance.get(`profile/status/${userId}`)
    },
    changeStatus (status:string) {
        return instance.put(`profile/status/`, {status})
    },

}

export const authMeAPI = {
    authMe() {
        return  instance.get(`auth/me`)
    },
}
