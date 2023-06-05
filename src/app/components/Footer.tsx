import Link from 'next/link'
import ChatMessageInput from './ChatMessageInput'

type Props = {
    onSendMessage: (message: string) => void
    disabled: boolean
}

const Footer = ({ onSendMessage, disabled }: Props) => {
    return (
        <div className="flex justify-center items-center w-full pb-2">
            <div className="w-[1200px] flex flex-col items-center justify-center">
                <div className="w-[97vw] md:w-3/4 mx-auto ">
                    <ChatMessageInput
                        onSendMessage={onSendMessage}
                        disabled={disabled}
                    />
                </div>
                <div className="pt-2">
                    <p className="text-center text-xs text-gray-300">
                        Feito com ♥ por{' '}
                        <Link
                            href="https://johncode.tech"
                            target="_blank"
                            className="underline"
                        >
                            Jonatan
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
