import React from "react";
import wechat from './icons/wechat.svg'

console.log(wechat)

interface IconProps {
    name: string;
}


const Icon: React.FC<IconProps> = (props) => {
    return <img src={wechat} alt='微信'/>
}

export {Icon};
