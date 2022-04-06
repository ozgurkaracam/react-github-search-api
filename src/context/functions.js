export const getRateLimit=(axios)=>{
    return axios.get('/rate_limit').then(res=>{
        return res.data.resources.core
    })
}

export const searchUser=(axios,username)=>{
    return axios.get(`/users/${username}`).then(res=>{
        return res.data
    })
}

export const getRepos=(axios,username)=>{
    return axios.get(`/users/${username}/repos`).then(res=>{
        return res.data
    })
}

export const getFollowers=(axios,username)=>{
    return axios.get(`/users/${username}/followers`).then(res=>{
        return res.data
    })
}