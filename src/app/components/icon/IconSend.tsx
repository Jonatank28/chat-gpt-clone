// icon:send | Zondicons http://www.zondicons.com | Steve Schoger
import * as React from 'react'

function IconSend(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            viewBox="0 0 20 20"
            fill="white"
            height="1em"
            width="1em"
            {...props}
        >
            <path d="M0 0l20 10L0 20V0zm0 8v4l10-2L0 8z" />
        </svg>
    )
}

export default IconSend
