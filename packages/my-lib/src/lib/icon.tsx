import React from "react";
import './icon.scss'

interface IconProps {
    name: string;
    onClick?: React.MouseEventHandler<SVGElement>;
}

const Icon: React.FC<IconProps> = (props) => {
    return (
        <span>
            <svg className="summer-icon" onClick={props.onClick}>
                <use xlinkHref={`#${props.name}`}/>
            </svg>
        </span>

    )
}

export {Icon};
