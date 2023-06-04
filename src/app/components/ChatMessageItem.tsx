import { ChatMessage } from '../types/ChatMessage'
import IconRobot from './icon/IconRobot'
import IconUser from './icon/IconUser'

type Props = {
    item: ChatMessage
}

const ChatMessageItem = ({ item }: Props) => {
    return (
        <div
            className={`${
                item.author == 'ai' ? 'bg-[#444654]' : ''
            } flex items-center md:pl-0 justify-center  p-4`}
        >
            <div className="flex items-center gap-2 w-[900px]">
                <div
                    className={`${
                        item.author == 'ai' ? 'bg-[#19C37D]' : 'bg-gray-600'
                    } rounded-sm p-1`}
                >
                    {item.author === 'ai' ? (
                        <IconRobot height={19} width={19} />
                    ) : (
                        <IconUser height={23} width={23} />
                    )}
                </div>
                <div className="flex-1 text-base whitespace-pre-wrap">
                    <p>{item.body}</p>
                </div>
            </div>
        </div>
    )
}

export default ChatMessageItem
