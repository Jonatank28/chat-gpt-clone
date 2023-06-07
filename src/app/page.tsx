'use client'
import { use, useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import SideBar from './components/SideBar'
import Header from './components/Header'
import ChatArea from './components/ChatArea'
import { Chat } from './types/Chat'
import Footer from './components/Footer'
import SideBarChatButton from './components/SideBarChatButton'

const Page = () => {
    const [openSideBar, setOpenSideBar] = useState(false)
    const [AILoading, setAILoading] = useState(false)
    const [chatList, setChatList] = useState<Chat[]>([])
    const [chatActiveId, setChatActiveId] = useState<string>('')
    const [chatActive, setChatActive] = useState<Chat>()

    useEffect(() => {
        setChatActive(chatList.find((chat) => chat.id === chatActiveId))
    }, [chatActiveId, chatList])

    useEffect(() => {
        if (AILoading) getAIResponse()
    }, [AILoading])

    const getAIResponse = async () => {
        setTimeout(() => {
            let chatListClone = [...chatList]
            let chatIndex = chatListClone.findIndex(
                (chat) => chat.id === chatActiveId
            )
            if (chatIndex > -1) {
                chatListClone[chatIndex].messages.push({
                    id: uuidv4(),
                    author: 'ai',
                    body: 'Essa é uma resposta da ai',
                })
            }
            setChatList(chatListClone)
            setAILoading(false)
        }, 2000)
    }

    const handleCloseSideBar = () => {
        setOpenSideBar(false)
    }

    const handleOpenSideBar = () => {
        setOpenSideBar(true)
    }

    const handleClearConversations = () => {
        if (AILoading) return
        setChatActiveId('')
        setChatList([])
    }

    const handleNewChat = () => {
        if (AILoading) return
        setChatActiveId('')
        handleCloseSideBar()
    }
    console.log('ia', AILoading)

    const handleSelectChat = (id: string) => {
        // if (AILoading == false) {
        //     return
        // }
        // console.log('item')

        let item = chatList.find((item) => item.id === id)
        if (item) setChatActiveId(item.id)
        handleCloseSideBar()
    }

    const handleDeleteChat = (id: string) => {
        let chatListClone = [...chatList]
        let chatIndex = chatListClone.findIndex((item) => (item.id = id))
        chatListClone.splice(chatIndex, 1)
        setChatList(chatListClone)
        setChatActiveId('')
    }

    const handleEditChat = (id: string, newTitle: string) => {
        let chatListClone = [...chatList]
        let chatIndex = chatListClone.findIndex((item) => (item.id = id))
        chatListClone[chatIndex].title = newTitle
        setChatList(chatListClone)
    }

    const handleSendMessage = (message: string) => {
        if (!chatActiveId) {
            // New chat
            let newChatId = uuidv4()
            setChatList([
                {
                    id: newChatId,
                    title: message,
                    messages: [{ id: uuidv4(), author: 'me', body: message }],
                },
                ...chatList,
            ])
            setChatActiveId(newChatId)
        } else {
            // Update existing chat
            let chatListCLone = [...chatList]
            let chatIndex = chatListCLone.findIndex(
                (item) => item.id === chatActiveId
            )
            chatListCLone[chatIndex].messages.push({
                id: uuidv4(),
                author: 'me',
                body: message,
            })
            setChatList(chatListCLone)
        }
        setAILoading(true)
    }

    return (
        <main className="flex min-h-screen bg-grayDark">
            <SideBar
                open={openSideBar}
                onClose={handleCloseSideBar}
                onNewChat={handleNewChat}
                onClick={handleClearConversations}
            >
                {chatList.map((item) => (
                    <SideBarChatButton
                        key={item.id}
                        chatItem={item}
                        active={item.id === chatActiveId}
                        onClick={handleSelectChat}
                        onDelete={handleDeleteChat}
                        onEdit={handleEditChat}
                    />
                ))}
            </SideBar>
            <section className="flex flex-col w-full">
                <Header
                    onOpenSideBar={handleOpenSideBar}
                    onNewChat={handleNewChat}
                    title={chatActive ? chatActive.title : 'Novo chat'}
                />
                <ChatArea chat={chatActive} loading={AILoading} />
                <Footer
                    onSendMessage={handleSendMessage}
                    disabled={AILoading}
                />
            </section>
        </main>
    )
}

export default Page
