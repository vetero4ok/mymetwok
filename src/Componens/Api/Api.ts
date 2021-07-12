import axios from 'axios';

export function getUsers(currentPages: number, pageSize: number) {

    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPages}&count=${pageSize}`, {
        withCredentials: true,
    }).then(response => {
        return response.data
    })
}

export function getProfiles(userId:number) {
  return   axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)

}
export function followUser(userId:number) {
    return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
    {}, {
        withCredentials: true,
        headers: {
            'API-KEY': 'd9412019-2aba-4ed8-8456-975719bde7ef'
        }
    })

}
export function unfollowUser(userId:number) {
    return  axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
        {
            withCredentials: true,
            headers: {
                'API-KEY': 'd9412019-2aba-4ed8-8456-975719bde7ef'
            }
        })

}
export function authMe() {
   return  axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true
    })
}