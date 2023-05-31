import React from 'react'

type Props = {
    icon: React.ReactNode
    title: string
    onClick: () => void
}

const ButtonSideBar = ({ icon, title, onClick }: Props) => {
    return (
        <div onClick={onClick} className="border-t border-gray-600">
            <div className="mt-4 rounded-md flex gap-2 items-center p-1 cursor-pointer hover:bg-gray-600/40">
                {icon}
                {title}
            </div>
        </div>
    )
}

export default ButtonSideBar
