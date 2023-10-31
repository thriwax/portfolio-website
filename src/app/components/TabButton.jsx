import React from 'react';

const TabButton = ({ active, selectTab, children }) => {

    const buttonClasses = active ? 'bg-gradient-to-br from-purple-100 via-violet-400 to-blue-500 text-white' : 'bg-[#dcdcdc] text-black';

    return (
        <button onClick={selectTab}>
            <p className={`py-2 px-4 text-black rounded font-semibold hover:bg-[#aaaaaa] hover:text-white shadow-inner ${buttonClasses}`}>
                {children}
            </p>
        </button>
    )
};

export default TabButton;