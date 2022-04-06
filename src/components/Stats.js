import React from 'react';
import {useGithubContext} from "../context/Context";
import StatCard from "./StatCard";

function Stats(props) {
    const {user: {following,followers,public_repos,public_gists}}=useGithubContext()
    const data=[
        {
            icon: <i className="fa-solid fa-certificate"></i>,
            data:public_repos,
            color:"yellow",
            label:'Repos'
        },
        {
            icon:<i className="fa-solid fa-users"></i>,
            color:"green",
            data:followers,
            label:'Followers'
        },
        {
            icon: <i className="fa-solid fa-person-burst"></i>,
            data:following,
            color:"red",
            label:'Following'
        },
        {
            icon: <i className="fa-solid fa-star"></i>,
            data:public_gists,
            color:"orange",
            label:'Gists'
        }
    ]
    return (
        <div className="w-full px-5 my-5">
            <div className="md:grid grid-cols-4 gap-4">
                {data.map((d,index)=><StatCard {...d} key={index} />)}
            </div>
        </div>
    );
}

export default Stats;