import React from 'react';
import {useGithubContext} from "../context/Context";

function UserDetail(props) {
    const { user: {avatar_url, login, name, bio, company,blog,location,html_url} } = useGithubContext()
    return (
        <div >
            <div className="flex">
                <div className="bg-white px-10 py-3 text-gray-500">
                    User
                </div>
            </div>
            <div className="bg-white px-8 py-4 " style={{"height":"400px"}}>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <img src={avatar_url} alt="" className="w-32 h-32 rounded-full mr-3"/>
                            <div>
                                <p className="text-gray-700">@{login}</p>
                                <p>{name}</p>
                            </div>
                        </div>
                        <div className="h-full flex items-center">
                            <a href={html_url} target="_blank"
                                className="text-blue-700 border border-blue-500 hover:bg-blue-500 hover:text-white rounded-full px-5 py-2">Follow
                            </a>
                        </div>
                    </div>
                    <div className="my-5">
                        <p className="text-gray-600">{bio}</p>
                    </div>
                    <p>
                        {company && <p className="my-3"><i className="fa-solid fa-building"></i> {company}<br/></p>}
                        {location && <p className="my-3"><i className="fa-solid fa-location-pin"></i> {location}<br/></p>}
                        {blog && <p className="my-3"><i className="fa-solid fa-link"></i> {blog}<br/></p>}
                    </p>

            </div>
        </div>
    );
}

export default UserDetail;