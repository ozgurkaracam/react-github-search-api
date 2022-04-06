import React from 'react';
import UserDetail from "./UserDetail";
import Followers from "./Followers";

function Mid(props) {
    return (
        <div className="md:grid grid-cols-2 gap-4">
            <UserDetail />
            <Followers />
        </div>
    );
}

export default Mid;