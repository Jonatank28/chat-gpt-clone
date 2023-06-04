'use client'
import { useState } from 'react'
import SideBar from './components/SideBar'
import Header from './components/Header'
import ChatArea from './components/ChatArea'
import { Chat } from './types/Chat'
import Footer from './components/Footer'

const Page = () => {
    const [openSideBar, setOpenSideBar] = useState(false)
    const [AILoading, setAILoading] = useState(false)
    const [chatActive, setChatActive] = useState<Chat>({
        id: '1',
        title: 'teste',
        messages: [
            {
                id: '4',
                author: 'me',
                body: 'Como chegar a lua',
            },
            {
                id: '5',
                author: 'ai',
                body: 'Contrua uma espaçonave',
            },
            {
                id: '6',
                author: 'me',
                body: 'Como chegar a lua',
            },
            {
                id: '7',
                author: 'ai',
                body: 'Contrua uma espaçonave',
            },
        ],
    })

    const handleCloseSideBar = () => {
        setOpenSideBar(false)
    }

    const handleOpenSideBar = () => {
        setOpenSideBar(true)
    }

    const handleNewChat = () => {}

    const handleDeleteAllChat = () => {}

    const handleSendMessage = () => {}

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
            <section className="flex flex-col w-full">
                <Header
                    onOpenSideBar={handleOpenSideBar}
                    onNewChat={handleNewChat}
                />
                <ChatArea chat={chatActive} />
                <Footer
                    onSendMessage={handleSendMessage}
                    disabled={AILoading}
                />
            </section>
        </main>
    )
}

export default Page
