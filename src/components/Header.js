import React from 'react';

function Header(props) {
    return (
        <div className="w-full h-20 items-center text-center flex bg-white">
            <div className="mx-auto flex items-center">
                <div className="w-8 h-8 bg-purple-800 text-white rounded-full flex justify-center items-center mr-5">
                    Ö
                </div>
                <div className="mr-5">
                    Welcome <b className="font-extrabold">ÖZGÜR KARAÇAM</b>
                </div>
                <div className="text-gray-500 text-xl">
                    Logout
                </div>
            </div>

        </div>
    );
}

export default Header;