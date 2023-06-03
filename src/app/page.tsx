'use client'
import { useState } from 'react'
import SideBar from './components/SideBar'
import Header from './components/Header'
import ChatArea from './components/ChatArea'
import { Chat } from './types/Chat'

const Page = () => {
    const [openSideBar, setOpenSideBar] = useState(false)
    const [chatActive, setChatActive] = useState<Chat>()

    const handleCloseSideBar = () => {
        setOpenSideBar(false)
    }

    const handleOpenSideBar = () => {
        setOpenSideBar(true)
    }

    const handleNewChat = () => {}

    const handleDeleteAllChat = () => {}

    return (
        <main className="flex gap-4 min-h-screen bg-grayDark">
            <SideBar
                open={openSideBar}
                onClose={handleCloseSideBar}
                onNewChat={handleNewChat}
                onClick={handleDeleteAllChat}
            >
                ...
            </SideBar>
            <section className="flex flex-col w-full">
                <Header
                    onOpenSideBar={handleOpenSideBar}
                    onNewChat={handleNewChat}
                />
                <ChatArea chat={chatActive} />
            </section>
        </main>
    )
}

export default Page
