import React, {useState} from 'react';
import {useGithubContext} from "../context/Context";

function SearchBar(props) {
    const {rate, getUser, error, loading} = useGithubContext()
    const [username, setUsername] = useState('')
    const submitForm = (e) => {
        e.preventDefault()
        if(!username)
            return
        getUser(username)
        setUsername("")
    }
    return (
        <div className="my-3 ">
            <form onSubmit={submitForm} className="w-full">
                {error != null && <p className="text-red-700 mb-2 ml-5">{error}</p>}
                <div className="md:flex items-center">
                    <div className="md:w-2/3 relative flex items-center">

                        <input onChange={(e) => setUsername(e.target.value)} type="text"
                               className="bg-white h-16 px-10 py-2 w-full rounded-2xl" placeholder="Search..."/>
                        <button className="bg-pink-400 text-white px-4 py-2 rounded-full absolute right-2">Search!
                        </button>
                    </div>

                    {!loading && <div className="text-gray-400 text-3xl ml-2">
                        Requests : {rate.remaining}/{rate.limit}
                    </div>}

                </div>
            </form>

        </div>
    );
}

export default SearchBar;