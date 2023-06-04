import IconSend from './icon/IconSend'
import { useState } from 'react'

type Props = {
    onSendMessage: (message: string) => void
    disabled: boolean
}

const ChatMessageInput = ({ onSendMessage, disabled }: Props) => {
    const [typing, setTyping] = useState(false)

    const handleTyping = (message: string) => {
        if (message.length > 0) {
            setTyping(true)
        } else {
            setTyping(false)
        }
    }

    return (
        <div className="w-full relative ">
            <textarea
                className="w-full rounded-md border-2 border-none p-3 outline-none bg-[#40414F] pr-11"
                rows={1}
                placeholder="Envie uma mensagem"
                disabled={disabled}
                onChange={(e) => handleTyping(e.target.value)}
            />
            <div
                className={`absolute right-4 bottom-4 p-[6px] rounded-md ${
                    typing && 'bg-green-500 cursor-pointer'
                } `}
            >
                <IconSend className={`opacity-25 ${typing && 'opacity-100'}`} />
            </div>
        </div>
    )
}

export default ChatMessageInput
