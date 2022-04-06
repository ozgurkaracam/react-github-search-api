import React from 'react';

function StatCard({icon,data,label,color}) {
    return (
        <div className="bg-white px-8 py-5 my-2 rounded-xl shadow shadow-xl">
            <div className="flex items-center">
                <div className={`bg-${color}-100 p-3 rounded-full mr-4`}>
                    {icon}
                </div>
                <div>
                    <p className="text-3xl font-extrabold">{data}</p>
                    <p className="text-gray-500">{label}</p>
                </div>
            </div>
        </div>
    );
}

export default StatCard;