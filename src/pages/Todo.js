import React from 'react'
import TabMenu from '../components/TabMenu'
import Background from '../components/Background'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

export default function Todo() {
    return (
        <>
            <div className='flex flex-col h-screen overflow-hidden'>
                <TabMenu />
                <div className="flex h-full">
                    <Sidebar />
                    <div className="flex-1 content">
                        <Header />
                    </div>
                </div>
            </div>
            <Background />
        </>
    )
}
