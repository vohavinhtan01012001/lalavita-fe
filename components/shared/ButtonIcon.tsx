'use client'
import clsx from "clsx";
import { IconSet, IconSetProps } from "./IconSet";
import { motion, MotionProps } from 'framer-motion';

type ButtonIconType = {
    icon?: IconSetProps,
    className?: string,
    onClick?: () => void;
    disabled?: boolean;
} & MotionProps

const ButtonIcon = ({ icon, className, onClick, disabled = false, ...props }: ButtonIconType) => {
    return (
        <motion.button
            whileHover={!disabled ? { scale: 1.05 } : {}}
            whileTap={!disabled ? { scale: 0.95 } : {}}
            className={
                clsx(
                    'h-[50px] w-[50px] p-[14px] rounded-full ',
                    !disabled ? 'bg-[#FED614] cursor-pointer' : 'bg-[#e7e7e7] cursor-default',
                    className
                )
            }
            onClick={!disabled ? onClick : undefined}
            disabled={disabled}
            {...props}
        >
            <IconSet
                {...icon}
            />
        </motion.button>
    )
}

export default ButtonIcon;