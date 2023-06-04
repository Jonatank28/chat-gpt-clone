import IconDanger from './icon/IconDanger'
import IconSun from './icon/IconSun'
import IconThunderbolt from './icon/IconThunderbolt'

type Props = {}

const ChatPlaceholder = ({}: Props) => {
    return (
        <div className="flex flex-col justify-center items-center md:pb-52 h-screen ">
            <h3 className="text-3xl font-bold mb-14 mt-10">ChatGPT</h3>
            <div className="flex gap-6 flex-col md:flex-row justify-center pb-4">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-row md:flex-col items-center justify-center gap-2">
                        <IconSun width={22} height={22} />
                        <h1 className="text-lg">Examples</h1>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="p-4 bg-[#3E3F4B] hover:bg-[#202123] cursor-pointer transition-all duration-100 rounded-md w-[93vw] md:w-[240px]">
                            <p className="text-xs text-center">
                                Explain quantum computing in simple terms
                            </p>
                        </div>
                        <div className="p-4 bg-[#3E3F4B] hover:bg-[#202123] cursor-pointer transition-all duration-100 rounded-md md:w-[240px]">
                            <p className="text-xs text-center">
                                Explain quantum computing in simple terms
                            </p>
                        </div>
                        <div className="p-4 bg-[#3E3F4B] hover:bg-[#202123] cursor-pointer transition-all duration-100 rounded-md md:w-[240px]">
                            <p className="text-xs text-center">
                                Explain quantum computing in simple terms
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4 mt-6 md:mt-0">
                    <div className="flex flex-row md:flex-col items-center justify-center gap-2">
                        <IconThunderbolt width={22} height={22} />
                        <h1 className="text-lg">Capabilities</h1>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="p-4 bg-[#3E3F4B] rounded-md  md:w-[240px]">
                            <p className="text-xs text-center">
                                Explain quantum computing in simple terms
                            </p>
                        </div>
                        <div className="p-4 bg-[#3E3F4B] rounded-md md:w-[240px]">
                            <p className="text-xs text-center">
                                Explain quantum computing in simple terms
                            </p>
                        </div>
                        <div className="p-4 bg-[#3E3F4B] rounded-md md:w-[240px]">
                            <p className="text-xs text-center">
                                Explain quantum computing in simple terms
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4 mt-6 md:mt-0">
                    <div className="flex flex-row md:flex-col items-center justify-center gap-2">
                        <IconDanger width={22} height={22} />
                        <h1 className="text-lg">Limitations</h1>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="p-4 bg-[#3E3F4B] rounded-md md:w-[240px]">
                            <p className="text-xs text-center">
                                Explain quantum computing in simple terms
                            </p>
                        </div>
                        <div className="p-4 bg-[#3E3F4B] rounded-md md:w-[240px]">
                            <p className="text-xs text-center">
                                Explain quantum computing in simple terms
                            </p>
                        </div>
                        <div className="p-4 bg-[#3E3F4B] rounded-md md:w-[240px]">
                            <p className="text-xs text-center">
                                Explain quantum computing in simple terms
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatPlaceholder
