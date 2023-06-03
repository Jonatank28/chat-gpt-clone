import IconAdd from './icon/IconAdd'
import IconHamburgerMenu from './icon/IconHamburguerMenu'

type Props = {
    onOpenSideBar: () => void
    onNewChat: () => void
}

const Header = ({ onOpenSideBar, onNewChat }: Props) => {
    return (
        <header className="w-full flex items-center justify-between p-4 border-b border-gray-500 md:hidden">
            <div onClick={onOpenSideBar} className="cursor-pointer">
                <IconHamburgerMenu width={22} height={22} />
            </div>
            <div className="truncate mx-2">
                Aki vai a
                conversaghgggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg
            </div>
            <div onClick={onNewChat} className="cursor-pointer">
                <IconAdd width={22} height={22} />
            </div>
        </header>
    )
}

export default Header
