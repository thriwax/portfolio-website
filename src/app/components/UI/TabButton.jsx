import React from 'react';

const TabButton = ({ active, selectTab, children }) => {

    const buttonClasses = active ? 'bg-gradient-to-br from-violet-400 to-blue-500 text-white' : 'bg-[#dcdcdc] text-black';

    return (
        <button onClick={selectTab}>
            <p className={`py-2 px-4 text-black rounded-full font-semibold hover:bg-black hover:text-white shadow-inner ${buttonClasses}`}>
                {children}
            </p>
        </button>
    )
};

export default TabButton;