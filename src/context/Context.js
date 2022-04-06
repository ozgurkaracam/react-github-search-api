import React, {createContext, useContext, useEffect, useState} from 'react';
import axioss from "axios";
import {getFollowers, getRateLimit, getRepos, searchUser} from "./functions";

const GithubContext=createContext()

const axios=axioss.create({
    baseURL:'https://api.github.com'
})

function Context({children}) {
    const [user,setUser]=useState(null)
    const [followers,setFollowers]=useState(null)
    const [repos,setRepos]=useState(null)
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState(null)

    const [rate,setRate]=useState({})

    useEffect(  ()=>{
        checkLimit()
        async function setup(){
            await getUser("dashersw")
           await getRate()
            setLoading(false)
        }
         setup()
    },[])


    function checkLimit(){
        console.log(rate)
        if(rate.remaining>100){
            setError('Your rights are done!')
            return;
        }
    }


    async function getRate(){
        const {remaining,limit}=await getRateLimit(axios)
        setRate({remaining,limit})
    }

    async function getUser(username){
        setLoading(true)
        try{
            let resultUser=await searchUser(axios,username);
            let userRepos=await getRepos(axios,username)
            let userFollowers=await getFollowers(axios,username)
            setUser(resultUser)
            setRepos(userRepos)
            setFollowers(userFollowers)
            getRate()
            setError(null)
        }catch (e){
            setError('User Not Found!')
            await getRate()
        }
        setLoading(false)
    }



    return (
        <GithubContext.Provider value={{
            user,
            followers,
            repos,
            rate,
            getUser,
            error,
            loading
        }}>
            {children}
        </GithubContext.Provider>
    );
}

export const useGithubContext=()=>{
    return useContext(GithubContext);
}

export default Context;