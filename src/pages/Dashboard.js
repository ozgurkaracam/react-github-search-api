import React from 'react';
import Header from "../components/Header";
import Stats from "../components/Stats";
import Mid from "../components/Mid";
import Charts from "../components/Charts/Charts";
import SearchBar from "../components/SearchBar";
import {useGithubContext} from "../context/Context";
import Loading from "../components/Loading";

function Dashboard(props) {
    const {error,loading}=useGithubContext()
    return (
        <>
            <Header />
            <div className="md:w-3/5 mx-auto">
                <SearchBar />
                {loading && <Loading />}
                {error==null && !loading && <> <Stats />
                    <Mid />
                    <Charts /> </>}
            </div>

        </>
    );
}

export default Dashboard;