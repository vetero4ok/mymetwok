import axios from 'axios';
import {UserType} from '../Redux/usersPageReducer';
import {UserProfileType} from '../Redux/profilePageReducer';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': 'ed866548-b66a-44f9-8f52-2b761c116c4c'},

});
type AuthMe = {
    email: string
    id: number
    login: string
}
type GetUsersType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}
type CommonResponseType<T = {}> = {
    data: T
    fieldsErrors: []
    messages: []
    resultCode: number
}


export const userAPI = {
    getUsers(currentPages: number, pageSize: number) {
        return instance.get<GetUsersType>(`users?page=${currentPages}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    followUser(userId: number) {
        return instance.post<CommonResponseType>(`follow/${userId}`)
    },
    unfollowUser(userId: number) {
        return instance.delete<CommonResponseType>(`follow/${userId}`)
    },
}
export const profileAPI = {
    getProfile(userId: number) {
        return instance.get<UserProfileType>(`profile/${userId}`)
    },
    getStatus(userId: number) {
        return instance.get<string>(`profile/status/${userId}`)
    },
    changeStatus(status: string) {
        return instance.put<CommonResponseType>(`profile/status/`, {status})
    },

}

export const authMeAPI = {
    authMe() {
        return instance.get<CommonResponseType<AuthMe>>(`auth/me`)
    },
}
