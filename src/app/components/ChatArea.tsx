import { Chat } from '../types/Chat'
import ChatPlaceholder from './ChatPlaceholder'

type Props = {
    chat: Chat | undefined
}

const ChatArea = ({ chat }: Props) => {
    return (
        <section className="flex-auto h-0 overflow-y-auto">
            {!chat && <ChatPlaceholder />}
            {chat && chat.messages.map((item) => <h1>chatdddd</h1>)}
        </section>
    )
}

export default ChatArea
