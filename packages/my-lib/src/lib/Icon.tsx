import React from "react";


interface IconProps {
    name: string;
}

const Icon: React.FC<IconProps> = (props) => {
    return (
        <span>
            <svg>
                <use xlinkHref={`#${props.name}`}/>
            </svg>
        </span>

    )
}

export {Icon};
