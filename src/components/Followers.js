import React from 'react';
import {useGithubContext} from "../context/Context";

function Followers(props) {
    const {followers}=useGithubContext()
    // {login,avatar_url,html_url}
    return (
        <div className="mt-2">
            <div className="flex">
                <div className="bg-white px-10 py-3 text-gray-500">
                    Followers
                </div>
            </div>
            <div className="bg-white px-8 py-4" style={{"height":"400px","overflowX":"scroll"}}>
                {followers.map((follower,index)=>{
                    const {login,avatar_url,html_url}=follower
                    return <Follower key={index} login={login} avatar_url={avatar_url} html_url={html_url} />
                })}
            </div>
        </div>
    );
}


function Follower({login,avatar_url,html_url}) {
    return (
        <div className="my-2 flex items-center" >
            <div className="mr-3">
                <img src={avatar_url} className="w-12 h-12 rounded-full" alt=""/>
            </div>
            <div>
                <p className="text-gray-600">{login}</p>
                <p>
                    <a target="_blank" href={html_url}>{html_url}</a>
                </p>
            </div>
        </div>
    );
}


export default Followers;