import ButtonSideBar from './ButtonSideBar'
import IconAdd from './icon/IconAdd'
import IconClose from './icon/IconClose'
import IconTrash from './icon/IconTrash'

type Props = {
    children: React.ReactNode
    open: boolean
    onClose: () => void
    onNewChat: () => void
    onClick: () => void
}

const SideBar = ({ open, onClose, onNewChat, onClick, children }: Props) => {
    return (
        <section
            className={`fixed left-0 top-0 bottom-0 bg-slate-500 ${
                open ? 'w-screen' : ''
            } md:w-64`}
        >
            <div
                className={`
                transition-all duration-300 ease-in-out
                md:transition-none md:duration-0 md:ease-in-out
            ${open ? 'ml-0' : '-ml-96'}
            w-64 bg-gray-900 h-screen p-2 flex flex-col justify-between relative md:w-64 md:ml-0`}
            >
                <div>
                    <IconClose
                        height={25}
                        width={25}
                        onClick={onClose}
                        className="absolute top-4 -right-7 md:hidden"
                    />
                </div>
                <div className="flex items-center p-2 border border-gray-200/20 rounded-md cursor-pointer hover:bg-gray-500/10">
                    <IconAdd
                        width={22}
                        height={22}
                        onClick={onNewChat}
                        className="mr-2"
                    />{' '}
                    Novo chat
                </div>
                <div className="flex-1 overflow-y-auto my-1">{children}</div>
                <div>
                    <ButtonSideBar
                        title="Apagar todas as conversas"
                        icon={<IconTrash height={14} width={14} />}
                        onClick={onClick}
                    />
                </div>
            </div>
        </section>
    )
}

export default SideBar
