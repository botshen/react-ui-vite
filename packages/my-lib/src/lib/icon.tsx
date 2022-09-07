import React from "react";
import './icon.scss'

interface IconProps {
    name: string;
}

const Icon: React.FC<IconProps> = (props) => {
    return (
        <span>
            <svg className="summer-icon">
                <use xlinkHref={`#${props.name}`}/>
            </svg>
        </span>

    )
}

export {Icon};