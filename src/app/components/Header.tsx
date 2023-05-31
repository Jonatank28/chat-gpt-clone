import IconAdd from './icon/IconAdd'
import IconHamburgerMenu from './icon/IconHamburguerMenu'

type Props = {
    onOpenSideBar: () => void
    onNewChat: () => void
}

const Header = ({ onOpenSideBar, onNewChat }: Props) => {
    return (
        <header className="w-full flex items-center justify-between p-4 border-b border-gray-500 md:hidden">
            <div onClick={onOpenSideBar}>
                <IconHamburgerMenu width={22} height={22} />
            </div>
            <div>Aki vai a conversa</div>
            <div onClick={onNewChat}>
                <IconAdd width={22} height={22} />
            </div>
        </header>
    )
}

export default Header
