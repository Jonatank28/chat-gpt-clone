import IconSend from './icon/IconSend'
import { useState, KeyboardEvent, useRef, useEffect } from 'react'

type Props = {
    onSendMessage: (message: string) => void
    disabled: boolean
}

const ChatMessageInput = ({ onSendMessage, disabled }: Props) => {
    const [text, setText] = useState('')
    const textEl = useRef<HTMLTextAreaElement>(null)

    const handleTextKeyUp = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.code.toLowerCase() === 'enter' && !event.shiftKey) {
            event.preventDefault()
            handleSandMessage()
        }
    }

    const handleSandMessage = () => {
        if (!disabled && text.trim() !== '') {
            onSendMessage(text)
            setText('')
        }
    }

    useEffect(() => {
        if (textEl.current) {
            textEl.current.style.height = '0px'
            let scrollHeight = textEl.current.scrollHeight
            textEl.current.style.height = scrollHeight + 'px'
        }
        if (!text.length && textEl.current && textEl.current.style.height) {
            textEl.current.style.height = '0px'
            let scrollHeight = textEl.current.scrollHeight
            textEl.current.style.height = scrollHeight + 'px'
        }
        if (textEl.current && !disabled) textEl.current.focus()
    }, [text, textEl, disabled])

    return (
        <div className="w-full relative">
            <textarea
                ref={textEl}
                className="flex-1 w-full rounded-md border-2 border-none p-3 outline-none bg-[#40414F] pr-11 resize-none h-12 max-h-48 overflow-y-auto"
                placeholder="Envie uma mensagem"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyUp={handleTextKeyUp}
                disabled={disabled}
            />
            <div
                onClick={handleSandMessage}
                className={`absolute right-2 bottom-4 p-[6px] rounded-md ${
                    text.trim() !== '' && 'bg-green-500 cursor-pointer'
                } `}
            >
                <IconSend
                    className={`${
                        text.trim() !== '' ? 'opacity-100' : 'opacity-25'
                    }`}
                />
            </div>
        </div>
    )
}

export default ChatMessageInput
