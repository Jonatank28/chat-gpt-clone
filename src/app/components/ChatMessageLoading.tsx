import IconRobot from './icon/IconRobot'
import IconUser from './icon/IconUser'

type Props = {}

const ChatMessageLoading = ({}: Props) => {
    return (
        <div className="bg-[#444654] flex items-center md:pl-0 justify-center  p-4">
            <div className="flex items-center gap-2 w-[900px]">
                <div className="bg-[#19C37D] rounded-sm p-1">
                    <IconRobot height={19} width={19} />
                </div>
                <div className="flex-1 text-base whitespace-pre-wrap">
                    <div className="w-2 h-4 bg-slate-300 animate-blink"></div>
                </div>
            </div>
        </div>
    )
}

export default ChatMessageLoading
