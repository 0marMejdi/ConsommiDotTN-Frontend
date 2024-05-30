import React from 'react';

const PageLayout: React.FC<{ children: React.ReactNode[] }> = ({ children }) => {
    return (
        <div className="grid grid-cols-4 gap-4 pt-24 pb-8 container">
            <div className="col-span-1 flex flex-col">
                {/* Sidebar */}
                {children[0]}
            </div>
            <div className="col-span-3 flex justify-center items-center">
                {/* Products */}
                {children[1]}
            </div>
        </div>
    );
};

export default PageLayout;
