'use client'
import { useState } from 'react'
import SideBar from './components/SideBar'
import Header from './components/Header'

const Page = () => {
    const [openSideBar, setOpenSideBar] = useState(false)

    const handleCloseSideBar = () => {
        setOpenSideBar(false)
    }

    const handleOpenSideBar = () => {
        setOpenSideBar(true)
    }

    const handleNewChat = () => {}

    const handleDeleteAllChat = () => {}

    return (
        <main className="flex min-h-screen bg-grayDark">
            <SideBar
                open={openSideBar}
                onClose={handleCloseSideBar}
                onNewChat={handleNewChat}
                onClick={handleDeleteAllChat}
            >
                ...
            </SideBar>
            <section className="flex flex-col w-full  items-end">
                <Header
                    onOpenSideBar={handleOpenSideBar}
                    onNewChat={handleNewChat}
                />
            </section>
        </main>
    )
}

export default Page
