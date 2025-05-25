/*
// src/components/templates/DefaultLayout.tsx
import React from 'react';

interface DefaultLayoutProps {
    children: React.ReactNode;
}

/!**
 * Layout with 3 columns:
 *  • Left sidebar (20%) – fixed to viewport
 *  • Main content (1fr) – scrolls independently
 *  • Right sidebar (10%) – fixed to viewport
 *!/
const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
    const [left, main, right] = React.Children.toArray(children);

    return (
        <div
            className="
        h-screen
        grid
        grid-cols-1
        md:grid-cols-[20%_1fr_7%]
        bg-gray-100
      "
        >
            <aside className="hidden md:block h-screen top-0 overflow-y-auto">
                {left}
            </aside>

            <main className="h-screen overflow-y-auto px-4 md:px-8">
                {main}
            </main>

            <aside className="hidden md:block h-screen top-0 overflow-y-auto bg-white">
                {right}
            </aside>
        </div>
    );
};



export default DefaultLayout;
*/


import React from "react";
interface DefaultLayoutProps {
    children: React.ReactNode;
}
const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
    const [left, main, right] = React.Children.toArray(children);
    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
            {/* Left sidebar */}
            <aside className="hidden md:block md:w-[20%] h-screen sticky top-0 overflow-auto bg-white">
                {left}
            </aside>
            {/* Main content */}
            <main className="flex-1 h-screen overflow-y-auto px-4 md:px-8">
                {main}
            </main>
            {/* Right sidebar */}
            <aside className="hidden md:block md:w-[7%] h-screen sticky top-0 overflow-auto bg-white">
                {right}
            </aside>
        </div>
    );
};
export default DefaultLayout;

